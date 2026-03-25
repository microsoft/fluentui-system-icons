// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const { writePerIconFiles } = require('./per-icon.writer');

/** @typedef {{ [key: string]: 'mirror' | 'unique' }} RtlMetadata */

/**
 * Convert a raw glyph filename entry into the exported React icon name.
 * @param {string} iconName Raw name from codepoint map (e.g. ic_fluent_access_time_20_filled)
 * @param {boolean} resizable Whether we're processing resizable icons (strip the size token)
 */
function getReactIconNameFromGlyphName(iconName, resizable) {
  let name = iconName.replace('ic_fluent_', '');
  name = resizable ? name.replace('20', '') : name;
  return _.upperFirst(_.camelCase(name));
}

/**
 * Load RTL metadata file once.
 * @param {string} rtlFilePath
 * @returns {RtlMetadata}
 */
function loadRtlMetadata(rtlFilePath) {
  return JSON.parse(fs.readFileSync(rtlFilePath, 'utf-8'));
}

/**
 * Generate the JS export string for a single font icon.
 * @param {string} exportName
 * @param {number} codepoint
 * @param {boolean} resizable
 * @param {boolean} flipInRtl
 * @param {string=} rawGlyphName Used to derive size for sized variants
 */
function buildFontIconExport(exportName, codepoint, resizable, flipInRtl, rawGlyphName) {
  const style = /filled$/i.test(rawGlyphName || '') ? 0 : /regular$/i.test(rawGlyphName || '') ? 1 : 3; // Light = 3
  const sizeMatch = rawGlyphName && /(?<=_)\d+(?=_filled|_regular|_light)/.exec(rawGlyphName);
  const size = resizable ? undefined : sizeMatch?.[0];
  return `export const ${exportName}: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon(${JSON.stringify(exportName)}, ${JSON.stringify(String.fromCodePoint(codepoint))}, ${resizable ? 2 : style}, ${resizable ? undefined : size}${flipInRtl ? ', { flipInRtl: true }' : ''}));`;
}

/**
 * Returns the standard header lines used in generated icon files.
 * @param {string} relImport - relative import path to createFluentIcon
 * @returns {string[]}
 */
function getCreateFluentIconHeader(relImport) {
  return [
    `"use client";`,
    `import type { FluentFontIcon } from '${relImport}';`,
    `import { createFluentFontIcon } from '${relImport}';`,
  ];
}

/**
 * @typedef {{ exportName: string; exportCode: string; fileName: string; rawName: string }} FontIconExportItem
 */

/**
 * Collect font icon export items for a single variant set (resizable or sized) without writing to disk.
 * @param {Array<import('./convert-font').IconEntry>} iconEntries
 * @param {RtlMetadata} rtlMetadata
 * @param {boolean} resizable
 * @returns {{ iconNames: string[]; items: Array<FontIconExportItem> }}
 */
function collectFontIconItems(iconEntries, rtlMetadata, resizable) {
  /** @type {string[]} */
  const iconNames = [];
  /** @type {Array<FontIconExportItem>} */
  const items = [];

  for (const entry of iconEntries) {
    for (const [rawName, codepoint] of Object.entries(entry.iconEntries)) {
      const exportName = getReactIconNameFromGlyphName(rawName, resizable);
      const flipInRtl = rtlMetadata[exportName] === 'mirror';
      const exportCode = buildFontIconExport(exportName, codepoint, resizable, flipInRtl, rawName);
      const fileName = `${_.kebabCase(exportName)}.tsx`;

      items.push({ exportName, exportCode, fileName, rawName });
      iconNames.push(exportName);
    }
  }

  return { iconNames, items };
}

/**
 * Generates per-icon .tsx files for both resizable and sized font icon variants in a single pass.
 * Merges both sets into one write so that resizable + sized variants for the same icon
 * are co-located in a single file (matching the SVG atom pattern).
 *
 * @param {string} destPath
 * @param {{ resizable: Array<import('./convert-font').IconEntry>; sized: Array<import('./convert-font').IconEntry> }} iconEntries
 * @param {RtlMetadata} rtlMetadata
 * @param {boolean} groupByBase
 * @returns {Promise<{ resizable: { iconNames: string[] }; sized: { iconNames: string[] }; fileCount: number }>}
 */
async function generatePerIconFiles(destPath, iconEntries, rtlMetadata, groupByBase = true) {
  const resizable = collectFontIconItems(iconEntries.resizable, rtlMetadata, true);
  const sized = collectFontIconItems(iconEntries.sized, rtlMetadata, false);

  // merge both sets into a single write — grouping logic in writePerIconFiles
  // co-locates resizable + sized variants for the same icon in one file
  const headerLines = getCreateFluentIconHeader('../../utils/fonts/createFluentFontIcon');
  const { fileCount } = await writePerIconFiles(destPath, [...resizable.items, ...sized.items], headerLines, {
    groupByBase,
  });

  return {
    resizable: { iconNames: resizable.iconNames },
    sized: { iconNames: sized.iconNames },
    fileCount,
  };
}

module.exports = {
  getReactIconNameFromGlyphName,
  loadRtlMetadata,
  buildFontIconExport,
  getCreateFluentIconHeader,
  generatePerIconFiles,
};

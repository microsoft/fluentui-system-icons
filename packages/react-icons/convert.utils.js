// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const { writePerIconFiles } = require('./per-icon.writer');
const { writeSpriteFiles } = require('./sprite.writer');

/** @typedef {{ [key: string]: 'mirror' | 'unique' }} RtlMetadata */

/**
 * Returns the standard header lines used in generated icon files.
 * @param {string} relImport - relative import path to createFluentIcon
 * @returns {string[]}
 */
function getCreateFluentIconHeader(relImport) {
  return [
    `"use client";`,
    `import type { FluentIcon } from '${relImport}';`,
    `import { createFluentIcon } from '${relImport}';`,
  ];
}

/**
 * @typedef {Object} ParsedIconSource
 * @property {string} exportName - PascalCase export name (e.g. 'AccessTime20Filled')
 * @property {string} fileName - kebab-case file name with .tsx extension
 * @property {{ paths: string[] } | { rawSvg: string }} iconData - extracted SVG data
 * @property {string} width - numeric width string (e.g. '20') or '1em' for resizable
 * @property {boolean} isColor - true if this is a color icon variant
 * @property {boolean} flipInRtl - true if the icon should be mirrored in RTL contexts
 */

/**
 * Parse a single SVG source file and extract structured icon data.
 * Returns null if the file should be skipped (e.g., wrong size for resizable set).
 *
 * This is a pure data-extraction step — template/export-code generation
 * is handled by domain-specific writers (see {@link buildIconExportCode},
 * sprite.writer.js).
 *
 * @param {{file: string, srcFile: string, resizable: boolean, metadata: RtlMetadata}} opts
 * @returns {ParsedIconSource | null}
 */
function parseIconSource(opts) {
  const { file, srcFile, resizable, metadata } = opts;
  if (resizable && !file.includes('20')) return null;

  let iconName = file.slice(0, -4); // strip .svg
  iconName = iconName.replace('ic_fluent_', '');
  iconName = resizable ? iconName.replace('20', '') : iconName;

  let exportBasename = _.camelCase(iconName);
  const exportName = exportBasename[0].toUpperCase() + exportBasename.slice(1);
  const flipInRtl = metadata[exportName] === 'mirror';
  const isColor = iconName.endsWith('_color');

  const svgContent = fs.readFileSync(srcFile, 'utf8');
  /**
   * @param {string} key
   */
  const getAttr = (key) => [...svgContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, 'g'))].map((v) => v[0]);
  const rawWidth = resizable ? '"1em"' : getAttr('width')[0];
  const width = rawWidth.replace(/"/g, '');

  /** @type {{ paths: string[] } | { rawSvg: string }} */
  let iconData;
  if (isColor) {
    const innerSvg = svgContent
      .replace(/^[\s\S]*?<svg[^>]*>/, '')
      .replace(/<\/svg>[\s\S]*$/, '')
      .trim();
    iconData = { rawSvg: innerSvg };
  } else {
    const pathValues = getAttr('d').map((v) => v.slice(1, -1)); // strip surrounding quotes
    iconData = { paths: pathValues };
  }

  return { exportName, fileName: _.kebabCase(exportName) + '.tsx', iconData, width, isColor, flipInRtl };
}

/**
 * Build an atom export code string from parsed icon source data.
 *
 * This produces the `export const X: FluentIcon = …` line used by both
 * chunk-based and per-icon atom outputs.
 *
 * @param {ParsedIconSource} parsed
 * @returns {string}
 */
function buildIconExportCode(parsed) {
  const { exportName, iconData, width, isColor, flipInRtl } = parsed;
  const widthStr = `"${width}"`;
  const options =
    flipInRtl && isColor
      ? ', { flipInRtl: true, color: true }'
      : flipInRtl
        ? ', { flipInRtl: true }'
        : isColor
          ? ', { color: true }'
          : '';

  if ('rawSvg' in iconData) {
    return `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${widthStr}, \`${iconData.rawSvg}\`${options}));`;
  }

  const paths = iconData.paths.map((p) => `"${p}"`).join(',');
  return `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${widthStr}, [${paths}]${options}));`;
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
 * @typedef {{ atomsDest: string; spriteAtomsDest?: string }} DestOptions
 */

/**
 * Generates per-icon .tsx files for both resizable and sized variants in a single pass.
 * Optionally generates SVG sprite .svg + .tsx pairs when `dest.spriteAtomsDest` is provided.
 * @param {Array<{file: string; srcFile: string}>} sourceFiles
 * @param {DestOptions} dest
 * @param {RtlMetadata} rtlMetadata
 * @param {boolean} groupByBase
 * @returns {Promise<{ resizable: { iconNames: string[] }; sized: { iconNames: string[] }; fileCount: number; spriteFileCount: number }>}
 */
async function generatePerIconFiles(sourceFiles, dest, rtlMetadata, groupByBase = true) {
  const { atomsDest, spriteAtomsDest } = dest;
  /** @type {string[]} */
  const resizableIconNames = [];
  /** @type {Array<ParsedIconSource & {exportCode: string}>} */
  const resizableItems = [];

  /** @type {string[]} */
  const sizedIconNames = [];
  /** @type {typeof resizableItems} */
  const sizedItems = [];

  for (const entry of sourceFiles) {
    // sized export for every file
    const sizedParsed = parseIconSource({
      file: entry.file,
      srcFile: entry.srcFile,
      resizable: false,
      metadata: rtlMetadata,
    });
    if (sizedParsed) {
      sizedItems.push({ ...sizedParsed, exportCode: buildIconExportCode(sizedParsed) });
      sizedIconNames.push(sizedParsed.exportName);
    }

    // resizable export only for 20px files (size removed from name, width="1em")
    if (entry.file.includes('20')) {
      const resizableParsed = parseIconSource({
        file: entry.file,
        srcFile: entry.srcFile,
        resizable: true,
        metadata: rtlMetadata,
      });
      if (resizableParsed) {
        resizableItems.push({ ...resizableParsed, exportCode: buildIconExportCode(resizableParsed) });
        resizableIconNames.push(resizableParsed.exportName);
      }
    }
  }

  // merge both sets into a single write — grouping logic in writePerIconFiles
  // co-locates resizable + sized variants for the same icon in one file
  const svgHeader = getCreateFluentIconHeader('../../utils/createFluentIcon');
  const { fileCount } = await writePerIconFiles(atomsDest, [...resizableItems, ...sizedItems], svgHeader, {
    groupByBase,
  });

  // Optionally generate SVG sprite pairs (.svg + .tsx) from the same enriched data
  let spriteFileCount = 0;
  if (spriteAtomsDest) {
    const spriteResult = await writeSpriteFiles(spriteAtomsDest, [...resizableItems, ...sizedItems], { groupByBase });
    spriteFileCount = spriteResult.fileCount;
  }

  return {
    resizable: { iconNames: resizableIconNames },
    sized: { iconNames: sizedIconNames },
    fileCount,
    spriteFileCount,
  };
}

module.exports = {
  parseIconSource,
  buildIconExportCode,
  getCreateFluentIconHeader,
  loadRtlMetadata,
  generatePerIconFiles,
};

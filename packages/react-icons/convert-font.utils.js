// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

/**
 * Core shared utilities for both chunked (convert-font.js) and per-icon (convert-font-per-icon.js)
 * font React icon generators. Consolidates naming, codepoint map processing, and RTL handling
 * to eliminate duplication and accidental overwrites of the original source codepoint maps.
 */

const fs = require('fs');
const _ = require('lodash');

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

module.exports = {
  getReactIconNameFromGlyphName,
  loadRtlMetadata,
  buildFontIconExport,
};

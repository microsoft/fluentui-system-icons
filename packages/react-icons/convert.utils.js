// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

/**
 * Shared utilities for generating and managing icon metadata across SVG and font conversion scripts.
 *
 * The metadata format is:
 * {
 *   "IconName": {
 *     "svg": boolean,    // true if icon exists in SVG format
 *     "font": boolean,   // true if icon exists in font format
 *     "type": "resizable" | "sized"  // icon type classification
 *   }
 * }
 */

/**
 * @typedef {Object} IconMetadata
 * @property {boolean} svg - true if icon exists in SVG format
 * @property {boolean} font - true if icon exists in font format
 * @property {'resizable' | 'sized'} type - icon type classification
 */

/**
 * @typedef {Record<string, IconMetadata>} IconMetadataCollection
 */

const fs = require('node:fs/promises');
const path = require('node:path');

/**
 * Create metadata for specific format (SVG or font)
 * @param {string[]} iconNames - Array of icon names
 * @param {'svg' | 'font'} iconFormat - Format of the icons (svg or font)
 * @param {IconMetadata['type']} iconType - Type of the icons (resizable or sized)
 * @returns {IconMetadataCollection}
 */
function createFormatMetadata(iconNames, iconFormat, iconType) {
  const metadata = /** @type {IconMetadataCollection} */ ({});
  iconNames.forEach((name) => {
    metadata[name] = {
      svg: iconFormat === 'svg',
      font: iconFormat === 'font',
      type: iconType,
    };
  });
  return metadata;
}

/**
 * Write metadata to file
 * @param {string} metadataPath - Path to write the metadata.json file
 * @param {Record<string, any>} metadata - Metadata object to write
 */
async function writeMetadata(metadataPath, metadata) {
  // Ensure the directory exists
  const dir = path.dirname(metadataPath);
  await fs.mkdir(dir, { recursive: true });

  console.log(`[metadata]: creating ${metadataPath}`);
  await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));
}

module.exports = {
  createFormatMetadata,
  writeMetadata,
};

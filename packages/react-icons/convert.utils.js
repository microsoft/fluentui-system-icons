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

const fs = require("node:fs/promises");
const path = require("node:path");

/**
 * Create metadata for specific format (SVG or font)
 * @param {string[]} iconNames - Array of icon names
 * @param {'svg' | 'font'} iconFormat - Format of the icons (svg or font)
 * @param {'resizable' | 'sized'} iconType - Type of the icons (resizable or sized)
 * @returns {Record<string, {svg: boolean, font: boolean, type: string}>}
 */
function createFormatMetadata(iconNames, iconFormat, iconType) {
  const metadata = /** @type {Record<string, {svg: boolean, font: boolean, type: string}>} */ ({});
  iconNames.forEach(name => {
    metadata[name] = {
      svg: iconFormat === 'svg',
      font: iconFormat === 'font',
      type: iconType
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

  await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));
}

module.exports = {
  createFormatMetadata,
  writeMetadata
};

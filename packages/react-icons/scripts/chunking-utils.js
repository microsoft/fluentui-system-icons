// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const crypto = require('crypto');

/**
 * Creates stable chunks from an array of icon exports using prefix-based distribution
 * with alphabetical locality. This approach maintains:
 * 1. Alphabetical locality (related icons like Add/AddRegular/AddFilled stay together)
 * 2. Stability (existing chunks don't reshuffle when new icons are added)
 * 3. Determinism (same icon always goes to same chunk based on its prefix)
 *
 * The chunk count is FIXED and should never change after initial release.
 * Changing the chunk count would cause all icons to reshuffle (due to modulo operation),
 * defeating the purpose of deterministic chunking. As the icon library grows, some chunks
 * will naturally become fuller than others, but this is acceptable and maintains stability.
 *
 * Icons within each chunk remain in alphabetical order if the input arrays are
 * pre-sorted alphabetically (recommended but not required).
 *
 * @param {string[]} iconExports - Array of icon export strings
 * @param {string[]} iconNames - Array of corresponding icon names (used for prefix hashing)
 * @param {Object} options - Options controlling chunk sizing.
 * @param {number} options.chunkCount - Fixed number of chunks to create. This value should
 *                                      NEVER change after initial release to prevent reshuffling.
 * @returns {string[][]} - Array of chunks, each containing icon export strings.
 *                        If input is pre-sorted alphabetically, chunks will maintain that order internally.
 */
function createStableChunks(iconExports, iconNames, options) {
  /**
   * Use 3-character prefix for good distribution while maintaining strong alphabetical locality
   * This means "AddCircle*" and "AddSquare*" may be in different chunks,
   * but "AddCircleRegular" and "AddCircleFilled" stay together
   */
  const PREFIX_LENGTH = 3;
  const { chunkCount } = options;

  if (!Number.isInteger(chunkCount) || chunkCount <= 0) {
    throw new Error('chunkCount must be a positive integer');
  }
  if (iconExports.length !== iconNames.length) {
    throw new Error('iconExports and iconNames arrays must have the same length');
  }

  if (iconExports.length === 0) {
    return [];
  }

  // Initialize empty chunks
  /** @type {string[][]} */
  const chunks = Array.from({ length: chunkCount }, () => []);

  // Strategy: Use 3-character prefixes to distribute icons
  // For each icon, we hash its prefix to determine chunk assignment
  // This keeps alphabetically related icons together while distributing across chunks
  for (let i = 0; i < iconExports.length; i++) {
    const iconName = iconNames[i];

    const prefix = getPrefix(iconName, PREFIX_LENGTH);
    const hash = simpleHash(prefix);
    const chunkIndex = hash % chunkCount;
    chunks[chunkIndex].push(iconExports[i]);
  }

  // Return all chunks (including empty ones) to preserve stable indices.
  // Filtering would shift chunk positions when a previously-empty slot gets filled,
  // causing unrelated icons to change chunk files.
  return chunks;

  // ===========
}

/**
 * String hash function for deterministic chunk assignment using Node.js crypto
 * @param {string} str - String to hash
 * @returns {number} - Hash value
 */
function simpleHash(str) {
  const hash = crypto.createHash('sha256').update(str).digest();
  // Use first 4 bytes as a 32-bit unsigned integer
  return hash.readUInt32BE(0);
}

/**
 * Get a stable prefix key for an icon name that balances locality with distribution
 * @param {string} name - Icon name
 * @param {number} prefixLength - Length of prefix to use (1-3)
 * @returns {string}
 */
function getPrefix(name, prefixLength) {
  return name.substring(0, Math.min(prefixLength, name.length)).toUpperCase();
}

module.exports = {
  createStableChunks,
  simpleHash,
};

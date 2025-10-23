// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const crypto = require('crypto');

/**
 * Provides stable chunking utilities for icon distribution to prevent bundle size regressions.
 * Uses hash-based assignment to ensure existing icons stay in the same chunk when new icons are added.
 */

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
 * Creates stable chunks from an array of icon exports using prefix-based distribution
 * with alphabetical locality. This approach maintains:
 * 1. Alphabetical locality (related icons like Add/AddRegular/AddFilled stay together)
 * 2. Stability (existing chunks don't reshuffle when new icons are added)
 * 3. Determinism (same icon always goes to same chunk based on its prefix)
 *
 * The algorithm uses varying-length prefixes to distribute icons into chunks. Icons starting
 * with the same letter(s) stay together, but large letter groups can be subdivided for
 * better distribution. Icons within each chunk remain in alphabetical order if the input
 * arrays are pre-sorted alphabetically (recommended but not required).
 *
 * @param {string[]} iconExports - Array of icon export strings
 * @param {string[]} iconNames - Array of corresponding icon names (used for prefix hashing)
 * @param {Object} options - Options controlling chunk sizing.
 * @param {number|null} [options.chunkCount] - Fixed number of chunks to create. If provided
 *                                            (not `null`/`undefined`), this value is used
 *                                            directly. Otherwise `chunkSize` is used
 *                                            to derive a chunk count from an internal
 *                                            estimated maximum icon count (30000).
 * @param {number} [options.chunkSize] - Desired approximate number of icons per chunk.
 *                                              Mutually exclusive with `chunkCount`.
 * @param {number} [options.estimatedMaxIcons=30_000] - Estimated maximum number of icons (for chunking).
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
  const {
    chunkSize,
    chunkCount,
    // For react-icons, we expect around 25,000-30,000 icons total
    // With target chunk size of 1000, we need ~30 chunks
    estimatedMaxIcons = 30_000
  } = options;
  if (chunkSize !== undefined && chunkCount !== undefined) {
    throw new Error('Specify either targetChunkSize or numChunks, not both.');
  }
  if(chunkCount == null && !(Number.isInteger(chunkSize) && Number.isInteger(estimatedMaxIcons) )) {
    throw new Error('When chunkCount is not specified, both chunkSize and estimatedMaxIcons must be integers.');
  }
  if (iconExports.length !== iconNames.length) {
    throw new Error('iconExports and iconNames arrays must have the same length');
  }

  if (iconExports.length === 0) {
    return [];
  }

  // Determine final count of chunks
  // If `chunkCount` is explicitly provided, use it for maximum stability (fixed chunk count)
  // Otherwise, calculate based on estimated max icons to allow growth without changing chunk count
  const finalChunkCount = chunkCount != null ? chunkCount : Math.ceil(estimatedMaxIcons / /** @type{number} */(chunkSize));

  // Initialize empty chunks
  /** @type {string[][]} */
  const chunks = Array.from({ length: finalChunkCount }, () => []);

  // Strategy: Use variable-length prefixes to distribute icons
  // For each icon, we'll hash its prefix to determine chunk assignment
  // This keeps alphabetically related icons together while distributing across chunks
  for (let i = 0; i < iconExports.length; i++) {
    const iconName = iconNames[i];

    const prefix = getPrefix(iconName, PREFIX_LENGTH);
    const hash = simpleHash(prefix);
    const chunkIndex = hash % finalChunkCount;
    chunks[chunkIndex].push(iconExports[i]);
  }

  // Filter out empty chunks and return
  return chunks.filter(chunk => chunk.length > 0);

  // ===========

   /**
   * Get a stable prefix key for an icon name that balances locality with distribution
   * @param {string} name - Icon name
   * @param {number} prefixLength - Length of prefix to use (1-3)
   * @returns {string}
   */
  function getPrefix(name, prefixLength) {
    return name.substring(0, Math.min(prefixLength, name.length)).toUpperCase();
  }
}

module.exports = {
  createStableChunks,
  simpleHash
};
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
 * Creates stable chunks from an array of icon exports using hash-based distribution
 * @param {string[]} iconExports - Array of icon export strings
 * @param {string[]} iconNames - Array of corresponding icon names (used for hashing)
 * @param {Object} options - Options controlling chunk sizing.
 * @param {number|null} [options.chunkCount] - Fixed number of chunks to create. If provided
 *                                            (not `null`/`undefined`), this value is used
 *                                            directly. Otherwise `chunkSize` is used
 *                                            to derive a chunk count from an internal
 *                                            estimated maximum icon count (30000).
 * @param {number} [options.chunkSize] - Desired approximate number of icons per chunk.
 *                                              Mutually exclusive with `chunkCount`.
 * @param {number} [options.estimatedMaxIcons=30_000] - Estimated maximum number of icons (for chunking).
 * @returns {string[][]} - Array of chunks, each containing icon export strings
 */
function createStableChunks(iconExports, iconNames, options) {
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
  /**
   * @type {string[][]}
   */
  const chunks = Array.from({ length: finalChunkCount }, () => []);

  // Distribute icons to chunks based on hash of icon name
  for (let i = 0; i < iconExports.length; i++) {
    const iconName = iconNames[i];
    const hash = simpleHash(iconName);
    const chunkIndex = hash % finalChunkCount;
    chunks[chunkIndex].push(iconExports[i]);
  }

  // Filter out empty chunks
  return chunks.filter(chunk => chunk.length > 0);
}

module.exports = {
  createStableChunks,
  simpleHash
};
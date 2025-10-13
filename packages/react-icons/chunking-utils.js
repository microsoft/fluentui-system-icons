// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
 * @param {number} targetChunkSize - Target size for each chunk (used to determine number of chunks)
 * @param {number} [maxChunks] - Maximum number of chunks to create (for stability across builds)
 * @returns {string[][]} - Array of chunks, each containing icon export strings
 */
function createStableChunks(iconExports, iconNames, targetChunkSize, maxChunks = null) {
  if (iconExports.length !== iconNames.length) {
    throw new Error('iconExports and iconNames arrays must have the same length');
  }

  if (iconExports.length === 0) {
    return [];
  }

  // Use a fixed number of chunks to ensure stability
  // If maxChunks is not provided, use a reasonable default based on estimated icon count
  let numChunks;
  if (maxChunks !== null) {
    numChunks = maxChunks;
  } else {
    // For react-icons, we expect around 25,000-30,000 icons total
    // With target chunk size of 1000, we need ~30 chunks
    // With target chunk size of 500, we need ~60 chunks  
    const estimatedMaxIcons = targetChunkSize === 500 ? 30000 : 25000; // fonts vs svg icons
    numChunks = Math.ceil(estimatedMaxIcons / targetChunkSize);
  }
  
  // Initialize empty chunks
  const chunks = Array.from({ length: numChunks }, () => []);
  
  // Distribute icons to chunks based on hash of icon name
  for (let i = 0; i < iconExports.length; i++) {
    const iconName = iconNames[i];
    const hash = simpleHash(iconName);
    const chunkIndex = hash % numChunks;
    chunks[chunkIndex].push(iconExports[i]);
  }

  // Filter out empty chunks
  return chunks.filter(chunk => chunk.length > 0);
}

module.exports = {
  createStableChunks,
  simpleHash
};
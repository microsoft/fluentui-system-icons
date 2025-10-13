// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { describe, it, expect } from 'vitest';
import { createStableChunks, simpleHash } from './chunking-utils.js';

describe('chunking-utils', () => {
  describe('simpleHash', () => {
    it('should produce consistent hash for same input', () => {
      const input = 'AccessTime';
      const hash1 = simpleHash(input);
      const hash2 = simpleHash(input);
      expect(hash1).toBe(hash2);
    });

    it('should produce different hashes for different inputs', () => {
      const hash1 = simpleHash('AccessTime');
      const hash2 = simpleHash('AddCircle');
      expect(hash1).not.toBe(hash2);
    });

    it('should always return positive numbers', () => {
      const inputs = ['AccessTime', 'ZoomedOutView', 'A', 'ZZZZZ', '123'];
      inputs.forEach(input => {
        expect(simpleHash(input)).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('createStableChunks', () => {
    it('should distribute icons into chunks based on default estimation', () => {
      const iconExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const iconNames = ['A', 'B', 'C'];
      const targetChunkSize = 2;

      const chunks = createStableChunks(iconExports, iconNames, targetChunkSize);
      
      // With default estimation, should create many chunks (but filtered to non-empty)
      expect(chunks.length).toBeGreaterThan(0);
      expect(chunks.length).toBeLessThanOrEqual(3); // Can't have more chunks than icons
      
      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(3);
    });

    it('should maintain stable assignment when new icons are added', () => {
      // Initial set of icons
      const initialExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const initialNames = ['A', 'B', 'C'];
      
      const initialChunks = createStableChunks(initialExports, initialNames, 2, 5); // Use fixed 5 chunks
      
      // Add new icon in alphabetical order
      const expandedExports = ['export const A = ...', 'export const A1 = ...', 'export const B = ...', 'export const C = ...'];
      const expandedNames = ['A', 'A1', 'B', 'C'];
      
      const expandedChunks = createStableChunks(expandedExports, expandedNames, 2, 5); // Same fixed 5 chunks
      
      // Find where original icons ended up
      const getIconChunkMap = (chunks, names) => {
        const map = new Map();
        chunks.forEach((chunk, chunkIndex) => {
          chunk.forEach(iconExport => {
            // Extract icon name from export
            const match = iconExport.match(/export const (\w+) =/);
            if (match) {
              map.set(match[1], chunkIndex);
            }
          });
        });
        return map;
      };
      
      const initialMap = getIconChunkMap(initialChunks, initialNames);
      const expandedMap = getIconChunkMap(expandedChunks, expandedNames);
      
      // Original icons should stay in same chunks
      expect(initialMap.get('A')).toBe(expandedMap.get('A'));
      expect(initialMap.get('B')).toBe(expandedMap.get('B'));
      expect(initialMap.get('C')).toBe(expandedMap.get('C'));
    });

    it('should handle empty input', () => {
      const chunks = createStableChunks([], [], 10);
      expect(chunks).toEqual([]);
    });

    it('should handle single icon', () => {
      const chunks = createStableChunks(['export const A = ...'], ['A'], 10);
      expect(chunks.length).toBe(1);
      expect(chunks[0]).toEqual(['export const A = ...']);
    });

    it('should respect maxChunks when provided', () => {
      const iconExports = ['export const A = ...', 'export const B = ...'];
      const iconNames = ['A', 'B'];
      
      const chunks = createStableChunks(iconExports, iconNames, 10, 1); // Force single chunk
      expect(chunks.length).toBe(1);
      expect(chunks[0].length).toBe(2);
    });

    it('should respect maxChunks parameter for stability', () => {
      const iconExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const iconNames = ['A', 'B', 'C'];
      
      // With maxChunks=5, should create exactly 5 chunks (some may be empty)
      const chunks = createStableChunks(iconExports, iconNames, 1, 5);
      
      // Filter out empty chunks - we should get 3 non-empty chunks or fewer
      expect(chunks.length).toBeLessThanOrEqual(5);
      
      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(3);
    });

    it('should throw when iconExports and iconNames have different lengths', () => {
      expect(() => {
        createStableChunks(['export const A = ...'], ['A', 'B'], 2);
      }).toThrow('iconExports and iconNames arrays must have the same length');
    });

    it('should distribute icons with fixed maxChunks parameter', () => {
      // Create 100 icons to test distribution
      const iconExports = Array.from({ length: 100 }, (_, i) => `export const Icon${i} = ...`);
      const iconNames = Array.from({ length: 100 }, (_, i) => `Icon${i}`);
      
      const chunks = createStableChunks(iconExports, iconNames, 25, 4); // Force exactly 4 chunks max
      expect(chunks.length).toBeLessThanOrEqual(4);
      
      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(100);
      
      // Check that no chunk is drastically different in size
      const chunkSizes = chunks.map(chunk => chunk.length);
      const minSize = Math.min(...chunkSizes);
      const maxSize = Math.max(...chunkSizes);
      
      // With good distribution, the difference shouldn't be more than a few icons
      expect(maxSize - minSize).toBeLessThanOrEqual(15); // Allow some variance due to hash distribution
    });
  });
});
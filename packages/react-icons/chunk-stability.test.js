// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { describe, it, expect } from 'vitest';
import { createStableChunks } from './chunking-utils.js';

describe('chunk-stability-integration', () => {
  it('should demonstrate chunk stability when new icons are added', () => {
    // Simulate a realistic scenario with some real icon names
    const originalIcons = [
      'AccessTime',
      'Add', 
      'AddCircle',
      'ArrowDown',
      'Battery',
      'BookOpen',
      'Calendar',
      'CheckCircle',
      'Delete',
      'Edit'
    ];
    
    const originalExports = originalIcons.map(name => `export const ${name} = ...`);
    const originalChunks = createStableChunks(originalExports, originalIcons, 3, 5); // Fixed 5 chunks
    
    // Create a map of which chunk each icon ended up in
    const getIconChunkMapping = (chunks, iconNames) => {
      const mapping = new Map();
      chunks.forEach((chunk, chunkIndex) => {
        chunk.forEach(iconExport => {
          const match = iconExport.match(/export const (\w+) =/);
          if (match) {
            mapping.set(match[1], chunkIndex);
          }
        });
      });
      return mapping;
    };
    
    const originalMapping = getIconChunkMapping(originalChunks, originalIcons);
    
    // Add some new icons alphabetically distributed
    const expandedIcons = [
      'AccessTime',
      'AddCall', // New icon between Add and AddCircle
      'Add',
      'AddCircle', 
      'ArrowDown',
      'ArrowSync', // New icon
      'Battery',
      'BookOpen',
      'Calendar',
      'CheckCircle',
      'Delete',
      'DeleteAll', // New icon
      'Edit'
    ];
    
    const expandedExports = expandedIcons.map(name => `export const ${name} = ...`);
    const expandedChunks = createStableChunks(expandedExports, expandedIcons, 3, 5); // Same fixed 5 chunks
    const expandedMapping = getIconChunkMapping(expandedChunks, expandedIcons);
    
    console.log('Original chunk assignment:');
    originalIcons.forEach(icon => {
      console.log(`  ${icon} -> chunk ${originalMapping.get(icon)}`);
    });
    
    console.log('\nExpanded chunk assignment:');
    expandedIcons.forEach(icon => {
      console.log(`  ${icon} -> chunk ${expandedMapping.get(icon)}`);
    });
    
    // Verify that ALL original icons stayed in their original chunks
    originalIcons.forEach(icon => {
      expect(originalMapping.get(icon)).toBe(expandedMapping.get(icon));
    });
    
    console.log('\n✅ All original icons maintained their chunk assignments!');
  });
});
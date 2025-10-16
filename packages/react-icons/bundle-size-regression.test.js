// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { describe, it, expect } from 'vitest';
import { createStableChunks } from './chunking-utils.js';

describe('bundle-size-regression-prevention', () => {
  it('should prevent bundle size regressions when new icons are added', () => {
    // Simulate a realistic scenario with many real-ish icon names
    const originalIcons = [
      'AccessTime', 'AccessTimeRegular', 'AccessTimeFilled',
      'Add', 'AddRegular', 'AddFilled', 
      'AddCircle', 'AddCircleRegular', 'AddCircleFilled',
      'ArrowDown', 'ArrowDownRegular', 'ArrowDownFilled',
      'Battery', 'BatteryRegular', 'BatteryFilled',
      'BookOpen', 'BookOpenRegular', 'BookOpenFilled',
      'Calendar', 'CalendarRegular', 'CalendarFilled',
      'CheckCircle', 'CheckCircleRegular', 'CheckCircleFilled',
      'Delete', 'DeleteRegular', 'DeleteFilled',
      'Edit', 'EditRegular', 'EditFilled'
    ];
    
    // Create chunks with our stable algorithm 
    const originalExports = originalIcons.map(name => `export const ${name} = createFluentIcon(...);`);
    const originalChunks = createStableChunks(originalExports, originalIcons, 10, 5); // 5 chunks
    
    // Create a mapping of chunks to their content for comparison
    const getChunkContentMap = (chunks) => {
      const map = new Map();
      chunks.forEach((chunk, index) => {
        map.set(index, new Set(chunk));
      });
      return map;
    };
    
    const originalContentMap = getChunkContentMap(originalChunks);
    
    // Simulate adding new icons in various positions alphabetically
    const expandedIcons = [
      'AccessTime', 'AccessTimeRegular', 'AccessTimeFilled',
      'AddCall', 'AddCallRegular', 'AddCallFilled', // NEW icons inserted
      'Add', 'AddRegular', 'AddFilled', 
      'AddCircle', 'AddCircleRegular', 'AddCircleFilled',
      'ArrowDown', 'ArrowDownRegular', 'ArrowDownFilled',
      'ArrowSync', 'ArrowSyncRegular', 'ArrowSyncFilled', // NEW icons inserted
      'Battery', 'BatteryRegular', 'BatteryFilled',
      'BookOpen', 'BookOpenRegular', 'BookOpenFilled',
      'Calendar', 'CalendarRegular', 'CalendarFilled',
      'CheckCircle', 'CheckCircleRegular', 'CheckCircleFilled',
      'Delete', 'DeleteRegular', 'DeleteFilled',
      'DeleteAll', 'DeleteAllRegular', 'DeleteAllFilled', // NEW icons inserted
      'Edit', 'EditRegular', 'EditFilled',
      'ZoomIn', 'ZoomInRegular', 'ZoomInFilled' // NEW icons at end
    ];
    
    const expandedExports = expandedIcons.map(name => `export const ${name} = createFluentIcon(...);`);
    const expandedChunks = createStableChunks(expandedExports, expandedIcons, 10, 5); // Same 5 chunks
    const expandedContentMap = getChunkContentMap(expandedChunks);
    
    // Track which chunks had content changes (indicating bundle size impact)
    const chunksWithChanges = [];
    const chunksWithoutChanges = [];
    
    for (let i = 0; i < Math.min(originalChunks.length, expandedChunks.length); i++) {
      const originalContent = originalContentMap.get(i) || new Set();
      const expandedContent = expandedContentMap.get(i) || new Set();
      
      // Check if any original content was removed from this chunk
      let hasRemovedContent = false;
      for (const originalItem of originalContent) {
        if (!expandedContent.has(originalItem)) {
          hasRemovedContent = true;
          break;
        }
      }
      
      if (hasRemovedContent) {
        chunksWithChanges.push(i);
      } else {
        chunksWithoutChanges.push(i);
      }
    }
    
    // Bundle size impact analysis
    const analysisResult = {
      totalChunks: expandedChunks.length,
      chunksWithChanges: chunksWithChanges.length,
      chunksWithoutChanges: chunksWithoutChanges.length,
      stabilityPercentage: (chunksWithoutChanges.length / expandedChunks.length) * 100,
      changedChunkIndices: chunksWithChanges,
      unchangedChunkIndices: chunksWithoutChanges
    };
    
    // Verify 100% stability - no chunks should have changed
    expect(analysisResult).toEqual({
      totalChunks: 5,
      chunksWithChanges: 0,
      chunksWithoutChanges: 5,
      stabilityPercentage: 100,
      changedChunkIndices: [],
      unchangedChunkIndices: [0, 1, 2, 3, 4]
    });
    
    // Verify that all original icons are still present
    const allExpandedIcons = expandedChunks.flat().map(exportStr => {
      const match = exportStr.match(/export const (\w+) =/);
      return match ? match[1] : null;
    }).filter(Boolean);
    
    // Verify all icons are present
    expect({
      totalIconsFound: allExpandedIcons.length,
      originalIconsCount: originalIcons.length,
      expandedIconsCount: expandedIcons.length,
      allIconsPresent: originalIcons.every(icon => allExpandedIcons.includes(icon))
    }).toEqual({
      totalIconsFound: 42,
      originalIconsCount: 30,
      expandedIconsCount: 42,
      allIconsPresent: true
    });
  });
});
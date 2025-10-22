// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

import { describe, it, expect } from 'vitest';
import { diff } from 'jest-diff';
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
    it('should distribute icons into chunks based on icon count', () => {
      const iconExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const iconNames = ['A', 'B', 'C'];

      const chunks = createStableChunks(iconExports, iconNames, {chunkSize: 2,estimatedMaxIcons:6});


      // With estimatedMaxIcons/chunkSSize, should create 3 chunks (but filtered to non-empty) is 2, because we don't have more than 3 icons
      expect(chunks.length).toBe(2); // Can't have more chunks than icons

      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(3);
    });

    it('should maintain stable assignment when new icons are added', () => {
      // Initial set of icons
      const initialExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const initialNames = ['A', 'B', 'C'];
      const options = {chunkCount: 5};

      const initialChunks = createStableChunks(initialExports, initialNames, options);

      // Add new icon in alphabetical order
      const expandedExports = ['export const A = ...', 'export const A1 = ...', 'export const B = ...', 'export const C = ...'];
      const expandedNames = ['A', 'A1', 'B', 'C'];

      const expandedChunks = createStableChunks(expandedExports, expandedNames, options);

      expect(diff(initialChunks,expandedChunks)).toMatchInlineSnapshot(`
        "- Expected
        + Received

          Array [
            Array [
              "export const B = ...",
            ],
            Array [
              "export const A = ...",
            ],
            Array [
              "export const C = ...",
            ],
        +   Array [
        +     "export const A1 = ...",
        +   ],
          ]"
      `)
    });

    it('should handle empty input', () => {
      const chunks = createStableChunks([], [], {chunkSize: 10});
      expect(chunks).toEqual([]);
    });

    it('should handle single icon', () => {
      const chunks = createStableChunks(['export const A = ...'], ['A'], {chunkSize: 10});
      expect(chunks.length).toBe(1);
      expect(chunks[0]).toEqual(['export const A = ...']);
    });

    it('should respect chunkCount when provided', () => {
      const iconExports = ['export const A = ...', 'export const B = ...'];
      const iconNames = ['A', 'B'];

      const chunks = createStableChunks(iconExports, iconNames, {chunkCount: 1}); // Force single chunk
      expect(chunks.length).toBe(1);
      expect(chunks[0].length).toBe(2);
    });

    it('should respect chunkCount parameter for stability', () => {
      const iconExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const iconNames = ['A', 'B', 'C'];

      // With chunkCount=5, should create exactly 5 chunks (some may be empty)
      const chunks = createStableChunks(iconExports, iconNames, {chunkCount: 5});

      // Filter out empty chunks - we should get 3 non-empty chunks or fewer
      expect(chunks.length).toBeLessThanOrEqual(5);

      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(3);
    });

    it('should throw when iconExports and iconNames have different lengths', () => {
      expect(() => {
        createStableChunks(['export const A = ...'], ['A', 'B'], {chunkSize: 2});
      }).toThrow('iconExports and iconNames arrays must have the same length');
    });

    it('should distribute icons with fixed chunkCount parameter', () => {
      // Create 100 icons to test distribution
      const iconExports = Array.from({ length: 100 }, (_, i) => `export const Icon${i} = ...`);
      const iconNames = Array.from({ length: 100 }, (_, i) => `Icon${i}`);

      const chunks = createStableChunks(iconExports, iconNames, {chunkCount: 4}); // Force exactly 4 chunks max
      expect(chunks.length).toBe(4);

      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(100);

      // Check that no chunk is drastically different in size
      const chunkSizes = chunks.map(chunk => chunk.length);
      expect(chunkSizes).toEqual([19, 24, 31, 26]);

      const minSize = Math.min(...chunkSizes);
      const maxSize = Math.max(...chunkSizes);

      // With good distribution, the difference shouldn't be more than a few icons
      expect(maxSize - minSize).toBeLessThanOrEqual(15); // Allow some variance due to hash distribution
    });

    it('should distribute new icons across chunks via chunkCount boundary', () => {
      const options = {chunkCount:5};

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
        'Edit', 'EditRegular', 'EditFilled',
        'ZoomIn', 'ZoomInRegular'
      ];

      // Create chunks with our stable algorithm
      const originalExports = originalIcons.map(name => `export const ${name} = createFluentIcon(...);`);
      const originalChunks = createStableChunks(originalExports, originalIcons, options);

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
        'ZoomIn', 'ZoomInRegular',
        'ZoomInFilled' // NEW icons at end
      ];

      const expandedExports = expandedIcons.map(name => `export const ${name} = createFluentIcon(...);`);
      const expandedChunks = createStableChunks(expandedExports, expandedIcons, options);

      expect(diff(originalChunks,expandedChunks)).toMatchInlineSnapshot(`
        "- Expected
        + Received

          Array [
            Array [
        +     "export const AddCall = createFluentIcon(...);",
        +     "export const AddCallFilled = createFluentIcon(...);",
              "export const AddCircleRegular = createFluentIcon(...);",
              "export const AddCircleFilled = createFluentIcon(...);",
              "export const BatteryFilled = createFluentIcon(...);",
              "export const Calendar = createFluentIcon(...);",
              "export const CalendarRegular = createFluentIcon(...);",
        +     "export const DeleteAll = createFluentIcon(...);",
              "export const ZoomIn = createFluentIcon(...);",
        +     "export const ZoomInFilled = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTimeRegular = createFluentIcon(...);",
              "export const AccessTimeFilled = createFluentIcon(...);",
              "export const AddFilled = createFluentIcon(...);",
              "export const AddCircle = createFluentIcon(...);",
              "export const ArrowDown = createFluentIcon(...);",
              "export const BookOpenFilled = createFluentIcon(...);",
              "export const CalendarFilled = createFluentIcon(...);",
              "export const ZoomInRegular = createFluentIcon(...);",
            ],
            Array [
              "export const Add = createFluentIcon(...);",
              "export const AddRegular = createFluentIcon(...);",
              "export const ArrowDownRegular = createFluentIcon(...);",
              "export const ArrowDownFilled = createFluentIcon(...);",
        +     "export const ArrowSync = createFluentIcon(...);",
              "export const Battery = createFluentIcon(...);",
              "export const CheckCircle = createFluentIcon(...);",
              "export const Delete = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTime = createFluentIcon(...);",
        +     "export const AddCallRegular = createFluentIcon(...);",
              "export const BookOpenRegular = createFluentIcon(...);",
        +     "export const DeleteAllRegular = createFluentIcon(...);",
        +     "export const DeleteAllFilled = createFluentIcon(...);",
              "export const Edit = createFluentIcon(...);",
            ],
            Array [
        +     "export const ArrowSyncRegular = createFluentIcon(...);",
        +     "export const ArrowSyncFilled = createFluentIcon(...);",
              "export const BatteryRegular = createFluentIcon(...);",
              "export const BookOpen = createFluentIcon(...);",
              "export const CheckCircleRegular = createFluentIcon(...);",
              "export const CheckCircleFilled = createFluentIcon(...);",
              "export const DeleteRegular = createFluentIcon(...);",
              "export const DeleteFilled = createFluentIcon(...);",
              "export const EditRegular = createFluentIcon(...);",
              "export const EditFilled = createFluentIcon(...);",
            ],
          ]"
      `);

    });
    it('should distribute new icons across chunks via chunkSize where chunkCount is created based on actual icons count', () => {
      // should create 6 chunks based on actual icon count and chunk size
      const options = {chunkSize:5,estimatedMaxIcons:30};

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
        'Edit', 'EditRegular', 'EditFilled',
        'ZoomIn', 'ZoomInRegular'
      ];

      // Create chunks with our stable algorithm
      const originalExports = originalIcons.map(name => `export const ${name} = createFluentIcon(...);`);
      const originalChunks = createStableChunks(originalExports, originalIcons, options);

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
        'ZoomIn', 'ZoomInRegular',
        'ZoomInFilled' // NEW icons at end
      ];

      const expandedExports = expandedIcons.map(name => `export const ${name} = createFluentIcon(...);`);
      const expandedChunks = createStableChunks(expandedExports, expandedIcons, options);

      expect(diff(originalChunks,expandedChunks)).toMatchInlineSnapshot(`
        "- Expected
        + Received

          Array [
            Array [
              "export const AccessTimeFilled = createFluentIcon(...);",
        +     "export const AddCallRegular = createFluentIcon(...);",
              "export const Add = createFluentIcon(...);",
              "export const CheckCircleFilled = createFluentIcon(...);",
              "export const DeleteFilled = createFluentIcon(...);",
            ],
            Array [
        +     "export const AddCall = createFluentIcon(...);",
              "export const ArrowDownFilled = createFluentIcon(...);",
              "export const Calendar = createFluentIcon(...);",
        +     "export const DeleteAllRegular = createFluentIcon(...);",
              "export const Edit = createFluentIcon(...);",
              "export const EditFilled = createFluentIcon(...);",
              "export const ZoomInRegular = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTimeRegular = createFluentIcon(...);",
              "export const AddFilled = createFluentIcon(...);",
        +     "export const ArrowSyncFilled = createFluentIcon(...);",
              "export const Battery = createFluentIcon(...);",
              "export const BookOpenRegular = createFluentIcon(...);",
              "export const CheckCircleRegular = createFluentIcon(...);",
              "export const EditRegular = createFluentIcon(...);",
              "export const ZoomIn = createFluentIcon(...);",
        +     "export const ZoomInFilled = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTime = createFluentIcon(...);",
        +     "export const AddCallFilled = createFluentIcon(...);",
              "export const AddCircleRegular = createFluentIcon(...);",
        +     "export const ArrowSync = createFluentIcon(...);",
              "export const BatteryFilled = createFluentIcon(...);",
              "export const CalendarFilled = createFluentIcon(...);",
              "export const Delete = createFluentIcon(...);",
            ],
            Array [
              "export const AddRegular = createFluentIcon(...);",
              "export const AddCircle = createFluentIcon(...);",
              "export const AddCircleFilled = createFluentIcon(...);",
              "export const ArrowDown = createFluentIcon(...);",
              "export const ArrowDownRegular = createFluentIcon(...);",
              "export const BatteryRegular = createFluentIcon(...);",
            ],
            Array [
        +     "export const ArrowSyncRegular = createFluentIcon(...);",
              "export const BookOpen = createFluentIcon(...);",
              "export const BookOpenFilled = createFluentIcon(...);",
              "export const CalendarRegular = createFluentIcon(...);",
              "export const CheckCircle = createFluentIcon(...);",
              "export const DeleteRegular = createFluentIcon(...);",
        +     "export const DeleteAll = createFluentIcon(...);",
        +     "export const DeleteAllFilled = createFluentIcon(...);",
            ],
          ]"
      `);

    });
  });
});
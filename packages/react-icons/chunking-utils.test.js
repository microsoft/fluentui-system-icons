// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

import { describe, it, expect } from 'vitest';
import { diff } from 'jest-diff';
import { createStableChunks, simpleHash } from './chunking-utils.js';

/**
 *
 * @param {string} val
 * @returns
 */
const noColor = (val) => val;
/**
 * Creates a diff without ANSI color codes for consistent snapshots across test runners
 * @param {any} a - Expected value
 * @param {any} b - Received value
 * @returns {string | null} - Diff string without color codes
 */
function diffNoColor(a, b) {
  return diff(a, b, {
    aColor: noColor,
    bColor: noColor,
    changeColor: noColor,
    commonColor: noColor,
    patchColor: noColor,
  });
}

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
      inputs.forEach((input) => {
        expect(simpleHash(input)).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('createStableChunks', () => {
    it('should distribute icons into chunks based on chunk count', () => {
      const iconExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const iconNames = ['A', 'B', 'C'];

      // With chunkCount=5, should create exactly 5 chunks (some may be empty)
      const chunks = createStableChunks(iconExports, iconNames, { chunkCount: 5 });

      // Filter out empty chunks - we should get 3 non-empty chunks or fewer
      expect(chunks.length).toBe(3);

      // All icons should be distributed
      const totalIcons = chunks.flat();
      expect(totalIcons).toHaveLength(3);
    });

    it('should maintain stable assignment when new icons are added', () => {
      // Initial set of icons
      const initialExports = ['export const A = ...', 'export const B = ...', 'export const C = ...'];
      const initialNames = ['A', 'B', 'C'];
      const options = { chunkCount: 5 };

      const initialChunks = createStableChunks(initialExports, initialNames, options);

      // Add new icon in alphabetical order
      const expandedExports = [
        'export const A = ...',
        'export const A1 = ...',
        'export const B = ...',
        'export const C = ...',
      ];
      const expandedNames = ['A', 'A1', 'B', 'C'];

      const expandedChunks = createStableChunks(expandedExports, expandedNames, options);

      expect(diffNoColor(initialChunks, expandedChunks)).toMatchInlineSnapshot(`
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
      `);
    });

    it('should handle empty input', () => {
      const chunks = createStableChunks([], [], { chunkCount: 10 });
      expect(chunks).toEqual([]);
    });

    it('should handle single icon', () => {
      const chunks = createStableChunks(['export const A = ...'], ['A'], { chunkCount: 10 });
      expect(chunks.length).toBe(1);
      expect(chunks[0]).toEqual(['export const A = ...']);
    });

    it('should throw when iconExports and iconNames have different lengths', () => {
      expect(() => {
        createStableChunks(['export const A = ...'], ['A', 'B'], { chunkCount: 2 });
      }).toThrow('iconExports and iconNames arrays must have the same length');
    });

    it('should distribute icons with fixed chunkCount parameter', () => {
      // Create 100 icons to test distribution with diverse prefixes
      const iconExports = Array.from(
        { length: 100 },
        (_, i) => `export const Icon${String.fromCharCode(65 + (i % 26))}${i} = ...`,
      );
      const iconNames = Array.from({ length: 100 }, (_, i) => `Icon${String.fromCharCode(65 + (i % 26))}${i}`);

      const chunks = createStableChunks(iconExports, iconNames, { chunkCount: 4 }); // Force exactly 4 chunks max

      // With prefix-based chunking and diverse names, we should get multiple chunks (but may not be exactly 4)
      expect(chunks.length).toBeGreaterThanOrEqual(1);
      expect(chunks.length).toBeLessThanOrEqual(4);

      // All icons should be distributed
      const totalIcons = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      expect(totalIcons).toBe(100);

      // Check that no chunk is drastically different in size
      const chunkSizes = chunks.map((chunk) => chunk.length);
      const minSize = Math.min(...chunkSizes);
      const maxSize = Math.max(...chunkSizes);

      // With good distribution, the difference shouldn't be too extreme
      // But with prefix-based chunking, some variance is expected
      expect(maxSize - minSize).toBeLessThanOrEqual(60); // Allow variance based on prefix distribution
    });

    it('should distribute new icons across fixed chunks without reshuffling existing icons', () => {
      const options = { chunkCount: 5 };

      // Simulate a realistic scenario with many real-ish icon names
      const originalIcons = [
        'AccessTime',
        'AccessTimeRegular',
        'AccessTimeFilled',
        'Add',
        'AddRegular',
        'AddFilled',
        'AddCircle',
        'AddCircleRegular',
        'AddCircleFilled',
        'ArrowDown',
        'ArrowDownRegular',
        'ArrowDownFilled',
        'Battery',
        'BatteryRegular',
        'BatteryFilled',
        'BookOpen',
        'BookOpenRegular',
        'BookOpenFilled',
        'Calendar',
        'CalendarRegular',
        'CalendarFilled',
        'CheckCircle',
        'CheckCircleRegular',
        'CheckCircleFilled',
        'Delete',
        'DeleteRegular',
        'DeleteFilled',
        'Edit',
        'EditRegular',
        'EditFilled',
        'ZoomIn',
        'ZoomInRegular',
      ];

      // Create chunks with our stable algorithm
      const originalExports = originalIcons.map((name) => `export const ${name} = createFluentIcon(...);`);
      const originalChunks = createStableChunks(originalExports, originalIcons, options);

      // Simulate adding new icons in various positions alphabetically
      const expandedIcons = [
        'AccessTime',
        'AccessTimeRegular',
        'AccessTimeFilled',
        'AddCall',
        'AddCallRegular',
        'AddCallFilled', // NEW icons inserted
        'Add',
        'AddRegular',
        'AddFilled',
        'AddCircle',
        'AddCircleRegular',
        'AddCircleFilled',
        'ArrowDown',
        'ArrowDownRegular',
        'ArrowDownFilled',
        'ArrowSync',
        'ArrowSyncRegular',
        'ArrowSyncFilled', // NEW icons inserted
        'Battery',
        'BatteryRegular',
        'BatteryFilled',
        'BookOpen',
        'BookOpenRegular',
        'BookOpenFilled',
        'Calendar',
        'CalendarRegular',
        'CalendarFilled',
        'CheckCircle',
        'CheckCircleRegular',
        'CheckCircleFilled',
        'Delete',
        'DeleteRegular',
        'DeleteFilled',
        'DeleteAll',
        'DeleteAllRegular',
        'DeleteAllFilled', // NEW icons inserted
        'Edit',
        'EditRegular',
        'EditFilled',
        'ZoomIn',
        'ZoomInRegular',
        'ZoomInFilled', // NEW icons at end
      ];

      const expandedExports = expandedIcons.map((name) => `export const ${name} = createFluentIcon(...);`);
      const expandedChunks = createStableChunks(expandedExports, expandedIcons, options);

      expect(diffNoColor(originalChunks, expandedChunks)).toMatchInlineSnapshot(`
        "- Expected
        + Received

          Array [
            Array [
              "export const Calendar = createFluentIcon(...);",
              "export const CalendarRegular = createFluentIcon(...);",
              "export const CalendarFilled = createFluentIcon(...);",
              "export const ZoomIn = createFluentIcon(...);",
              "export const ZoomInRegular = createFluentIcon(...);",
        +     "export const ZoomInFilled = createFluentIcon(...);",
            ],
            Array [
              "export const ArrowDown = createFluentIcon(...);",
              "export const ArrowDownRegular = createFluentIcon(...);",
              "export const ArrowDownFilled = createFluentIcon(...);",
        +     "export const ArrowSync = createFluentIcon(...);",
        +     "export const ArrowSyncRegular = createFluentIcon(...);",
        +     "export const ArrowSyncFilled = createFluentIcon(...);",
              "export const Battery = createFluentIcon(...);",
              "export const BatteryRegular = createFluentIcon(...);",
              "export const BatteryFilled = createFluentIcon(...);",
            ],
            Array [
              "export const Delete = createFluentIcon(...);",
              "export const DeleteRegular = createFluentIcon(...);",
              "export const DeleteFilled = createFluentIcon(...);",
        +     "export const DeleteAll = createFluentIcon(...);",
        +     "export const DeleteAllRegular = createFluentIcon(...);",
        +     "export const DeleteAllFilled = createFluentIcon(...);",
              "export const Edit = createFluentIcon(...);",
              "export const EditRegular = createFluentIcon(...);",
              "export const EditFilled = createFluentIcon(...);",
            ],
            Array [
        +     "export const AddCall = createFluentIcon(...);",
        +     "export const AddCallRegular = createFluentIcon(...);",
        +     "export const AddCallFilled = createFluentIcon(...);",
              "export const Add = createFluentIcon(...);",
              "export const AddRegular = createFluentIcon(...);",
              "export const AddFilled = createFluentIcon(...);",
              "export const AddCircle = createFluentIcon(...);",
              "export const AddCircleRegular = createFluentIcon(...);",
              "export const AddCircleFilled = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTime = createFluentIcon(...);",
              "export const AccessTimeRegular = createFluentIcon(...);",
              "export const AccessTimeFilled = createFluentIcon(...);",
              "export const BookOpen = createFluentIcon(...);",
              "export const BookOpenRegular = createFluentIcon(...);",
              "export const BookOpenFilled = createFluentIcon(...);",
              "export const CheckCircle = createFluentIcon(...);",
              "export const CheckCircleRegular = createFluentIcon(...);",
              "export const CheckCircleFilled = createFluentIcon(...);",
            ],
          ]"
      `);

      // Simulate adding new icons in various positions alphabetically
      const iconsRenameRemoval = [
        'AccessTime',
        'AccessTimeRegular',
        'AccessTimeFilled',
        'AddCall',
        'AddCallRegular',
        'AddCallFilled',
        'Add',
        'AddRegular',
        'AddFilled',
        'AddCircle',
        'AddCircleRegular',
        'AddCircleFilled',
        'ArrowDown',
        'ArrowDownRegular',
        'ArrowDownFilled',
        'ArrowSyncV2',
        'ArrowSyncRegularV2',
        'ArrowSyncFilledV2', // RENAME of icons
        'Battery',
        'BatteryRegular',
        'BatteryFilled',
        'BookOpen',
        'BookOpenRegular',
        'BookOpenFilled',
        'Calendar',
        'CalendarRegular',
        'CalendarFilled',
        'CheckCircle',
        'CheckCircleRegular',
        'CheckCircleFilled',
        'Delete',
        'DeleteRegular',
        'DeleteFilled',
        'DeleteAll',
        'DeleteAllRegular',
        'DeleteAllFilled',
        'Edit',
        'EditRegular',
        'EditFilled',
        //'ZoomIn', 'ZoomInRegular', // REMOVAL of icons
        'ZoomInFilled',
      ];

      const iconsRenameRemovalExports = iconsRenameRemoval.map(
        (name) => `export const ${name} = createFluentIcon(...);`,
      );
      const iconsRenameRemovalChunks = createStableChunks(iconsRenameRemovalExports, iconsRenameRemoval, options);

      expect(diffNoColor(expandedChunks, iconsRenameRemovalChunks)).toMatchInlineSnapshot(`
        "- Expected
        + Received

          Array [
            Array [
              "export const Calendar = createFluentIcon(...);",
              "export const CalendarRegular = createFluentIcon(...);",
              "export const CalendarFilled = createFluentIcon(...);",
        -     "export const ZoomIn = createFluentIcon(...);",
        -     "export const ZoomInRegular = createFluentIcon(...);",
              "export const ZoomInFilled = createFluentIcon(...);",
            ],
            Array [
              "export const ArrowDown = createFluentIcon(...);",
              "export const ArrowDownRegular = createFluentIcon(...);",
              "export const ArrowDownFilled = createFluentIcon(...);",
        -     "export const ArrowSync = createFluentIcon(...);",
        -     "export const ArrowSyncRegular = createFluentIcon(...);",
        -     "export const ArrowSyncFilled = createFluentIcon(...);",
        +     "export const ArrowSyncV2 = createFluentIcon(...);",
        +     "export const ArrowSyncRegularV2 = createFluentIcon(...);",
        +     "export const ArrowSyncFilledV2 = createFluentIcon(...);",
              "export const Battery = createFluentIcon(...);",
              "export const BatteryRegular = createFluentIcon(...);",
              "export const BatteryFilled = createFluentIcon(...);",
            ],
            Array [
              "export const Delete = createFluentIcon(...);",
              "export const DeleteRegular = createFluentIcon(...);",
              "export const DeleteFilled = createFluentIcon(...);",
              "export const DeleteAll = createFluentIcon(...);",
              "export const DeleteAllRegular = createFluentIcon(...);",
              "export const DeleteAllFilled = createFluentIcon(...);",
              "export const Edit = createFluentIcon(...);",
              "export const EditRegular = createFluentIcon(...);",
              "export const EditFilled = createFluentIcon(...);",
            ],
            Array [
              "export const AddCall = createFluentIcon(...);",
              "export const AddCallRegular = createFluentIcon(...);",
              "export const AddCallFilled = createFluentIcon(...);",
              "export const Add = createFluentIcon(...);",
              "export const AddRegular = createFluentIcon(...);",
              "export const AddFilled = createFluentIcon(...);",
              "export const AddCircle = createFluentIcon(...);",
              "export const AddCircleRegular = createFluentIcon(...);",
              "export const AddCircleFilled = createFluentIcon(...);",
            ],
            Array [
              "export const AccessTime = createFluentIcon(...);",
              "export const AccessTimeRegular = createFluentIcon(...);",
              "export const AccessTimeFilled = createFluentIcon(...);",
              "export const BookOpen = createFluentIcon(...);",
              "export const BookOpenRegular = createFluentIcon(...);",
              "export const BookOpenFilled = createFluentIcon(...);",
              "export const CheckCircle = createFluentIcon(...);",
              "export const CheckCircleRegular = createFluentIcon(...);",
              "export const CheckCircleFilled = createFluentIcon(...);",
            ],
          ]"
      `);
    });
  });
});

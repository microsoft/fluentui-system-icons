// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const fsP = require('fs/promises');
const path = require('path');

/**
 * @typedef {{ exportName: string; exportCode: string; fileName: string; rawName?: string }} IconItem
 * @typedef {{ groupByBase?: boolean }} WriteOptions
 */

/**
 * Write grouped per-icon files.
 *
 * @param {string} destPath
 * @param {IconItem[]} items
 * @param {string[]} [headerLines]
 * @param {WriteOptions} [options]
 * @returns {Promise<{ fileCount: number }>}
 */
async function writePerIconFiles(destPath, items, headerLines = [], options = { groupByBase: true }) {
  /** @typedef {{ exportName: string; exportCode: string; fileName: string; rawName?: string }} Grouping */

  // group items by normalized base filename so related variants end up in one file
  /** @type {Map<string, Array<Grouping>>} */
  const groups = new Map();

  for (const item of items) {
    const base = options.groupByBase ? normalizeBaseName(item.fileName) : item.fileName.replace(/\.tsx$/, '');
    if (!groups.has(base)) {
      groups.set(base, []);
    }
    const bucket = groups.get(base);
    if (bucket) {
      bucket.push(item);
    }
  }

  let filesTouched = 0;

  for (const [base, groupItems] of groups) {
    const filePath = path.join(destPath, `${base}.tsx`);

    /** @type {Array<Grouping>} */
    const nonNullItems = groupItems.filter((item) => item != null);

    assertNoDuplicateExports(nonNullItems, base);

    // Sort exports deterministically: resizable first, then by size (ascending), then by style priority, then alphabetically
    nonNullItems.sort(compareByStylePriority);

    if (fs.existsSync(filePath)) {
      // Append

      const existingIconModuleContent = fs.readFileSync(filePath, 'utf8');

      assertNoCollisions(existingIconModuleContent, nonNullItems, filePath);

      const toAppend = nonNullItems.map((icon) => icon.exportCode).join('\n') + '\n';
      await fsP.writeFile(filePath, existingIconModuleContent + toAppend, 'utf8');
    } else {
      // Create new file
      const fileSourceLines = headerLines.concat(nonNullItems.map((icon) => icon.exportCode));
      const fileSource = fileSourceLines.join('\n') + '\n';
      await fsP.writeFile(filePath, fileSource, 'utf8');
    }

    filesTouched++;
  }

  return { fileCount: filesTouched };

  /**
   * @param {string} name
   * @returns {{size: number|null, style: string|null}}
   */
  function parseVariant(name) {
    const matchedResult = name.match(/(\d+)([A-Za-z_]*)$/);
    if (!matchedResult) {
      return { size: null, style: null };
    }
    const size = parseInt(matchedResult[1], 10);
    const style = matchedResult[2] ? matchedResult[2].toLowerCase() : null;
    return { size, style };
  }

  /**
   * Compare two icon exports for sorting.
   * @param {Grouping} a
   * @param {Grouping} b
   * @returns {number}
   */
  function compareByStylePriority(a, b) {
    const variantA = parseVariant(a.exportName);
    const variantB = parseVariant(b.exportName);

    // 1. Resizable icons (no size) come before sized icons
    const hasSize_A = variantA.size != null;
    const hasSize_B = variantB.size != null;
    if (!hasSize_A && hasSize_B) return -1;
    if (hasSize_A && !hasSize_B) return 1;

    // 2. If both have sizes, sort by size ascending (16 before 20 before 24, etc.)
    if (hasSize_A && hasSize_B) {
      const sizeA = /** @type {number} */ (variantA.size);
      const sizeB = /** @type {number} */ (variantB.size);
      if (sizeA !== sizeB) return sizeA - sizeB;
    }

    // 3. Sort by style priority (regular before filled before light, etc.)
    const styleA = variantA.style || '';
    const styleB = variantB.style || '';
    const indexA = ICON_STYLE_VARIANTS.indexOf(styleA);
    const indexB = ICON_STYLE_VARIANTS.indexOf(styleB);
    const priorityA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
    const priorityB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    // 4. Finally, sort alphabetically by export name for stability
    return a.exportName.localeCompare(b.exportName);
  }

  /**
   * Assert that there are no duplicate exports in a group.
   * @param {Grouping[]} items
   * @param {string} groupBase
   */
  function assertNoDuplicateExports(items, groupBase) {
    // ensure there are no duplicate exportNames within this group - duplicates indicate an error
    /** @type {Map<string, string[]>} */
    const occurrences = new Map();

    for (const item of items) {
      const list = occurrences.get(item.exportName) || [];
      list.push(item.fileName || '<unknown>');
      occurrences.set(item.exportName, list);
    }

    const duplicates = [...occurrences.entries()].filter(([, list]) => list.length > 1);

    if (duplicates.length > 0) {
      const details = duplicates.map(([name, list]) => `exportName='${name}' -> files=[${list.join(', ')}]`).join('; ');
      throw new Error(
        `Duplicate export name(s) detected in group '${groupBase}' while generating to '${destPath}': ${details}. This indicates multiple source inputs generated the same export name and should be fixed.`,
      );
    }
  }

  /**
   * Assert that there are no collisions between existing exports and new items.
   * @param {string} moduleContent
   * @param {Grouping[]} items
   * @param {string} filePath
   */
  function assertNoCollisions(moduleContent, items, filePath) {
    const existingNames = [...moduleContent.matchAll(/export const\s+(\w+)\s*:/g)].map((m) => m[1]);
    const collisions = items.filter((d) => existingNames.includes(d.exportName));
    if (collisions.length > 0) {
      throw new Error(
        `Attempting to add exports that already exist in '${filePath}': ${collisions.map((c) => c.exportName).join(', ')}. This indicates duplicate generation and should be investigated.`,
      );
    }
  }
}

/**
 * Icon style variants recognized in the Fluent UI System Icons, ordered by priority for deterministic sorting.
 *
 * This constant serves two purposes:
 * 1. **Sorting priority**: When multiple icon variants are grouped in a single file, exports are ordered
 *    by this priority list. For example, given 'regular' (index 0) and 'filled' (index 1), 'regular'
 *    exports appear first. This ensures consistent, predictable ordering across generated files.
 *
 * 2. **Base name normalization**: Used to strip style suffixes from filenames when grouping related
 *    icon variants. For example, both 'zoom-in-20-filled.tsx' and 'zoom-in-20-regular.tsx' normalize
 *    to the same base 'zoom-in' so they can be grouped in a single 'zoom-in.tsx' file.
 *
 * The order matters for sorting but not for normalization. Only includes the 4 actual style variants
 * that exist in the icon system (verified by analyzing all generated .d.ts files).
 *
 * @example
 * // Sorting: Regular comes before Filled
 * // File: zoom-in.tsx contains:
 * export const ZoomIn20Regular = ...;  // appears first (priority 0)
 * export const ZoomIn20Filled = ...;   // appears second (priority 1)
 *
 * @example
 * // Normalization: Both filenames normalize to 'zoom-in'
 * normalizeBaseName('zoom-in-20-regular.tsx')  // -> 'zoom-in'
 * normalizeBaseName('zoom-in-20-filled.tsx')   // -> 'zoom-in'
 */
const ICON_STYLE_VARIANTS = ['regular', 'filled', 'light', 'color'];

/**
 * Normalize a generated file name to its base icon key by stripping trailing size and style tokens.
 * Examples:
 *  - 'zoom-in-20-filled.tsx' -> 'zoom-in'
 *  - 'my-icon-16-regular' -> 'my-icon'
 *
 * @param {string} fileName
 * @param {string[]=} styleVariants
 */
function normalizeBaseName(fileName, styleVariants = ICON_STYLE_VARIANTS) {
  const name = fileName.replace(/\.tsx?$/, '');
  // normalize separators (underscores -> hyphens) then split
  const normalized = name.replace(/_/g, '-');
  const parts = normalized.split('-');
  const styleSet = new Set(styleVariants);

  while (parts.length > 1) {
    const last = parts[parts.length - 1];
    // treat pure numbers and tokens that are in styleTokens or contain 'color' as variant markers
    if (/^\d+$/.test(last) || styleSet.has(last) || last.includes('color')) {
      parts.pop();
    } else {
      break;
    }
  }

  return parts.join('-') || name;
}

module.exports = { writePerIconFiles, normalizeBaseName };

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const fsP = require('fs/promises');
const path = require('path');

/**
 * @typedef {{ exportName: string; exportCode: string; fileName: string; rawName?: string; }} IconItem
 * @typedef {{ groupByBase?: boolean }} WriteOptions
 */

// ---------------------------------------------------------------------------
// Shared grouping helper
// ---------------------------------------------------------------------------

/**
 * Group items by normalized base name, filter nulls, validate no duplicate exports,
 * and sort deterministically. Shared by both per-icon and sprite writers.
 *
 * @param {string} destPath - output directory (used in error messages)
 * @param {Array<{ exportName: string; fileName: string; [k: string]: any }>} items
 * @param {WriteOptions} [options]
 * @returns {Map<string, Array<{ exportName: string; fileName: string; [k: string]: any }>>} sorted, validated groups
 */
function groupItemsByBase(destPath, items, options = { groupByBase: true }) {
  /** @type {Map<string, Array<{ exportName: string; fileName: string; [k: string]: any }>>} */
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

  // Validate and sort each group
  for (const [base, groupItems] of groups) {

    assertNoDuplicateExports(groupItems, base, destPath);
    groupItems.sort(compareByStylePriority);
    groups.set(base, groupItems);
  }

  return groups;
}

/**
 * Assert that there are no duplicate exports in a group.
 * @param {Array<{ exportName: string; fileName: string }>} items
 * @param {string} groupBase
 * @param {string} destPath
 */
function assertNoDuplicateExports(items, groupBase, destPath) {
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

// ---------------------------------------------------------------------------
// Per-icon writer
// ---------------------------------------------------------------------------

/**
 * Write grouped per-icon .tsx files.
 *
 * @param {string} destPath
 * @param {Array<{ exportName: string; fileName: string; exportCode: string; [k: string]: any }>} items
 * @param {string[]} headerLines - header lines to prepend to each generated file
 * @param {WriteOptions} [options]
 * @returns {Promise<{ fileCount: number }>}
 */
async function writePerIconFiles(destPath, items, headerLines, options = { groupByBase: true }) {
  const header = headerLines;
  const groups = groupItemsByBase(destPath, items, options);

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  let fileCount = 0;

  for (const [base, groupItems] of groups) {
    const exportLines = groupItems.map((icon) => icon.exportCode);
    const fileSource = header.concat(exportLines).join('\n') + '\n';

    const filePath = path.join(destPath, `${base}.tsx`);
    await fsP.writeFile(filePath, fileSource, 'utf8');

    fileCount++;
  }

  return { fileCount };
}

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
 * Resizable first, then by size ascending, by style priority, then alphabetically.
 * @param {{ exportName: string }} a
 * @param {{ exportName: string }} b
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
 * Parse an icon filename and determine if it has a valid style suffix.
 * Strips file extension, normalizes underscores to hyphens, and validates the style suffix.
 *
 * @param {string} fileName
 * @param {string[]} [styleVariants]
 * @returns
 */
function parseIconFileName(fileName, styleVariants = ICON_STYLE_VARIANTS) {
  const nameWithoutFileExt = fileName.replace(/\.tsx?$/, '');
  const normalized = nameWithoutFileExt.replace(/_/g, '-');
  const parts = normalized.split('-');
  const styleSet = new Set(styleVariants);
  // Require at least 2 parts: base name + style suffix (e.g., 'icon-filled', not just 'filled')
  const isValid = parts.length > 1 && styleSet.has(parts[parts.length - 1]);

  return { parts, isValid };
}

/**
 * Normalizes an icon file name to its base name by stripping trailing style and size suffixes.
 *
 * The normalization follows a specific sequence based on the convention: `<base-name>[-<size>][-<style>]`.
 * 1. It validates that the filename ends with a valid style variant.
 * 2. It strips the style suffix, then checks if the new last part is a numeric size and strips it.
 *
 * @example
 *  - 'zoom-in-20-filled.tsx' -> 'zoom-in'
 *  - 'my-icon-16-regular' -> 'my-icon'
 *
 * @param {string} fileName - The raw file name or path component to normalize.
 * @param {string[]} [styleVariants=ICON_STYLE_VARIANTS] - The list of allowed style suffixes to identify and remove.
 * @returns {string} The normalized base name of the icon.
 * @throws {Error} If the filename does not end with a valid style suffix.
 */
function normalizeBaseName(fileName, styleVariants = ICON_STYLE_VARIANTS) {
  const { parts, isValid } = parseIconFileName(fileName, styleVariants);

  if (!isValid) {
    throw new Error(
      `Invalid icon filename '${fileName}' - must end with a style variant (${styleVariants.join(', ')})`,
    );
  }

  // Strip style suffix (validated above)
  parts.pop();

  // Strip size suffix if numeric
  if (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1])) {
    parts.pop();
  }

  return parts.join('-');
}

module.exports = { writePerIconFiles, groupItemsByBase, normalizeBaseName };

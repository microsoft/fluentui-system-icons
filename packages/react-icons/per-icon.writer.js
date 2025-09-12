// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const fsP = require('fs/promises');
const path = require('path');

const { normalizeBaseName, DEFAULT_STYLE_TOKENS } = require('./convert.utils');

/**
 * @typedef {{ exportName: string; exportCode: string; fileName: string; rawName?: string }} PerIconItem
 * @typedef {{ groupByBase?: boolean }} WriteOptions
 */

/**
 * Write grouped per-icon files.
 *
 * @param {string} destPath
 * @param {PerIconItem[]} items
 * @param {string[]} [headerLines]
 * @param {WriteOptions} [options]
 * @returns {Promise<{ fileCount: number }>}
 */
async function writePerIconFiles(destPath, items, headerLines = [], options = { groupByBase: true }) {
  // group items by normalized base filename so related variants end up in one file
  /** @type {Map<string, Array<{ exportName: string; exportCode: string; fileName: string; rawName?: string }>>} */
  const groups = new Map();

  for (const it of items) {
    const base = options.groupByBase ? normalizeBaseName(it.fileName) : it.fileName.replace(/\.tsx$/, '');
    if (!groups.has(base)) groups.set(base, []);
    const bucket = groups.get(base);
    if (bucket) bucket.push(it);
  }

  let filesTouched = 0;

  for (const [base, groupItems] of groups) {
    const filePath = path.join(destPath, `${base}.tsx`);

    const nonNullItems = groupItems.filter((i) => i != null);

    // ensure there are no duplicate exportNames within this group - duplicates indicate an error
    /** @type {Map<string, string[]>} */
    const occurrences = new Map();
    for (const it of nonNullItems) {
      const list = occurrences.get(it.exportName) || [];
      list.push(it.fileName || '<unknown>');
      occurrences.set(it.exportName, list);
    }
    const duplicates = [...occurrences.entries()].filter(([, list]) => list.length > 1);
    if (duplicates.length > 0) {
      const details = duplicates.map(([name, list]) => `exportName='${name}' -> files=[${list.join(', ')}]`).join('; ');
      throw new Error(
        `Duplicate export name(s) detected in group '${base}' while generating to '${destPath}': ${details}. This indicates multiple source inputs generated the same export name and should be fixed.`,
      );
    }

    // deterministic ordering:
    const stylePriority = new Map(DEFAULT_STYLE_TOKENS.map((s, i) => [s, i]));

    /**
     * @param {string} name
     * @returns {{size: number|null, style: string|null}}
     */
    function parseVariant(name) {
      const m = name.match(/(\d+)([A-Za-z_]*)$/);
      if (!m) return { size: null, style: null };
      const size = parseInt(m[1], 10);
      const style = m[2] ? m[2].toLowerCase() : null;
      return { size, style };
    }

    nonNullItems.sort((a, b) => {
      const pa = parseVariant(a.exportName);
      const pb = parseVariant(b.exportName);
      if (pa.size == null && pb.size != null) return -1;
      if (pa.size != null && pb.size == null) return 1;
      if (pa.size != null && pb.size != null && pa.size !== pb.size) return pa.size - pb.size;
      const sa = pa.style || '';
      const sb = pb.style || '';
      const ia = stylePriority.has(sa) ? stylePriority.get(sa) : Number.MAX_SAFE_INTEGER;
      const ib = stylePriority.has(sb) ? stylePriority.get(sb) : Number.MAX_SAFE_INTEGER;
      const na = ia ?? Number.MAX_SAFE_INTEGER;
      const nb = ib ?? Number.MAX_SAFE_INTEGER;
      if (na !== nb) return na - nb;
      return a.exportName.localeCompare(b.exportName);
    });

    if (fs.existsSync(filePath)) {
      const existing = fs.readFileSync(filePath, 'utf8');
      const existingNames = [...existing.matchAll(/export const\s+(\w+)\s*:/g)].map((m) => m[1]);
      const collisions = nonNullItems.filter((d) => existingNames.includes(d.exportName));
      if (collisions.length > 0) {
        throw new Error(
          `Attempting to add exports that already exist in '${filePath}': ${collisions.map((c) => c.exportName).join(', ')}. This indicates duplicate generation and should be investigated.`,
        );
      }
      const toAppend = nonNullItems.map((i) => i.exportCode).join('\n') + '\n';
      await fsP.writeFile(filePath, existing + toAppend, 'utf8');
    } else {
      const fileSourceLines = headerLines.concat(nonNullItems.map((i) => i.exportCode));
      const fileSource = fileSourceLines.join('\n') + '\n';
      await fsP.writeFile(filePath, fileSource, 'utf8');
    }

    filesTouched++;
  }

  return { fileCount: filesTouched };
}

module.exports = { writePerIconFiles };

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const fsP = require('fs/promises');
const path = require('path');

const { groupItemsByBase } = require('./per-icon.writer');

/** @typedef {{ groupByBase?: boolean }} WriteSpriteOptions */

// ---------------------------------------------------------------------------
// Private helpers (ported from generate-svg-sprites-from-modules.js)
// ---------------------------------------------------------------------------

/**
 * @param {string} width - Icon width string (e.g. "20", "1em")
 * @returns {string} numeric viewBox width
 */
function viewBoxWidthFromIconWidth(width) {
  if (width === '1em') {
    return '20';
  }
  if (/^\d+$/.test(width)) {
    return width;
  }
  return '20';
}

/**
 * Escapes special characters in a string for safe use inside XML/SVG attribute values.
 * Replaces `&`, `"`, `<`, and `>` with their corresponding XML entities.
 *
 * @param {string} value - The raw string to escape.
 * @returns {string} The escaped string safe for XML attribute injection.
 */
function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Escapes special characters in a string for safe use inside a `RegExp` constructor.
 * Prefixes all regex metacharacters (`.*+?^${}()|[]\`) with a backslash.
 *
 * @param {string} value - The raw string to escape.
 * @returns {string} The escaped string safe for `new RegExp()` usage.
 */
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Prefixes all internal SVG ids (and references) with a namespace.
 * @param {string} rawSvg
 * @param {string} namespace
 * @returns {string}
 */
function namespaceSvgIds(rawSvg, namespace) {
  let output = rawSvg;
  /** @type {Set<string>} */
  const ids = new Set();

  const idRegex = /\bid="([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(rawSvg)) !== null) {
    ids.add(match[1]);
  }

  for (const id of Array.from(ids)) {
    const newId = `${namespace}__${id}`;
    const escaped = escapeRegExp(id);

    output = output.replace(new RegExp(`\\bid="${escaped}"`, 'g'), `id="${newId}"`);
    output = output.replace(new RegExp(`url\\(#${escaped}\\)`, 'g'), `url(#${newId})`);
    output = output.replace(new RegExp(`"#${escaped}"`, 'g'), `"#${newId}"`);
  }

  return output;
}

// ---------------------------------------------------------------------------
// Sprite generation
// ---------------------------------------------------------------------------

/**
 * Generate a sprite SVG string containing <symbol> entries for the given icons.
 * @param {Array<import('./convert.utils').ParsedIconSource>} items
 * @returns {string}
 */
function generateSpriteSvg(items) {
  const symbols = items.map((item) => {
    const iconData = item.iconData;
    const width = item.width || '20';
    const viewBoxWidth = viewBoxWidthFromIconWidth(width);

    // 1. Color variants use raw SVG content with potential nested structure, so we namespace all internal ids and references to avoid collisions.
    if (iconData && 'rawSvg' in iconData) {
      const namespaced = namespaceSvgIds(iconData.rawSvg, item.exportName);
      return `  <symbol id="${escapeAttr(item.exportName)}" viewBox="0 0 ${escapeAttr(viewBoxWidth)} ${escapeAttr(
        viewBoxWidth,
      )}">\n${namespaced}\n  </symbol>`;
    }

    // 2. Non-color variants use a simplified model of one or more <path d="..."/> entries, so we just convert those to <symbol> paths without additional namespacing.
    const paths = (iconData && 'paths' in iconData ? iconData.paths : [])
      .map((d) => `    <path d="${escapeAttr(d)}"/>`)
      .join('\n');
    return `  <symbol id="${escapeAttr(item.exportName)}" viewBox="0 0 ${escapeAttr(viewBoxWidth)} ${escapeAttr(
      viewBoxWidth,
    )}">\n${paths}\n  </symbol>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">',
    ...symbols,
    '</svg>',
    '',
  ].join('\n');
}

/**
 * Generate a sprite TSX module string that imports from `../../utils/svg-icon`
 * and references the co-located `.svg` sprite file.
 * @param {string} baseName
 * @param {Array<import('./convert.utils').ParsedIconSource>} items
 * @returns {string}
 */
function generateSpriteModuleTsx(baseName, items) {
  const importPathSvg = `./${baseName}.svg`;

  const header =
    '"use client";\n' +
    "import type { FluentIcon } from '../../utils/svg-icon';\n" +
    "import { createFluentIcon } from '../../utils/svg-icon';\n" +
    `import sprite from '${importPathSvg}';\n\n`;

  const body = items
    .map(
      (e) =>
        `export const ${e.exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${e.exportName}', "${e.width || '1em'}",sprite));`,
    )
    .join('\n');

  return `${header}\n${body}\n`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Write grouped sprite files (.svg + .tsx pairs) from enriched icon items.
 *
 * @param {string} destPath - output directory for sprite files
 * @param {import('./convert.utils').ParsedIconSource[]} items - icon items with enriched `iconData`, `width`, `isColor`
 * @param {WriteSpriteOptions} [options]
 * @returns {Promise<{ fileCount: number }>}
 */
async function writeSpriteFiles(destPath, items, options = { groupByBase: true }) {
  const groups = groupItemsByBase(destPath, items, options);

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  let fileCount = 0;

  for (const [base, groupItems] of groups) {
    // Generate .svg sprite
    const spriteSvg = generateSpriteSvg(/** @type {import('./convert.utils').ParsedIconSource[]} */ (groupItems));
    const svgPath = path.join(destPath, `${base}.svg`);
    await fsP.writeFile(svgPath, spriteSvg, 'utf8');

    // Generate .tsx module
    const moduleTsx = generateSpriteModuleTsx(
      base,
      /** @type {import('./convert.utils').ParsedIconSource[]} */ (groupItems),
    );
    const tsxPath = path.join(destPath, `${base}.tsx`);
    await fsP.writeFile(tsxPath, moduleTsx, 'utf8');

    fileCount++;
  }

  return { fileCount };
}

module.exports = { writeSpriteFiles };

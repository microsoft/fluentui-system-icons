// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const fsP = require('fs/promises');
const path = require('path');

const { groupItemsByBase } = require('./per-icon.writer');

/** @typedef {{ groupByBase?: boolean }} WriteImageOptions */

// ---------------
// Private helpers
// ---------------

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
 * Escapes special characters for safe use inside XML/SVG attribute values.
 *
 * @param {string} value - The raw string to escape.
 * @returns {string} The escaped string safe for XML attribute injection.
 */
function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Generate a standalone SVG document string for a single icon variant.
 *
 * - Mono icons emit `<path d="…"/>` entries with NO fill, so the default (black, full-alpha)
 *   shape is a clean mask source for `mask-image` + `background-color: currentColor`.
 * - Color icons emit their raw inner SVG content (fills preserved) for use as an `<img>` source.
 *   No id namespacing is needed because each icon lives in its own file (no cross-icon collisions).
 *
 * @param {import('./convert.utils').ParsedIconSource} item
 * @returns {string}
 */
function generateStandaloneSvg(item) {
  const iconData = item.iconData;
  const width = item.width || '20';
  const viewBoxWidth = viewBoxWidthFromIconWidth(width);
  const open = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${escapeAttr(viewBoxWidth)} ${escapeAttr(
    viewBoxWidth,
  )}">`;

  // Color variants: keep the raw (filled) inner SVG content for <img> rendering.
  if (iconData && 'rawSvg' in iconData) {
    return `${open}${iconData.rawSvg}</svg>\n`;
  }

  // Mono variants: simple <path d="…"/> entries with no fill → pure-alpha mask source.
  const paths = (iconData && 'paths' in iconData ? iconData.paths : [])
    .map((d) => `<path d="${escapeAttr(d)}"/>`)
    .join('');
  return `${open}${paths}</svg>\n`;
}

/**
 * Map a generated `.tsx` group file name to its co-located `.svg` variant file name.
 * @param {string} fileName - e.g. "access-time-24-filled.tsx"
 * @returns {string} e.g. "access-time-24-filled.svg"
 */
function svgFileNameFor(fileName) {
  return fileName.replace(/\.tsx$/, '.svg');
}

/**
 * Generate an image atom `.tsx` module that imports each co-located `.svg` (resolved to a URL by
 * the consumer bundler) and wires it to the appropriate image factory.
 *
 * @param {Array<import('./convert.utils').ParsedIconSource>} items
 * @param {{ iconImportPath: string; colorImportPath: string }} importConfig
 * @returns {string}
 */
function generateImageModuleTsx(items, importConfig) {
  const { iconImportPath, colorImportPath } = importConfig;
  const hasMono = items.some((item) => !item.isColor);
  const hasColor = items.some((item) => item.isColor);

  /** @type {string[]} */
  const header = ['"use client";', `import type { FluentImageIcon } from '${iconImportPath}';`];
  if (hasMono) {
    header.push(`import { createImageIcon } from '${iconImportPath}';`);
  }
  if (hasColor) {
    header.push(`import { createImageColorIcon } from '${colorImportPath}';`);
  }

  for (const item of items) {
    header.push(`import ${item.exportName}Url from './${svgFileNameFor(item.fileName)}';`);
  }

  const deprecatedPrefix =
    '/** @deprecated Color icons are deprecated. [See User Guidance](https://microsoft.github.io/fluentui-system-icons/?path=/docs/icons-user-guidance--docs#color-variants-deprecated) */\n';

  const body = items.map((item) => {
    const widthStr = `"${item.width || '1em'}"`;
    const options = item.flipInRtl ? ', { flipInRtl: true }' : '';
    const factory = item.isColor ? 'createImageColorIcon' : 'createImageIcon';
    return `${item.isColor ? deprecatedPrefix : ''}export const ${item.exportName}: FluentImageIcon = (/*#__PURE__*/${factory}('${item.exportName}', ${item.exportName}Url, ${widthStr}${options}));`;
  });

  return `${header.join('\n')}\n\n${body.join('\n')}\n`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Write grouped image atom files (one `.tsx` per icon group + one standalone `.svg` per variant).
 *
 * @param {string} destPath - output directory for image atom files
 * @param {import('./convert.utils').ParsedIconSource[]} items - icon items with enriched `iconData`, `width`, `isColor`
 * @param {WriteImageOptions & { importConfig: { iconImportPath: string; colorImportPath: string } }} options
 * @returns {Promise<{ fileCount: number; svgFileCount: number }>}
 */
async function writeImageFiles(destPath, items, options) {
  const groups = groupItemsByBase(destPath, items, options);

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  let fileCount = 0;
  let svgFileCount = 0;

  for (const [base, groupItems] of groups) {
    const typedItems = /** @type {import('./convert.utils').ParsedIconSource[]} */ (groupItems);

    // 1. Write one standalone .svg per variant (the mask / image source).
    for (const item of typedItems) {
      const svgPath = path.join(destPath, svgFileNameFor(item.fileName));
      await fsP.writeFile(svgPath, generateStandaloneSvg(item), 'utf8');
      svgFileCount++;
    }

    // 2. Write the .tsx module that imports those .svg URLs and exports the components.
    const moduleTsx = generateImageModuleTsx(typedItems, options.importConfig);
    const tsxPath = path.join(destPath, `${base}.tsx`);
    await fsP.writeFile(tsxPath, moduleTsx, 'utf8');
    fileCount++;
  }

  return { fileCount, svgFileCount };
}

module.exports = { writeImageFiles };

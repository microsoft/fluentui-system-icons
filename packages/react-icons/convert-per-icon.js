// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

/**
 * Per-icon (one file per icon) generator for SVG React icons.
 * Mirrors logic from convert.js, but instead of chunking exports it writes each
 * icon component into its own .tsx file so that package export maps like
 * `@fluentui/react-icons/svg/add-24-filled` can resolve directly.
 */

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const _ = require('lodash');
const { createFormatMetadata, writeMetadata } = require('./convert.utils');

const SRC_PATH = /** @type {string} */ (argv.source); // intermediate folder with optimized svg assets
const DEST_PATH = /** @type {string} */ (argv.dest);  // destination folder for per-icon sources e.g. ./src/atoms/svg
const RTL_FILE = /** @type {string} */ (argv.rtl);    // rtl metadata json
const METADATA_PATH = /** @type {string} */ (argv.metadata); // output metadata file (same shape as existing)

if (!SRC_PATH) throw new Error('Icon source folder not specified by --source');
if (!DEST_PATH) throw new Error('Output destination folder not specified by --dest');
if (!RTL_FILE) throw new Error('RTL file not specified by --rtl');
if (!METADATA_PATH) throw new Error('Metadata output file not specified by --metadata');

main().catch(err => {
  console.error('[per-icon svg] generation failed:', err);
  process.exit(1);
});

async function main() {
  cleanFolder(DEST_PATH);

  /** @type {import('./convert.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // Generate resizable icons (20px variants with size removed from name)
  const resizable = generatePerIconFiles(SRC_PATH, DEST_PATH, true);
  Object.assign(svgMetadata, createFormatMetadata(resizable.iconNames, 'svg', 'resizable'));

  // Generate sized icons (all size variants)
  const sized = generatePerIconFiles(SRC_PATH, DEST_PATH, false);
  Object.assign(svgMetadata, createFormatMetadata(sized.iconNames, 'svg', 'sized'));

  await writeMetadata(METADATA_PATH, svgMetadata);
  console.log(`[per-icon svg] Wrote ${resizable.fileCount + sized.fileCount} icon files to ${DEST_PATH}`);
}

/**
 * @param {string} folder
 */
function cleanFolder(folder) {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true });
  }
  fs.mkdirSync(folder, { recursive: true });
}

/**
 * Generates per-icon .tsx files.
 * Reuses logic from convert.js's processFolder, omitting chunking and index creation.
 * @param {string} srcPath
 * @param {string} destPath
 * @param {boolean} resizable
 * @returns {{ iconNames: string[]; fileCount: number }}
 */
function generatePerIconFiles(srcPath, destPath, resizable) {
  const files = fs.readdirSync(srcPath);
  const metadata = JSON.parse(fs.readFileSync(RTL_FILE, 'utf-8'));

  /** @type {string[]} */
  const iconNames = [];
  let count = 0;

  for (const file of files) {
    const srcFile = path.join(srcPath, file);
    if (fs.lstatSync(srcFile).isDirectory() || !file.endsWith('.svg')) continue;
    if (resizable && !file.includes('20')) continue; // only base 20 size for resizable set

    let iconName = file.slice(0, -4); // strip .svg
    iconName = iconName.replace('ic_fluent_', '');
    iconName = resizable ? iconName.replace('20', '') : iconName;

    let exportName = _.camelCase(iconName);
    exportName = exportName[0].toUpperCase() + exportName.slice(1);
    const flipInRtl = metadata[exportName] === 'mirror';
    const isColor = iconName.includes('_color');

    const svgContent = fs.readFileSync(srcFile, 'utf8');
    const getAttr = (key) => [...svgContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, 'g'))].map(v => v[0]);
    const width = resizable ? '"1em"' : getAttr('width')[0];
    const options = flipInRtl && isColor ? ', { flipInRtl: true, color: true }' : flipInRtl ? ', { flipInRtl: true }' : isColor ? ', { color: true }' : '';

    let exportCode;
    if (isColor) {
      const innerSvg = svgContent.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '').trim();
      exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, \`${innerSvg}\`${options}));`;
    } else {
      const paths = getAttr('d').join(',');
      exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, [${paths}]${options}));`;
    }

    // File name: snake / kebab-case of exportName e.g. AccessTime20Filled -> access-time-20-filled.tsx
    const fileName = toKebabCase(exportName) + '.tsx';
    const filePath = path.join(destPath, fileName);
    const relImport = path.posix.join('..', '..', 'utils', 'createFluentIcon'); // from atoms/svg/* to utils/
    const fileSource = `"use client";\nimport type { FluentIcon } from '${relImport}';\nimport { createFluentIcon } from '${relImport}';\n${exportCode}\n`;

    fs.writeFileSync(filePath, fileSource, 'utf8');
    iconNames.push(exportName);
    count++;
  }

  return { iconNames, fileCount: count };
}

/**
 * Convert PascalCase or camelCase with digits to kebab-case.
 * @param {string} name
 */
function toKebabCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([A-Za-z])/g, '$1-$2')
    .toLowerCase();
}

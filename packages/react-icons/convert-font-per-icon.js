// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

/**
 * Per-icon (one file per icon) generator for FONT React icons.
 * Mirrors logic from convert-font.js, but writes each export into its own file
 * under the provided destination (e.g. ./src/atoms/fonts).
 */

const fs = require('fs');
const fsSync = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const _ = require('lodash');
const { createFormatMetadata, writeMetadata } = require('./convert.utils');

const SRC_PATH = /** @type {string} */ (argv.source);          // path with codepoint json maps (src/utils/fonts)
const DEST_PATH = /** @type {string} */ (argv.dest);           // destination folder for per-icon sources e.g. ./src/atoms/fonts
const CODEPOINT_DEST_PATH = /** @type {string} */ (argv.codepointDest); // where to output processed codepoint maps
const RTL_FILE = /** @type {string} */ (argv.rtl);             // rtl metadata json
const METADATA_PATH = /** @type {string} */ (argv.metadata);   // output font metadata file

if (!SRC_PATH) throw new Error('Icon source folder not specified by --source');
if (!DEST_PATH) throw new Error('Output destination folder not specified by --dest');
if (!CODEPOINT_DEST_PATH) throw new Error('Output destination folder for codepoint map not specified by --codepointDest');
if (!RTL_FILE) throw new Error('RTL file not specified by --rtl');
if (!METADATA_PATH) throw new Error('Metadata output file not specified by --metadata');

main().catch(err => {
  console.error('[per-icon font] generation failed:', err);
  process.exit(1);
});

async function main() {
  cleanFolder(DEST_PATH);

  /** @type {import('./convert.utils').IconMetadataCollection} */
  const fontMetadata = {};

  const resizable = await processFontFiles(SRC_PATH, DEST_PATH, CODEPOINT_DEST_PATH, true);
  Object.assign(fontMetadata, createFormatMetadata(resizable.iconNames, 'font', 'resizable'));

  const sized = await processFontFiles(SRC_PATH, DEST_PATH, CODEPOINT_DEST_PATH, false);
  Object.assign(fontMetadata, createFormatMetadata(sized.iconNames, 'font', 'sized'));

  await writeMetadata(METADATA_PATH, fontMetadata);
  console.log(`[per-icon font] Wrote ${resizable.fileCount + sized.fileCount} font icon files to ${DEST_PATH}`);
}



/**
 * @param {string} srcPath
 * @param {string} destPath
 * @param {string} codepointDest
 * @param {boolean} resizable
 * @returns {Promise<{iconNames: string[]; fileCount: number}>}
 */
async function processFontFiles(srcPath, destPath, codepointDest, resizable) {
  const fileNames = resizable
    ? ['FluentSystemIcons-Resizable.json']
    : ['FluentSystemIcons-Light.json', 'FluentSystemIcons-Filled.json', 'FluentSystemIcons-Regular.json'];
  const files = fileNames.map(name => path.resolve(srcPath, name)).filter(f => fsSync.existsSync(f));

  /** @type {string[]} */
  const iconNames = [];
  let count = 0;
  const rtlMeta = JSON.parse(fsSync.readFileSync(RTL_FILE, 'utf-8'));

  for (const jsonFile of files) {
    /** @type {Record<string, number>} */
    const iconEntries = JSON.parse(fsSync.readFileSync(jsonFile, 'utf8'));

    for (const [rawName, codepoint] of Object.entries(iconEntries)) {
      let exportName = getReactIconNameFromGlyphName(rawName, resizable);
      const flipInRtl = rtlMeta[exportName] === 'mirror';
      const style = /filled$/i.test(rawName) ? 0 : /regular$/i.test(rawName) ? 1 : 3; // matches original logic
      const size = resizable ? undefined : (/ (?<=_)\d+(?=_filled|_regular|_light)/.exec(rawName)?.[0]);
      const jsCode = `export const ${exportName}: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon(${JSON.stringify(exportName)}, ${JSON.stringify(String.fromCodePoint(codepoint))}, ${resizable ? 2 : style}, ${resizable ? undefined : size}${flipInRtl ? ', { flipInRtl: true }' : ''}));`;

      const fileName = _.kebabCase(exportName) + '.tsx';
      const filePath = path.join(destPath, fileName);
      const relImport = path.posix.join('..', '..', 'utils', 'fonts', 'createFluentFontIcon'); // from atoms/fonts/*
      const fileSource = `"use client";\nimport type { FluentFontIcon } from '${relImport}';\nimport { createFluentFontIcon } from '${relImport}';\n${jsCode}\n`;
      fsSync.writeFileSync(filePath, fileSource, 'utf8');
      iconNames.push(exportName);
      count++;
    }

    // write codepoint maps for webpack plugin parity with existing generator
    await writeCodepointMap(path.resolve(codepointDest, path.basename(jsonFile)), iconEntries, resizable);
  }

  return { iconNames, fileCount: count };
}

/**
 * @param {string} dest
 * @param {Record<string, number>} iconEntries
 * @param {boolean} resizable
 * @returns {Promise<void>}
 */
async function writeCodepointMap(dest, iconEntries, resizable) {
  const finalMap = Object.fromEntries(Object.entries(iconEntries).map(([name, codepoint]) => [getReactIconNameFromGlyphName(name, resizable), codepoint]));
  fs.writeFileSync(dest, JSON.stringify(finalMap, null, 2));
}

/**
 * Convert a raw glyph name (from codepoint maps) into the exported React icon name.
 * @param {string} iconName
 * @param {boolean} resizable
 * @returns {string}
 */
function getReactIconNameFromGlyphName(iconName, resizable) {
  let name = iconName.replace('ic_fluent_', '');
  name = resizable ? name.replace('20', '') : name;
  name = _.upperFirst(_.camelCase(name));
  return name;
}

/**
 *
 * @param {string} folder
 */
function cleanFolder(folder) {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true });
  }
  fs.mkdirSync(folder, { recursive: true });
}

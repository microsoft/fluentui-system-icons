// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs/promises');
const fsS = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const argv = require('yargs').boolean('selector').default('selector', false).argv;
const _ = require('lodash');

const { createFormatMetadata, writeMetadata } = require('./convert.utils');
const { getReactIconNameFromGlyphName, loadRtlMetadata, buildFontIconExport } = require('./convert-font.utils');

const SRC_PATH = /** @type {string} */ (argv.source); // path with codepoint json maps (src/utils/fonts)
const DEST_PATH = /** @type {string} */ (argv.dest); // destination folder for output
const CODEPOINT_DEST_PATH = /** @type {string} */ (argv.codepointDest); // where to output processed codepoint maps
const RTL_FILE = /** @type {string} */ (argv.rtl); // rtl metadata json
const METADATA_PATH = /** @type {string} */ (argv.metadata); // output font metadata file

if (!SRC_PATH) {
  throw new Error('Icon source folder not specified by --source');
}
if (!DEST_PATH) {
  throw new Error('Output destination folder not specified by --dest');
}
if (!CODEPOINT_DEST_PATH) {
  throw new Error('Output destination folder for codepoint map not specified by --dest');
}
if (!RTL_FILE) {
  throw new Error('RTL file not specified by --rtl');
}

if (!METADATA_PATH) {
  throw new Error('Metadata output file not specified by --metadata');
}

main().catch((err) => {
  console.error('[font generation] failed', err);
  process.exit(1);
});

async function main() {
  const iconEntries = prepareProcessedCodepointMap(CODEPOINT_DEST_PATH);

  // 1. Generate chunked font icon exports (existing behavior) into DEST_PATH
  const { svgMetadata: chunkMetadata } = await processPerChunk(DEST_PATH, iconEntries);

  // 2. Derive per-icon destination: if DEST_PATH ends with '/fonts', emit into sibling 'atoms/fonts'
  const perIconDest = derivePerIconDest(DEST_PATH);
  const perIconMetadataPath = derivePerIconMetadataPath(METADATA_PATH);
  const { svgMetadata: perIconMetadata } = await processPerIcon(perIconDest, iconEntries);

  // 3. Write processed (React-name) map once per original JSON (shared core dedupes)
  iconEntries.resizable.forEach(({ writeProcessedCM }) => writeProcessedCM());
  iconEntries.sized.forEach(({ writeProcessedCM }) => writeProcessedCM());

  await writeMetadata(METADATA_PATH, chunkMetadata);
  await writeMetadata(perIconMetadataPath, perIconMetadata);

  console.log(
    `[font generation] Finished chunk + per-icon outputs. Chunk dest: ${DEST_PATH} | Per-icon dest: ${perIconDest}`,
  );
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} dest
 * @param {{ resizable: IconEntry[]; sized: IconEntry[];}} iconEntries
 */
async function processPerChunk(dest, iconEntries) {
  /** @type string[] */
  const indexContents = [];

  // Collect all font metadata
  /** @type {import('./convert.utils').IconMetadataCollection} */
  const fontMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons');
  const { content: iconContents, iconNames: resizableIconNames } = await processFolder(iconEntries.resizable, true);

  await cleanFolder(iconPath);

  await Promise.all(
    iconContents.map(async (chunk, i) => {
      const chunkFileName = `chunk-${i}`;
      const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
      indexContents.push(`export * from './icons/${chunkFileName}'`);
      await fs.writeFile(chunkPath, chunk);
    }),
  );

  // Create font metadata for resizable icons
  Object.assign(fontMetadata, createFormatMetadata(resizableIconNames, 'font', 'resizable'));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const { content: sizedIconContents, iconNames: sizedIconNames } = await processFolder(iconEntries.sized, false);
  await cleanFolder(sizedIconPath);

  await Promise.all(
    sizedIconContents.map(async (chunk, i) => {
      const chunkFileName = `chunk-${i}`;
      const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
      indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
      await fs.writeFile(chunkPath, chunk);
    }),
  );

  // Create font metadata for sized icons
  Object.assign(fontMetadata, createFormatMetadata(sizedIconNames, 'font', 'sized'));

  const indexPath = path.join(dest, 'index.tsx');
  // Finally add the interface definition and then write out the index.
  indexContents.push("export { default as wrapIcon } from '../utils/wrapIcon'");
  indexContents.push("export { default as bundleIcon } from '../utils/bundleIcon'");
  indexContents.push("export { createFluentIcon } from '../utils/createFluentIcon'");
  indexContents.push("export { createFluentFontIcon } from '../utils/fonts/createFluentFontIcon'");
  indexContents.push("export * from '../utils/useIconState'");
  indexContents.push("export * from '../utils/constants'");
  indexContents.push("export { IconDirectionContextProvider, useIconContext } from '../contexts/index'");
  indexContents.push("export type { FluentIconsProps } from '../utils/FluentIconsProps.types'");
  indexContents.push("export type { FluentIcon } from '../utils/createFluentIcon'");
  indexContents.push("export type { FluentFontIcon } from '../utils/fonts/createFluentFontIcon'");
  indexContents.push("export type { IconDirectionContextValue } from '../contexts/index'");

  await fs.writeFile(indexPath, indexContents.join('\n'));

  return { svgMetadata: fontMetadata };
}

/**
 * @typedef {{ iconEntries: Record<string, number>; writeProcessedCM: () => void; }} IconEntry
 */

/**
 *
 * @param {string} codepointMapDestFolder
 * @returns {{ resizable: IconEntry[]; sized: IconEntry[]; }}
 */
function prepareProcessedCodepointMap(codepointMapDestFolder) {
  const fileNamesResizable = ['FluentSystemIcons-Resizable.json'];
  const fileNamesSized = [
    'FluentSystemIcons-Light.json',
    'FluentSystemIcons-Filled.json',
    'FluentSystemIcons-Regular.json',
  ];

  const resolveExistingFiles = (/** @type {string[]} */ names) =>
    names.map((name) => path.resolve(codepointMapDestFolder, name)).filter((f) => fsS.existsSync(f));

  /**
   * @param {string[]} names
   * @param {boolean} resizable
   * @returns {{ iconEntries: Record<string, number>; writeProcessedCM: () => void; }[]}
   */
  function buildEntries(names, resizable) {
    const files = resolveExistingFiles(names);
    return files.map((srcFile) => {
      /** @type {Record<string, number>} */
      const iconEntries = JSON.parse(fsS.readFileSync(srcFile, 'utf8'));
      const finalMap = Object.fromEntries(
        Object.entries(iconEntries).map(([name, codepoint]) => [
          getReactIconNameFromGlyphName(name, resizable),
          codepoint,
        ]),
      );
      const writeProcessedCM = () => {
        console.log('writing processed codepoint map to', srcFile);
        fsS.writeFileSync(srcFile, JSON.stringify(finalMap, null, 2));
      };

      return { iconEntries, writeProcessedCM };
    });
  }

  const resizable = buildEntries(fileNamesResizable, true);
  const sized = buildEntries(fileNamesSized, false);

  return { resizable, sized };
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {IconEntry[]} iconEntries
 * @param {boolean} resizable
 * @returns { Promise<{ content: string[], iconNames: string[] }> } - chunked icon files to insert and list of icon names
 */
async function processFolder(iconEntries, resizable) {
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];

  // Process files sequentially to maintain consistent order
  for (const entry of iconEntries) {
    const { entries, names } = generateReactIconEntries(entry.iconEntries, resizable);
    iconExports.push(...entries);
    iconNames.push(...names);
  }

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import type {FluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`);
    chunk.unshift(`import {createFluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`);
    chunk.unshift(`"use client";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join('\n'));

  return { content: chunkContent, iconNames };
}

/**
 *
 * @param {string} destPath
 * @param {Record<string,number>} iconEntries
 * @param {boolean} resizable
 */
// generateCodepointMapForWebpackPlugin removed in favor of shared writeProcessedCodepointMap

/**
 *
 * @param {Record<string, number>} iconEntries
 * @param {boolean} resizable
 * @returns {{ entries: string[], names: string[] }}
 */
function generateReactIconEntries(iconEntries, resizable) {
  /** @type {string[]} */
  const iconExports = [];
  /** @type {string[]} */
  const iconNames = [];
  const metadata = loadRtlMetadata(RTL_FILE);
  for (const [iconName, codepoint] of Object.entries(iconEntries)) {
    const destFilename = getReactIconNameFromGlyphName(iconName, resizable);
    const flipInRtl = metadata[destFilename] === 'mirror';
    const jsCode = buildFontIconExport(destFilename, codepoint, resizable, flipInRtl, iconName);

    iconExports.push(jsCode);
    iconNames.push(destFilename);
  }

  return { entries: iconExports, names: iconNames };
}

/**
 *
 * @param {string} iconName
 * @param {boolean} resizable
 * @returns {string}
 */
// getReactIconNameFromGlyphName provided by shared core

/**
 *
 * @param {string} folder
 */
async function cleanFolder(folder) {
  try {
    await fs.access(folder);
    await fs.rm(folder, { recursive: true, force: true });
  } catch {}

  await mkdirp(folder);
}

/**
 * Per-icon generation (merged from former convert-font-per-icon.js)
 * @param {string} destPath
 * @param {{ resizable: IconEntry[]; sized: IconEntry[];}} iconEntries
 */
async function processPerIcon(destPath, iconEntries) {
  await cleanFolder(destPath);

  /** @type {import('./convert.utils').IconMetadataCollection} */
  const fontMetadata = {};

  const resizable = await processPerIconSet(destPath, iconEntries.resizable, true);
  Object.assign(fontMetadata, createFormatMetadata(resizable.iconNames, 'font', 'resizable'));
  const sized = await processPerIconSet(destPath, iconEntries.sized, false);
  Object.assign(fontMetadata, createFormatMetadata(sized.iconNames, 'font', 'sized'));

  console.log(`[font per-icon] Wrote ${resizable.fileCount + sized.fileCount} files to ${destPath}`);

  return { svgMetadata: fontMetadata };
}

/**
 * Generate individual .tsx files for each icon variant
 * @param {string} destPath
 * @param {IconEntry[]} iconEntries
 * @param {boolean} resizable
 */
async function processPerIconSet(destPath, iconEntries, resizable) {
  /** @type {string[]} */
  const iconNames = [];
  let count = 0;
  const rtlMeta = loadRtlMetadata(RTL_FILE);
  for (const entry of iconEntries) {
    for (const [rawName, codepoint] of Object.entries(entry.iconEntries)) {
      const exportName = getReactIconNameFromGlyphName(rawName, resizable);
      const flipInRtl = rtlMeta[exportName] === 'mirror';
      const jsCode = buildFontIconExport(exportName, codepoint, resizable, flipInRtl, rawName);
      const fileName = `${_.kebabCase(exportName)}.tsx`;
      const relImport = path.posix.join('..', '..', 'utils', 'fonts', 'createFluentFontIcon');
      const source = [
        '"use client";',
        `import type { FluentFontIcon } from '${relImport}';`,
        `import { createFluentFontIcon } from '${relImport}';`,
        jsCode,
      ].join('\n');
      await fs.writeFile(path.join(destPath, fileName), source, 'utf8');
      iconNames.push(exportName);
      count++;
    }
  }
  return { iconNames, fileCount: count };
}

/**
 * Derive per-icon destination from the chunk destination.
 * Typical: chunk dest = .../src/fonts  -> per-icon dest = .../src/atoms/fonts
 * Fallback: append 'atoms' subfolder under dest.
 * @param {string} chunkDest
 */
function derivePerIconDest(chunkDest) {
  const parts = chunkDest.split(path.sep);
  const last = parts[parts.length - 1];
  if (/^fonts?$/i.test(last)) {
    // sibling atoms/fonts
    return path.join(parts.slice(0, -1).join(path.sep), 'atoms', last);
  }
  return path.join(chunkDest, 'atoms');
}

/**
 * Given the main metadata path, produce per-icon metadata path (replace .json with .atom.json)
 * @param {string} metadataPath
 */
function derivePerIconMetadataPath(metadataPath) {
  if (metadataPath.endsWith('.json')) {
    return metadataPath.replace(/\.json$/, '.atom.json');
  }
  return metadataPath + '.atom.json';
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');
const yargs = require('yargs');
const { makeIconExport, getCreateFluentIconHeader, loadRtlMetadata, generatePerIconFiles } = require('./convert.utils');
const { createStableChunks } = require("./chunking-utils");
const { createFormatMetadata, writeMetadata } = require('./metadata.utils');

if (require.main === module) {
  main().catch((err) => {
    console.error('[svg generation] failed:', err);
    process.exit(1);
  });
}

async function main() {
  const { SRC_PATH, DEST_PATH, RTL_FILE, METADATA_PATH, PER_ICON_DEST } = parseArgs(process.argv.slice(2));
  const srcFiles = await processSourceDir(SRC_PATH);
  const rtlMetadata = loadRtlMetadata(RTL_FILE);

  // 1. Generate chunks
  const { svgMetadata: chunkMetadata } = processPerChunk(srcFiles, DEST_PATH, rtlMetadata);

  // 2. Generate per-icon output
  const perIconMetadataPath = METADATA_PATH.replace(/\.json$/, '.atom.json');
  const { svgMetadata: perIconMetadata } = await processPerIcon(srcFiles, PER_ICON_DEST, rtlMetadata);

  writeMetadata(METADATA_PATH, chunkMetadata);
  writeMetadata(perIconMetadataPath, perIconMetadata);

  console.log(
    `[svg generation] Finished chunk + per-icon outputs. Chunk dest: ${DEST_PATH} | Per-icon dest: ${PER_ICON_DEST}`,
  );
}

/**
 *
 * @typedef {Awaited<ReturnType<typeof processSourceDir>>} SourceFiles
 */

/**
 * @param {SourceFiles} sourceFiles
 * @param {string} dest
 * @param {Record<string, any>} rtlMetadata
 */
function processPerChunk(sourceFiles, dest, rtlMetadata) {
  /** @type string[] */
  const indexContents = [];

  // Collect all SVG metadata
  /** @type {import('./metadata.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons');
  const { content: iconContents, iconNames: resizableIconNames } = processFolder(sourceFiles, rtlMetadata, true);

  if (fs.existsSync(iconPath)) {
    fs.rmSync(iconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(iconPath);

  iconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk);
  });

  // Create SVG metadata for resizable icons
  Object.assign(svgMetadata, createFormatMetadata(resizableIconNames, 'svg', 'resizable'));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const { content: sizedIconContents, iconNames: sizedIconNames } = processFolder(sourceFiles, rtlMetadata, false);
  if (fs.existsSync(sizedIconPath)) {
    fs.rmSync(sizedIconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(sizedIconPath);

  sizedIconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk);
  });

  // Create SVG metadata for sized icons
  Object.assign(svgMetadata, createFormatMetadata(sizedIconNames, 'svg', 'sized'));

  const indexPath = path.join(dest, 'index.tsx');
  // Finally add the interface definition and then write out the index.
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon'");
  indexContents.push("export { default as bundleIcon } from './utils/bundleIcon'");
  indexContents.push("export { createFluentIcon } from './utils/createFluentIcon'");
  indexContents.push("export * from './utils/useIconState'");
  indexContents.push("export * from './utils/constants'");
  indexContents.push("export { IconDirectionContextProvider, useIconContext } from './contexts/index'");
  // types
  indexContents.push("export type { FluentIconsProps } from './utils/FluentIconsProps.types'");
  indexContents.push("export type { FluentIcon } from './utils/createFluentIcon'");
  indexContents.push("export type { IconDirectionContextValue } from './contexts/index'");

  fs.writeFileSync(indexPath, indexContents.join('\n'));

  return { svgMetadata };
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {boolean} resizable
 * @returns { { content: string[], iconNames: string[] } } - chunked icon files to insert and list of icon names
 */
/**
 * @param {SourceFiles} srcFiles
 * @param {import('./convert.utils').RtlMetadata} rtlMetadata
 * @param {boolean} resizable
 */
function processFolder(srcFiles, rtlMetadata, resizable) {
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];

  srcFiles.forEach(function (entry) {
    if (resizable && !entry.file.includes('20')) {
      return;
    }

    const result = makeIconExport({ file: entry.file, srcFile: entry.srcFile, resizable, metadata: rtlMetadata });
    if (result) {
      iconExports.push(result.exportCode);
      iconNames.push(result.exportName);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  // Use stable chunking to prevent bundle size regressions when new icons are added
  const iconChunks = createStableChunks(iconExports, iconNames, 1000);

  const chunkHeader = getCreateFluentIconHeader('../utils/createFluentIcon');
  for (const chunk of iconChunks) {
    chunk.unshift(...chunkHeader);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join('\n'));

  return { content: chunkContent, iconNames };
}

/**
 * Per-icon generation (merged from former convert-per-icon.js)
 * @param {SourceFiles} sourceFiles
 * @param {string} destPath
 * @param {import('./convert-font.utils').RtlMetadata} rtlMetadata
 */
async function processPerIcon(sourceFiles, destPath, rtlMetadata, options = { groupByBase: true }) {
  // local clean (synchronous) similar to chunk variant
  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }
  fs.mkdirSync(destPath, { recursive: true });

  /** @type {import('./metadata.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // resizable (base 20 variant names with size removed)
  const resizable = await generatePerIconFiles(sourceFiles, destPath, rtlMetadata, true, options.groupByBase);
  Object.assign(svgMetadata, createFormatMetadata(resizable.iconNames, 'svg', 'resizable'));
  // sized (all sizes)
  const sized = await generatePerIconFiles(sourceFiles, destPath, rtlMetadata, false, options.groupByBase);
  Object.assign(svgMetadata, createFormatMetadata(sized.iconNames, 'svg', 'sized'));

  console.log(`[svg per-icon] Wrote ${resizable.fileCount + sized.fileCount} icon files to ${destPath}`);
  return { svgMetadata };
}

/**
 *
 * @param {string} srcPath
 */
async function processSourceDir(srcPath) {
  const srcFiles = await readdir(srcPath);
  /** @type {{ srcFile: string; file: string; }[]} */
  const filePaths = [];

  for (const file of srcFiles) {
    const srcFile = path.join(srcPath, file);

    // for now, ignore subdirectories/localization, until we have a plan for handling it
    // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
    // var joinedDestPath = path.join(destPath, file)
    // if (!fs.existsSync(joinedDestPath)) {
    //   fs.mkdirSync(joinedDestPath);
    // }
    // indexContents += processFolder(srcFile, joinedDestPath)
    if (fs.lstatSync(srcFile).isDirectory() || !file.endsWith('.svg')) continue;

    filePaths.push({ srcFile, file });
  }

  console.info(`[process src]: processed ${filePaths.length} files`);

  return filePaths;
}

/**
 *
 * @param {string[]} argv
 * @returns
 */
function parseArgs(argv) {
  const args = yargs.parse(argv);
  const SRC_PATH = /** @type {string} */ (args.source); // path with source svg files
  const DEST_PATH = /** @type {string} */ (args.dest); // destination folder for chunk output
  const RTL_FILE = /** @type {string} */ (args.rtl); // rtl metadata json
  const METADATA_PATH = /** @type {string} */ (args.metadata); // output metadata file
  const PER_ICON_DEST = /** @type {string} */ (args.perIconDest); // per-icon output folder

  if (!SRC_PATH) {
    throw new Error('Icon source folder not specified by --source');
  }
  if (!DEST_PATH) {
    throw new Error('Output destination folder not specified by --dest');
  }
  if (!PER_ICON_DEST) {
    throw new Error('Atoms Output destination folder not specified by --perIconDest');
  }
  if (!RTL_FILE) {
    throw new Error('RTL file not specified by --rtl');
  }
  if (!METADATA_PATH) {
    throw new Error('Metadata output file not specified by --metadata');
  }

  if (!fs.existsSync(DEST_PATH)) {
    fs.mkdirSync(DEST_PATH, { recursive: true });
  }

  if (!fs.existsSync(PER_ICON_DEST)) {
    fs.mkdirSync(PER_ICON_DEST, { recursive: true });
  }

  return { SRC_PATH, DEST_PATH, RTL_FILE, METADATA_PATH, PER_ICON_DEST };
}

module.exports = {};

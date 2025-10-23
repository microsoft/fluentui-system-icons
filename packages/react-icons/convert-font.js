// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs/promises');
const fsS = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const yargs = require('yargs');
const _ = require('lodash');

const { createFormatMetadata, writeMetadata } = require('./metadata.utils');
const {
  getReactIconNameFromGlyphName,
  loadRtlMetadata,
  buildFontIconExport,
  getCreateFluentIconHeader,
} = require('./convert-font.utils');
const { writePerIconFiles } = require('./per-icon.writer');

if (require.main === module) {
  main().catch((err) => {
    console.error('[font generation] failed', err);
    process.exit(1);
  });
}

async function main() {
  const { SRC_PATH, DEST_PATH, RTL_FILE, METADATA_PATH, CODEPOINT_DEST_PATH, PER_ICON_DEST } = parseArgs(
    process.argv.slice(2),
  );
  const rtlMetadata = loadRtlMetadata(RTL_FILE);
  const iconEntries = prepareProcessedCodepointMap(SRC_PATH, CODEPOINT_DEST_PATH);

  // 1. Generate chunked font icon exports (existing behavior) into DEST_PATH
  const { svgMetadata: chunkMetadata } = await processPerChunk(DEST_PATH, iconEntries, rtlMetadata);

  // 2. Generate per-icon output
  const perIconMetadataPath = METADATA_PATH.replace(/\.json$/, '.atom.json');
  const { svgMetadata: perIconMetadata } = await processPerIcon(PER_ICON_DEST, iconEntries, rtlMetadata);

  // 3. Write processed (React-name) map once per original JSON (shared core dedupes)
  iconEntries.resizable.forEach(({ writeProcessedCM }) => writeProcessedCM());
  iconEntries.sized.forEach(({ writeProcessedCM }) => writeProcessedCM());

  await writeMetadata(METADATA_PATH, chunkMetadata);
  await writeMetadata(perIconMetadataPath, perIconMetadata);

  console.log(
    `[font generation] Finished chunk + per-icon outputs. Chunk dest: ${DEST_PATH} | Per-icon dest: ${PER_ICON_DEST}`,
  );
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} dest
 * @param {{ resizable: IconEntry[]; sized: IconEntry[];}} iconEntries
 * @param {import('./convert-font.utils').RtlMetadata} rtlMetadata
 */
async function processPerChunk(dest, iconEntries, rtlMetadata) {
  /** @type string[] */
  const indexContents = [];

  // Collect all font metadata
  /** @type {import('./metadata.utils').IconMetadataCollection} */
  const fontMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons');
  const { content: iconContents, iconNames: resizableIconNames } = await processFolder(
    iconEntries.resizable,
    rtlMetadata,
    true,
  );

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
  const { content: sizedIconContents, iconNames: sizedIconNames } = await processFolder(
    iconEntries.sized,
    rtlMetadata,
    false,
  );
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
 * @param {string} srcPath
 * @param {string} destFolder
 * @returns {{ resizable: IconEntry[]; sized: IconEntry[]; }}
 */
function prepareProcessedCodepointMap(srcPath, destFolder) {
  const fileNamesResizable = ['FluentSystemIcons-Resizable.json'];
  const fileNamesSized = [
    'FluentSystemIcons-Light.json',
    'FluentSystemIcons-Filled.json',
    'FluentSystemIcons-Regular.json',
  ];

  const resolveExistingFiles = (/** @type {string[]} */ names) =>
    names.map((name) => path.resolve(srcPath, name)).filter((f) => fsS.existsSync(f));

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
        const outputPath = path.resolve(destFolder, path.basename(srcFile));
        console.log('- original codepoint map path', srcFile);
        console.log('- writing processed codepoint map to', outputPath);
        fsS.writeFileSync(outputPath, JSON.stringify(finalMap, null, 2));
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
 * @param {Record<string, 'mirror' | 'unique'>} rtlMetadata
 * @param {boolean} resizable
 * @returns { Promise<{ content: string[], iconNames: string[] }> } - chunked icon files to insert and list of icon names
 */
async function processFolder(iconEntries, rtlMetadata, resizable) {
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];

  // Process files sequentially to maintain consistent order
  for (const entry of iconEntries) {
    const { entries, names } = generateReactIconEntries(entry.iconEntries, rtlMetadata, resizable);
    iconExports.push(...entries);
    iconNames.push(...names);
  }

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  const chunkHeader = getCreateFluentIconHeader('../../utils/fonts/createFluentFontIcon');
  for (const chunk of iconChunks) {
    chunk.unshift(...chunkHeader);
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
 * @param {import('./convert-font.utils').RtlMetadata} rtlMetadata
 * @returns {{ entries: string[], names: string[] }}
 */
function generateReactIconEntries(iconEntries, rtlMetadata, resizable) {
  /** @type {string[]} */
  const iconExports = [];
  /** @type {string[]} */
  const iconNames = [];

  for (const [iconName, codepoint] of Object.entries(iconEntries)) {
    const destFilename = getReactIconNameFromGlyphName(iconName, resizable);
    const flipInRtl = rtlMetadata[destFilename] === 'mirror';
    const jsCode = buildFontIconExport(destFilename, codepoint, resizable, flipInRtl, iconName);

    iconExports.push(jsCode);
    iconNames.push(destFilename);
  }

  return { entries: iconExports, names: iconNames };
}

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
 * @param {import('./convert-font.utils').RtlMetadata} rtlMetadata
 */
async function processPerIcon(destPath, iconEntries, rtlMetadata, options = { groupByBase: true }) {
  await cleanFolder(destPath);

  /** @type {import('./metadata.utils').IconMetadataCollection} */
  const fontMetadata = {};

  const resizable = await processPerIconSet(destPath, iconEntries.resizable, rtlMetadata, true, options.groupByBase);
  Object.assign(fontMetadata, createFormatMetadata(resizable.iconNames, 'font', 'resizable'));
  const sized = await processPerIconSet(destPath, iconEntries.sized, rtlMetadata, false, options.groupByBase);
  Object.assign(fontMetadata, createFormatMetadata(sized.iconNames, 'font', 'sized'));

  console.log(`[font per-icon] Wrote ${resizable.fileCount + sized.fileCount} files to ${destPath}`);

  return { svgMetadata: fontMetadata };
}

/**
 * Generate individual .tsx files for each icon variant
 * @param {string} destPath
 * @param {IconEntry[]} iconEntries
 * @param {import('./convert-font.utils').RtlMetadata} rtlMetadata
 * @param {boolean} resizable
 */
async function processPerIconSet(destPath, iconEntries, rtlMetadata, resizable, groupByBase = true) {
  /** @type {string[]} */
  const iconNames = [];
  /** @type {Array<{ exportName: string; exportCode: string; fileName: string; rawName: string }>} */
  const items = [];

  for (const entry of iconEntries) {
    for (const [rawName, codepoint] of Object.entries(entry.iconEntries)) {
      const exportName = getReactIconNameFromGlyphName(rawName, resizable);
      const flipInRtl = rtlMetadata[exportName] === 'mirror';
      const jsCode = buildFontIconExport(exportName, codepoint, resizable, flipInRtl, rawName);
      const fileName = `${_.kebabCase(exportName)}.tsx`;
      items.push({ exportName, exportCode: jsCode, fileName, rawName });
      iconNames.push(exportName);
    }
  }

  const relImport = path.posix.join('..', '..', 'utils', 'fonts', 'createFluentFontIcon');
  const headerLines = getCreateFluentIconHeader(relImport);

  const flattened = items.filter((i) => i != null);
  // Font per-icon generation historically always groups by normalized base name.
  const result = await writePerIconFiles(destPath, flattened, headerLines, { groupByBase });
  return { iconNames, fileCount: result.fileCount };
}

/**
 *
 * @param {string[]} argv
 * @returns
 */
function parseArgs(argv) {
  const args = yargs.parse(argv);
  const SRC_PATH = /** @type {string} */ (args.source); // path with codepoint json maps (src/utils/fonts)
  const DEST_PATH = /** @type {string} */ (args.dest); // destination folder for chunk output
  const RTL_FILE = /** @type {string} */ (args.rtl); // rtl metadata json
  const METADATA_PATH = /** @type {string} */ (args.metadata); // output font metadata file
  const CODEPOINT_DEST_PATH = /** @type {string} */ (args.codepointDest); // where to output processed codepoint maps
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
  if (!CODEPOINT_DEST_PATH) {
    throw new Error('Output destination folder for codepoint map not specified by --dest');
  }

  if (!fsS.existsSync(DEST_PATH)) {
    fsS.mkdirSync(DEST_PATH, { recursive: true });
  }

  if (!fsS.existsSync(PER_ICON_DEST)) {
    fsS.mkdirSync(PER_ICON_DEST, { recursive: true });
  }

  return { SRC_PATH, DEST_PATH, RTL_FILE, METADATA_PATH, CODEPOINT_DEST_PATH, PER_ICON_DEST };
}

module.exports = { processPerIconSet };

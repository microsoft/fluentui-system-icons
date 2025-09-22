// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require("fs/promises");
const fsS = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");
const mkdirp = require('mkdirp');
const { promisify } = require('util');
const { option } = require("yargs");
const glob = promisify(require('glob'));
const { createFormatMetadata, writeMetadata } = require("./convert.utils");
const { createStableChunks } = require("./chunking-utils");

// @ts-ignore
const SRC_PATH = argv.source;
// @ts-ignore
const DEST_PATH = argv.dest;
// @ts-ignore
const CODEPOINT_DEST_PATH = argv.codepointDest;
// @ts-ignore
const RTL_FILE = argv.rtl;
// @ts-ignore
const METADATA_PATH = argv.metadata;


if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}
if (!CODEPOINT_DEST_PATH) {
  throw new Error("Output destination folder for codepoint map not specified by --dest");
}
if (!RTL_FILE) {
  throw new Error("RTL file not specified by --rtl");
}

if (!METADATA_PATH) {
  throw new Error("Metadata output file not specified by --metadata");
}

processFiles(SRC_PATH, DEST_PATH, METADATA_PATH)

async function processFiles(src, dest, metadataPath) {
  /** @type string[] */
  const indexContents = [];

  // Collect all font metadata
  /** @type {import('./convert.utils').IconMetadataCollection} */
  const fontMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons')
  const { content: iconContents, iconNames: resizableIconNames } = await processFolder(/** @type {string} */ (src), /** @type {string} */ (CODEPOINT_DEST_PATH), true);

  await cleanFolder(iconPath);

  await Promise.all(iconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    await fs.writeFile(chunkPath, chunk);
  }));

  // Create font metadata for resizable icons
  Object.assign(fontMetadata, createFormatMetadata(resizableIconNames, 'font', 'resizable'));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const { content: sizedIconContents, iconNames: sizedIconNames } = await processFolder(/** @type {string} */ (src), /** @type {string} */ (CODEPOINT_DEST_PATH), false);
  await cleanFolder(sizedIconPath);

  await Promise.all(sizedIconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    await fs.writeFile(chunkPath, chunk);
  }));

  // Create font metadata for sized icons
  Object.assign(fontMetadata, createFormatMetadata(sizedIconNames, 'font', 'sized'));

  const indexPath = path.join(dest, 'index.tsx')
  // Finally add the interface definition and then write out the index.
  indexContents.push('export { default as wrapIcon } from \'../utils/wrapIcon\'');
  indexContents.push('export { default as bundleIcon } from \'../utils/bundleIcon\'');
  indexContents.push('export { createFluentIcon } from \'../utils/createFluentIcon\'');
  indexContents.push('export { createFluentFontIcon } from \'../utils/fonts/createFluentFontIcon\'');
  indexContents.push('export * from \'../utils/useIconState\'');
  indexContents.push('export * from \'../utils/constants\'');
  indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'../contexts/index\'');
  indexContents.push('export type { FluentIconsProps } from \'../utils/FluentIconsProps.types\'');
  indexContents.push('export type { FluentIcon } from \'../utils/createFluentIcon\'');
  indexContents.push('export type { FluentFontIcon } from \'../utils/fonts/createFluentFontIcon\'');
  indexContents.push('export type { IconDirectionContextValue } from \'../contexts/index\'');


  await fs.writeFile(indexPath, indexContents.join('\n'));

  // Write font metadata
  if (metadataPath) {
    await writeMetadata(metadataPath, fontMetadata);
  }
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {string} codepointMapDestFolder
 * @param {boolean} resizable
 * @returns { Promise<{ content: string[], iconNames: string[] }> } - chunked icon files to insert and list of icon names
 */
async function processFolder(srcPath, codepointMapDestFolder, resizable) {

  // Explicitly specify the order to make chunk generation deterministic: Light first, then Regular, then Filled
  const fileNames = resizable ? ['FluentSystemIcons-Resizable.json'] : ['FluentSystemIcons-Light.json', 'FluentSystemIcons-Filled.json', 'FluentSystemIcons-Regular.json'];
  const files = fileNames.map(name => path.resolve(srcPath, name)).filter(filePath => fsS.existsSync(filePath));

  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];

  // Process files sequentially to maintain consistent order
  for (const srcFile of files) {
    /** @type {Record<string, number>} */
    const iconEntries = JSON.parse(await fs.readFile(srcFile, 'utf8'));
    const { entries, names } = generateReactIconEntries(iconEntries, resizable);
    iconExports.push(...entries);
    iconNames.push(...names);

    await generateCodepointMapForWebpackPlugin(
      path.resolve(codepointMapDestFolder, path.basename(srcFile)),
      iconEntries,
      resizable
    );
  }

  // chunk all icons into separate files to keep build reasonably fast
  // Use stable chunking to prevent bundle size regressions when new icons are added
  const iconChunks = createStableChunks(iconExports, iconNames, 1000);

  for (const chunk of iconChunks) {
    chunk.unshift(`import type {FluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`)
    chunk.unshift(`import {createFluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`)
    chunk.unshift(`"use client";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map(chunk => chunk.join('\n'));

  return { content: chunkContent, iconNames };
}

/**
 *
 * @param {string} destPath
 * @param {Record<string,number>} iconEntries
 * @param {boolean} resizable
 */
async function generateCodepointMapForWebpackPlugin(destPath, iconEntries, resizable) {
  const finalCodepointMap = Object.fromEntries(
    Object.entries(iconEntries)
      .map(([name, codepoint]) => [getReactIconNameFromGlyphName(name, resizable), codepoint])
  );

  await fs.writeFile(destPath, JSON.stringify(finalCodepointMap, null, 2));
}

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
  const metadata = JSON.parse(fsS.readFileSync(/** @type {string} */ (RTL_FILE), 'utf-8'));
  for (const [iconName, codepoint] of Object.entries(iconEntries)) {
    let destFilename = getReactIconNameFromGlyphName(iconName, resizable);
    var flipInRtl = metadata[destFilename] === 'mirror';
    let iconStyle = /filled$/i.test(iconName) ? 0 /* Filled */ : /regular$/i.test(iconName) ? 1 /* Regular */ : 3 /* Light */
    var jsCode = `export const ${destFilename}: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon(${JSON.stringify(destFilename)
      }, ${JSON.stringify(String.fromCodePoint(codepoint))
      }, ${resizable ? 2 /* Resizable */ : iconStyle
      }, ${resizable ? undefined : ` ${/(?<=_)\d+(?=_filled|_regular|_light)/.exec(iconName)?.[0]}`
      }${flipInRtl ? `, { flipInRtl: true }` : ''}));`;

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
function getReactIconNameFromGlyphName(iconName, resizable) {
  let destFilename = iconName.replace("ic_fluent_", ""); // strip ic_fluent_
  destFilename = resizable ? destFilename.replace("20", "") : destFilename;
  destFilename = _.camelCase(destFilename); // We want them to be camelCase, so access_time would become accessTime here
  destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()); // capitalize the first letter
  return destFilename;
}

async function cleanFolder(folder) {
  try {
    await fs.access(folder);
    await fs.rm(folder, { recursive: true, force: true });
  } catch { }

  await mkdirp(folder);
}
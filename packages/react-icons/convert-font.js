// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require("node:fs/promises");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const mkdirp = require('mkdirp');
const glob = require('glob');

const SRC_PATH = /** @type {string} */ (argv.source);
const DEST_PATH = /** @type {string} */ (argv.dest);
const CODEPOINT_DEST_PATH = /** @type {string} */ (argv.codepointDest);
const RTL_FILE = /** @type {string} */ (argv.rtl);


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

processFiles(SRC_PATH, DEST_PATH)

/**
 * Convert a string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} - The camelCased string
 */
function camelCase(str) {
  return str
    .replace(/[_-]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^(.)/, (char) => char.toLowerCase());
}

/**
 *
 * @param {string} src
 * @param {string} dest
 */
async function processFiles(src, dest) {
  /** @type string[] */
  const indexContents = [];

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons')
  const iconContents = await processFolder(src, CODEPOINT_DEST_PATH, true);

  await cleanFolder(iconPath);

  await Promise.all(iconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkJsPath = path.resolve(iconPath, `${chunkFileName}.js`);
    const chunkTsPath = path.resolve(iconPath, `${chunkFileName}.d.ts`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    await fs.writeFile(chunkJsPath, chunk.js);
    await fs.writeFile(chunkTsPath, chunk.dts);
  }));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const sizedIconContents = await processFolder(src, CODEPOINT_DEST_PATH, false);
  await cleanFolder(sizedIconPath);

  await Promise.all(sizedIconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkJsPath = path.resolve(sizedIconPath, `${chunkFileName}.js`);
    const chunkTsPath = path.resolve(sizedIconPath, `${chunkFileName}.d.ts`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    await fs.writeFile(chunkJsPath, chunk.js);
    await fs.writeFile(chunkTsPath, chunk.dts);
  }));

  const indexPath = path.join(dest, 'index.js')
  // Finally add the interface definition and then write out the index.
  indexContents.push('export { default as wrapIcon } from \'../utils/wrapIcon\'');
  indexContents.push('export { default as bundleIcon } from \'../utils/bundleIcon\'');
  indexContents.push('export { createFluentIcon } from \'../utils/createFluentIcon\'');
  indexContents.push('export { createFluentFontIcon } from \'../utils/fonts/createFluentFontIcon\'');
  indexContents.push('export * from \'../utils/useIconState\'');
  indexContents.push('export * from \'../utils/constants\'');
  indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'../contexts/index\'');

  await fs.writeFile(indexPath, indexContents.join('\n'));

  // Also generate index.d.ts
  const indexDtsPath = path.join(dest, 'index.d.ts')
  const indexDtsContents = [
    ...indexContents,
    'export type { FluentIconsProps } from \'../utils/FluentIconsProps.types\'',
    'export type { FluentIcon } from \'../utils/createFluentIcon\'',
    'export type { IconDirectionContextValue } from \'../contexts/index\''
  ];

  await fs.writeFile(indexDtsPath, indexDtsContents.join('\n'));

}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {string} codepointMapDestFolder
 * @param {boolean} resizable
 * @returns { Promise<{js: string, dts: string}[]> } - chunked icon files to insert
 */
async function processFolder(srcPath, codepointMapDestFolder, resizable) {
  const files = glob.sync(resizable ? 'FluentSystemIcons-Resizable.json' : 'FluentSystemIcons-{Filled,Regular,Light}.json', { cwd: srcPath, absolute: true });

  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconDtsExports = [];
  await Promise.all(files.map(async (srcFile, index) => {
    /** @type {Record<string, number>} */
    const iconEntries = JSON.parse(await fs.readFile(srcFile, 'utf8'));
    const generatedIcons = generateReactIconEntries(iconEntries, resizable);
    iconExports.push(...generatedIcons.js);
    iconDtsExports.push(...generatedIcons.dts);

    return generateCodepointMapForWebpackPlugin(
      path.resolve(codepointMapDestFolder, path.basename(srcFile)),
      iconEntries,
      resizable
    );
  }));

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  /** @type string[][] */
  const iconDtsChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
    iconDtsChunks.push(iconDtsExports.splice(0, 500));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import {createFluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`)
    chunk.unshift(`"use client";`);
  }

  for (const chunk of iconDtsChunks) {
    chunk.unshift(`import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";`)
    chunk.unshift(`/// <reference types="react" />`);
  }

  /** @type {{js: string, dts: string}[]} */
  const chunkContent = iconChunks.map((chunk, i) => ({
    js: chunk.join('\n'),
    dts: iconDtsChunks[i].join('\n')
  }));

  return chunkContent;
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
 * @returns {{js: string[], dts: string[]}}
 */
function generateReactIconEntries(iconEntries, resizable) {
  /** @type {string[]} */
  const iconExports = [];
  /** @type {string[]} */
  const iconDtsExports = [];
  const metadata = JSON.parse(readFileSync(/** @type {string} */ (RTL_FILE), 'utf-8'));
  for (const [iconName, codepoint] of Object.entries(iconEntries)) {
    let destFilename = getReactIconNameFromGlyphName(iconName, resizable);
    var flipInRtl = metadata[destFilename] === 'mirror';
    let iconStyle = /filled$/i.test(iconName) ? 0 /* Filled */ : /regular$/i.test(iconName) ? 1 /* Regular */ : 3 /* Light */
    var jsCode = `export const ${destFilename} = /*#__PURE__*/createFluentFontIcon(${JSON.stringify(destFilename)
      }, ${JSON.stringify(String.fromCodePoint(codepoint))
      }, ${resizable ? 2 /* Resizable */ : iconStyle
      }, ${resizable ? undefined : ` ${/(?<=_)\d+(?=_filled|_regular|_light)/.exec(iconName)?.[0]}`
      }${flipInRtl ? `, { flipInRtl: true }` : ''});`;

    var dtsCode = `export declare const ${destFilename}: FluentFontIcon;`;

    iconExports.push(jsCode);
    iconDtsExports.push(dtsCode);
  }

  return {
    js: iconExports,
    dts: iconDtsExports
  };
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
  destFilename = camelCase(destFilename); // We want them to be camelCase, so access_time would become accessTime here
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
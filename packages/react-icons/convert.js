// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("node:fs/promises");
const {existsSync, mkdirSync, rmSync} = require("node:fs");
const path = require("path");
const argv = require("yargs").boolean("selector").default("selector", false).argv;

const SRC_PATH = /** @type {string} */ (argv.source);
const DEST_PATH = /** @type {string} */ (argv.dest);
const RTL_FILE = /** @type {string} */ (argv.rtl);

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}

if (!RTL_FILE) {
  throw new Error("RTL file not specified by --rtl");
}

if (!existsSync(DEST_PATH)) {
  mkdirSync(DEST_PATH);
}

processFiles(SRC_PATH, DEST_PATH).catch(console.error);

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
  const iconContents = await processFolder(src, dest, true)

  if (existsSync(iconPath)) {
    rmSync(iconPath, { recursive: true, force: true } );
  }
  mkdirSync(iconPath);

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
  const sizedIconContents = await processFolder(src, dest, false)
  if (existsSync(sizedIconPath)) {
    rmSync(sizedIconPath, { recursive: true, force: true } );
  }
  mkdirSync(sizedIconPath);

  await Promise.all(sizedIconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkJsPath = path.resolve(sizedIconPath, `${chunkFileName}.js`);
    const chunkTsPath = path.resolve(sizedIconPath, `${chunkFileName}.d.ts`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    await fs.writeFile(chunkJsPath, chunk.js);
    await fs.writeFile(chunkTsPath, chunk.dts);
  }));

  const indexPath = path.join(dest, 'index.js')
  indexContents.push('export { default as wrapIcon } from \'./utils/wrapIcon\'');
  indexContents.push('export { default as bundleIcon } from \'./utils/bundleIcon\'');
  indexContents.push('export { createFluentIcon } from \'./utils/createFluentIcon\'');
  indexContents.push('export * from \'./utils/useIconState\'');
  indexContents.push('export * from \'./utils/constants\'');
  indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'./contexts/index\'');

  await fs.writeFile(indexPath, indexContents.join('\n'));

  // Also generate index.d.ts
  const indexDtsPath = path.join(dest, 'index.d.ts')
  const indexDtsContents = [
    ...indexContents,
    'export type { FluentIconsProps } from \'./utils/FluentIconsProps.types\'',
    'export type { FluentIcon } from \'./utils/createFluentIcon\'',
    'export type { IconDirectionContextValue } from \'./contexts/index\''
  ];

  await fs.writeFile(indexDtsPath, indexDtsContents.join('\n'));
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {string} destPath
 * @param {boolean} resizable
 * @returns { Promise<{js: string, dts: string}[]> } - chunked icon files to insert
 */
async function processFolder(srcPath, destPath, resizable) {
  const files = await fs.readdir(srcPath)
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconDtsExports = [];
  const metadata = JSON.parse(await fs.readFile(RTL_FILE, 'utf-8'));
  //console.log(metadata);

  await Promise.all(files.map(async (file, index) => {
    const srcFile = path.join(srcPath, file)
    const stats = await fs.lstat(srcFile);

    if (stats.isDirectory() || !file.endsWith('.svg')) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // var joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
      return;
    }

    if(resizable && !file.includes("20")) {
      return
    }
    var iconName = file.substring(0, file.length - 4) // strip '.svg'
    iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
    iconName = resizable ? iconName.replace("20", "") : iconName
    var destFilename = camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
    destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter
    var flipInRtl = metadata[destFilename] === 'mirror';  //checks rtl.json to see if icon is autoflippable
    let color = iconName.includes("_color") // checks if '_color' is in the path, which means the icon has a color variant
    const iconContent = await fs.readFile(srcFile, { encoding: "utf8" })
    let jsCode = '';
    const getAttr = (key) => [...iconContent.matchAll(`(?<= ${key}=)".+?"`)].map((v) => v[0]);
    const width = resizable ? '"1em"' : getAttr("width")[0];
    const options = flipInRtl && color ? `, { flipInRtl: true, color: true }` : flipInRtl ? `, { flipInRtl: true }` : color ? `, { color: true }` : '';

    if (color) {
      // For color icons, extract the entire SVG inner content
      const innerSvg = iconContent.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '').trim();
      jsCode = `export const ${destFilename} = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, \`${innerSvg}\`${options}));`
    } else {
      // For non-color icons, keep the old path-based approach
      const paths = getAttr("d").join(',');
      jsCode = `export const ${destFilename} = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, [${paths}]${options}));`
    }
    iconExports.push(jsCode);
    iconDtsExports.push(`export declare const ${destFilename}: FluentIcon;`);
  }));

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  /** @type string[][] */
  const iconDtsChunks = [];
  while(iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 1000));
    iconDtsChunks.push(iconDtsExports.splice(0, 1000));
  }

  for(const chunk of iconChunks) {
    chunk.unshift(`import { createFluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`"use client";`);
  }

  for(const chunk of iconDtsChunks) {
    chunk.unshift(`import type { FluentIcon } from "../utils/createFluentIcon";`);
  }

  /** @type {{js: string, dts: string}[]} */
  const chunkContent = iconChunks.map((chunk, i) => ({
    js: chunk.join('\n'),
    dts: iconDtsChunks[i].join('\n')
  }));

  return chunkContent;
}
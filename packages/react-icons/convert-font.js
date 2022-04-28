// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require("fs/promises");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");
const mkdirp = require('mkdirp');
const { promisify } = require('util');
const glob = promisify(require('glob'));

// @ts-ignore
const SRC_PATH = argv.source;
// @ts-ignore
const DEST_PATH = argv.dest;
// @ts-ignore
const CODEPOINT_DEST_PATH = argv.codepointDest;

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}
if (!CODEPOINT_DEST_PATH) {
  throw new Error("Output destination folder for codepoint map not specified by --dest");
}

processFiles(SRC_PATH, DEST_PATH)

async function processFiles(src, dest) {
  /** @type string[] */
  const indexContents = [];

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons')
  const iconContents = await processFolder(src, CODEPOINT_DEST_PATH, true);

  await cleanFolder(iconPath);

  await Promise.all(iconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    await fs.writeFile(chunkPath, chunk);
  }));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const sizedIconContents = await processFolder(src, CODEPOINT_DEST_PATH, false)
  await cleanFolder(sizedIconPath);

  await Promise.all(sizedIconContents.map(async (chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    await fs.writeFile(chunkPath, chunk);
  }));

  const indexPath = path.join(dest, 'index.tsx')
  // Finally add the interface definition and then write out the index.
  indexContents.push('export { FluentIconsProps } from \'../utils/FluentIconsProps.types\'');
  indexContents.push('export { default as wrapIcon } from \'../utils/wrapIcon\'');
  indexContents.push('export { default as bundleIcon } from \'../utils/bundleIcon\'');
  indexContents.push('export * from \'../utils/useIconState\'');
  indexContents.push('export * from \'../utils/constants\'');

  await fs.writeFile(indexPath, indexContents.join('\n'));

}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath 
 * @param {string} codepointMapDestFolder
 * @param {boolean} oneSize 
 * @returns { Promise<string[]> } - chunked icon files to insert
 */
async function processFolder(srcPath, codepointMapDestFolder, oneSize) {
  var files = await glob(oneSize ? 'FluentSystemIcons-OneSize.json' : 'FluentSystemIcons-{Filled,Regular}.json', { cwd: srcPath, absolute: true });

  /** @type string[] */
  const iconExports = [];
  await Promise.all(files.map(async (srcFile, index) => {
    /** @type {Record<string, number>} */
    const iconEntries = JSON.parse(await fs.readFile(srcFile, 'utf8'));
    iconExports.push(...generateReactIconEntries(iconEntries, oneSize));

    return generateCodepointMapForWebpackPlugin(
      path.resolve(codepointMapDestFolder, path.basename(srcFile)),
      iconEntries,
      oneSize
    );
  }));

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import {createFluentFontIcon} from "../../utils/fonts/createFluentFontIcon";`)
  }

  /** @type string[] */
  const chunkContent = iconChunks.map(chunk => chunk.join('\n'));

  return chunkContent;
}

/**
 * 
 * @param {string} destPath 
 * @param {Record<string,number>} iconEntries 
 * @param {boolean} oneSize 
 */
async function generateCodepointMapForWebpackPlugin(destPath, iconEntries, oneSize) {
  const finalCodepointMap = Object.fromEntries(
    Object.entries(iconEntries)
      .map(([name, codepoint]) => [getReactIconNameFromGlyphName(name, oneSize), codepoint])
  );

  await fs.writeFile(destPath, JSON.stringify(finalCodepointMap, null, 2));
}

/**
 * 
 * @param {Record<string, number>} iconEntries 
 * @param {boolean} oneSize 
 * @returns {string[]}
 */
function generateReactIconEntries(iconEntries, oneSize) {
  /** @type {string[]} */
  const iconExports = [];
  for (const [iconName, codepoint] of Object.entries(iconEntries)) {
    let destFilename = getReactIconNameFromGlyphName(iconName, oneSize);

    var jsCode = `export const ${destFilename} = /*#__PURE__*/createFluentFontIcon(${JSON.stringify(destFilename)
      }, ${JSON.stringify(String.fromCodePoint(codepoint))
      }, ${oneSize ? 2 /* OneSize */ : /filled$/i.test(iconName) ? 0 /* Filled */ : 1 /* Regular */
      }${oneSize ? '' : `, ${/(?<=_)\d+(?=_filled|_regular)/.exec(iconName)[0]}`
      });`;

    iconExports.push(jsCode);
  }

  return iconExports;
}

/**
 * 
 * @param {string} iconName 
 * @param {boolean} oneSize 
 * @returns {string}
 */
function getReactIconNameFromGlyphName(iconName, oneSize) {
  let destFilename = iconName.replace("ic_fluent_", ""); // strip ic_fluent_
  destFilename = oneSize ? destFilename.replace("20", "") : destFilename;
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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require('fs');
const path = require('path');
const argv = require('yargs').boolean('selector').default('selector', false).argv;
const _ = require('lodash');
const { createFormatMetadata, writeMetadata } = require('./convert.utils');

const SRC_PATH = /** @type {string} */ (argv.source); // path with codepoint json maps (src/utils/fonts)
const DEST_PATH = /** @type {string} */ (argv.dest); // destination folder for output
const RTL_FILE = /** @type {string} */ (argv.rtl); // rtl metadata json
const METADATA_PATH = /** @type {string} */ (argv.metadata); // output font metadata file

if (!SRC_PATH) {
  throw new Error('Icon source folder not specified by --source');
}
if (!DEST_PATH) {
  throw new Error('Output destination folder not specified by --dest');
}

if (!RTL_FILE) {
  throw new Error('RTL file not specified by --rtl');
}

if (!METADATA_PATH) {
  throw new Error('Metadata output file not specified by --metadata');
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

main().catch((err) => {
  console.error('[svg generation] failed:', err);
  process.exit(1);
});

async function main() {
  // 1. Generate chunked (existing) output
  const { svgMetadata: chunkMetadata } = processPerChunk(SRC_PATH, DEST_PATH, METADATA_PATH);

  // 2. Generate per-icon output (merged from former convert-per-icon.js)
  const perIconDest = derivePerIconDest(DEST_PATH);
  const perIconMetadataPath = derivePerIconMetadataPath(METADATA_PATH);
  const { svgMetadata: perIconMetadata } = processPerIcon(SRC_PATH, perIconDest, perIconMetadataPath);

  writeMetadata(METADATA_PATH, chunkMetadata);
  writeMetadata(perIconMetadataPath, perIconMetadata);

  console.log('[svg generation] Finished chunk + per-icon outputs.');
  return { chunkMetadata, perIconMetadata };
}

/**
 * @param {string} src
 * @param {string} dest
 * @param {string} metadataPath
 */
function processPerChunk(src, dest, metadataPath) {
  /** @type string[] */
  const indexContents = [];

  // Collect all SVG metadata
  /** @type {import('./convert.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons');
  const { content: iconContents, iconNames: resizableIconNames } = processFolder(src, dest, true);

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
  const { content: sizedIconContents, iconNames: sizedIconNames } = processFolder(src, dest, false);
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
 * @param {string} srcPath
 * @param {string} destPath
 * @param {boolean} resizable
 */
function processFolder(srcPath, destPath, resizable) {
  var files = fs.readdirSync(srcPath);
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];
  var metadata = JSON.parse(fs.readFileSync(/** @type {string} */ (RTL_FILE), 'utf-8'));

  files.forEach(function (file, index) {
    var srcFile = path.join(srcPath, file);
    if (fs.lstatSync(srcFile).isDirectory() || !file.endsWith('.svg')) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // var joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
    } else {
      if (resizable && !file.includes('20')) {
        return;
      }
      var iconName = file.substring(0, file.length - 4); // strip '.svg'
      iconName = iconName.replace('ic_fluent_', ''); // strip ic_fluent_
      iconName = resizable ? iconName.replace('20', '') : iconName;
      var destFilename = _.camelCase(iconName); // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()); // capitalize the first letter
      var flipInRtl = metadata[destFilename] === 'mirror'; //checks rtl.json to see if icon is autoflippable
      let color = iconName.includes('_color'); // checks if '_color' is in the path, which means the icon has a color variant
      var iconContent = fs.readFileSync(srcFile, { encoding: 'utf8' });
      let jsCode = '';
      /**
       * @param {string} key
       */
      const getAttr = (key) => [...iconContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, 'g'))].map((v) => v[0]);
      const width = resizable ? '"1em"' : getAttr('width')[0];
      const options =
        flipInRtl && color
          ? `, { flipInRtl: true, color: true }`
          : flipInRtl
            ? `, { flipInRtl: true }`
            : color
              ? `, { color: true }`
              : '';

      if (color) {
        // For color icons, extract the entire SVG inner content
        const innerSvg = iconContent
          .replace(/^[\s\S]*?<svg[^>]*>/, '')
          .replace(/<\/svg>[\s\S]*$/, '')
          .trim();
        jsCode = `export const ${destFilename}: FluentIcon = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, \`${innerSvg}\`${options}));`;
      } else {
        // For non-color icons, keep the old path-based approach
        const paths = getAttr('d').join(',');
        jsCode = `export const ${destFilename}: FluentIcon = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, [${paths}]${options}));`;
      }
      iconExports.push(jsCode);
      iconNames.push(destFilename);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 1000));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import { createFluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`import type { FluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`"use client";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join('\n'));

  return { content: chunkContent, iconNames };
}

/**
 * Per-icon generation (merged from former convert-per-icon.js)
 * @param {string} srcPath
 * @param {string} destPath
 * @param {string} metadataPath
 */
function processPerIcon(srcPath, destPath, metadataPath) {
  // local clean (synchronous) similar to chunk variant
  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }
  fs.mkdirSync(destPath, { recursive: true });

  /** @type {import('./convert.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // resizable (base 20 variant names with size removed)
  const resizable = generatePerIconFiles(srcPath, destPath, true);
  Object.assign(svgMetadata, createFormatMetadata(resizable.iconNames, 'svg', 'resizable'));
  // sized (all sizes)
  const sized = generatePerIconFiles(srcPath, destPath, false);
  Object.assign(svgMetadata, createFormatMetadata(sized.iconNames, 'svg', 'sized'));

  console.log(`[svg per-icon] Wrote ${resizable.fileCount + sized.fileCount} icon files to ${destPath}`);
  return { svgMetadata };
}

/**
 * Generates per-icon .tsx files (adapted from convert-per-icon.js)
 * @param {string} srcPath
 * @param {string} destPath
 * @param {boolean} resizable
 * @returns {{ iconNames: string[]; fileCount: number }}
 */
function generatePerIconFiles(srcPath, destPath, resizable) {
  const files = fs.readdirSync(srcPath);
  const metadata = JSON.parse(fs.readFileSync(/** @type {string} */ (RTL_FILE), 'utf-8'));

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
    /**
     * @param {string} key
     */
    const getAttr = (key) => [...svgContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, 'g'))].map((v) => v[0]);
    const width = resizable ? '"1em"' : getAttr('width')[0];
    const options =
      flipInRtl && isColor
        ? ', { flipInRtl: true, color: true }'
        : flipInRtl
          ? ', { flipInRtl: true }'
          : isColor
            ? ', { color: true }'
            : '';

    let exportCode;
    if (isColor) {
      const innerSvg = svgContent
        .replace(/^[\s\S]*?<svg[^>]*>/, '')
        .replace(/<\/svg>[\s\S]*$/, '')
        .trim();
      exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, \`${innerSvg}\`${options}));`;
    } else {
      const paths = getAttr('d').join(',');
      exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, [${paths}]${options}));`;
    }

    const fileName = toKebabCase(exportName) + '.tsx';
    const filePath = path.join(destPath, fileName);
    const relImport = path.posix.join('..', '..', 'utils', 'createFluentIcon');
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

/**
 * Derive per-icon destination from the chunk destination.
 * Typical: chunk dest = .../src  -> per-icon dest = .../src/atoms/svg
 * @param {string} chunkDest
 */
function derivePerIconDest(chunkDest) {
  const parts = chunkDest.split(path.sep);
  const last = parts[parts.length - 1];
  if (/^src$/i.test(last)) {
    return path.join(chunkDest, 'atoms', 'svg');
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

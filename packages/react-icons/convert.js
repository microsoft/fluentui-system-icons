// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");
const { createFormatMetadata, writeMetadata } = require("./convert.utils");
const { createStableChunks } = require("./chunking-utils");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const RTL_FILE = argv.rtl;
const METADATA_PATH = argv.metadata;

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}

if (!RTL_FILE) {
  throw new Error("RTL file not specified by --rtl");
}

if (!METADATA_PATH) {
  throw new Error("Metadata output file not specified by --metadata");
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

processFiles(SRC_PATH, DEST_PATH, METADATA_PATH).catch(err => {
  console.error('Error processing files:', err);
  process.exit(1);
});

async function processFiles(src, dest, metadataPath) {
  /** @type string[] */
  const indexContents = [];

  // Collect all SVG metadata
  /** @type {import('./convert.utils').IconMetadataCollection} */
  const svgMetadata = {};

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons')
  const { content: iconContents, iconNames: resizableIconNames } = processFolder(src, dest, true)

  if (fs.existsSync(iconPath)) {
    fs.rmSync(iconPath, { recursive: true, force: true } );
  }
  fs.mkdirSync(iconPath);

  iconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk, (err) => {
      if (err) throw err;
    });
  });

  // Create SVG metadata for resizable icons
  Object.assign(svgMetadata, createFormatMetadata(resizableIconNames, 'svg', 'resizable'));

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const { content: sizedIconContents, iconNames: sizedIconNames } = processFolder(src, dest, false)
  if (fs.existsSync(sizedIconPath)) {
    fs.rmSync(sizedIconPath, { recursive: true, force: true } );
  }
  fs.mkdirSync(sizedIconPath);

  sizedIconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk, (err) => {
      if (err) throw err;
    });
  });

  // Create SVG metadata for sized icons
  Object.assign(svgMetadata, createFormatMetadata(sizedIconNames, 'svg', 'sized'));

  const indexPath = path.join(dest, 'index.tsx')
  // Finally add the interface definition and then write out the index.
  indexContents.push('export { default as wrapIcon } from \'./utils/wrapIcon\'');
  indexContents.push('export { default as bundleIcon } from \'./utils/bundleIcon\'');
  indexContents.push('export { createFluentIcon } from \'./utils/createFluentIcon\'');
  indexContents.push('export * from \'./utils/useIconState\'');
  indexContents.push('export * from \'./utils/constants\'');
  indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'./contexts/index\'');
  // types
  indexContents.push('export type { FluentIconsProps } from \'./utils/FluentIconsProps.types\'');
  indexContents.push('export type { FluentIcon } from \'./utils/createFluentIcon\'');
  indexContents.push('export type { IconDirectionContextValue } from \'./contexts/index\'');

  fs.writeFileSync(indexPath, indexContents.join('\n'), (err) => {
    if (err) throw err;
  });

  // Write SVG metadata
  if (metadataPath) {
    await writeMetadata(metadataPath, svgMetadata);
  }

}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {boolean} resizable
 * @returns { { content: string[], iconNames: string[] } } - chunked icon files to insert and list of icon names
 */
function processFolder(srcPath, destPath, resizable) {
  var files = fs.readdirSync(srcPath)
  /** @type string[] */
  const iconExports = [];
  /** @type string[] */
  const iconNames = [];
  var metadata = JSON.parse(fs.readFileSync(RTL_FILE, 'utf-8'));
  //console.log(metadata);
  files.forEach(function (file, index) {
    var srcFile = path.join(srcPath, file)
    if (fs.lstatSync(srcFile).isDirectory() || !file.endsWith('.svg')) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // var joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
    } else {
      if(resizable && !file.includes("20")) {
        return
      }
      var iconName = file.substring(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      iconName = resizable ? iconName.replace("20", "") : iconName
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter
      var flipInRtl = metadata[destFilename] === 'mirror';  //checks rtl.json to see if icon is autoflippable
      let color = iconName.includes("_color") // checks if '_color' is in the path, which means the icon has a color variant
      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      let jsCode = '';
      const getAttr = (key) => [...iconContent.matchAll(`(?<= ${key}=)".+?"`)].map((v) => v[0]);
      const width = resizable ? '"1em"' : getAttr("width")[0];
      const options = flipInRtl && color ? `, { flipInRtl: true, color: true }` : flipInRtl ? `, { flipInRtl: true }` : color ? `, { color: true }` : '';

      if (color) {
        // For color icons, extract the entire SVG inner content
        const innerSvg = iconContent.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '').trim();
        jsCode = `export const ${destFilename}: FluentIcon = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, \`${innerSvg}\`${options}));`
      } else {
        // For non-color icons, keep the old path-based approach
        const paths = getAttr("d").join(',');
        jsCode = `export const ${destFilename}: FluentIcon = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, [${paths}]${options}));`
      }
      iconExports.push(jsCode);
      iconNames.push(destFilename);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  // Use stable chunking to prevent bundle size regressions when new icons are added
  // IMPORTANT: chunkCount should NEVER change after initial release to prevent reshuffling
  const iconChunks = createStableChunks(iconExports, iconNames, {chunkCount: 30});

  for(const chunk of iconChunks) {
    chunk.unshift(`import { createFluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`import type { FluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`"use client";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map(chunk => chunk.join('\n'));

  return { content: chunkContent, iconNames };
}

function fileTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ['jsx', 'typescript']
  const tpl = template.smart({ plugins })

  componentName.name = componentName.name.substring(3)
  componentName.name = componentName.name.replace('IcFluent', '')

	return jsx;
}
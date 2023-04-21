// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const RTL_FILTER_PATH =argv.filter;
const TSX_EXTENSION = '.tsx'

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}
if (!RTL_FILTER_PATH) {
  throw new Error("Filter folder not specified by --filter");
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

const filterFile = fs.readFileSync(RTL_FILTER_PATH, { encoding: 'utf8' })
var rtlArray = filterFile.split(/\r?\n/);
//console.log(rtlArray)
processFiles(SRC_PATH, DEST_PATH)

function processFiles(src, dest) {
  /** @type string[] */
  const indexContents = [];

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons')
  const iconContents = processFolder(src, dest, true)

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

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const sizedIconContents = processFolder(src, dest, false)
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

  const indexPath = path.join(dest, 'index.tsx')
  // Finally add the interface definition and then write out the index.
  indexContents.push('export type { FluentIconsProps } from \'./utils/FluentIconsProps.types\'');
  indexContents.push('export { default as bundleIcon } from \'./utils/bundleIcon\'');
  indexContents.push('export * from \'./utils/useIconState\'');
  indexContents.push('export * from \'./utils/constants\'');
  indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'./contexts/index\'');
  indexContents.push('export type { IconDirectionContextValue } from \'./contexts/index\'');

  fs.writeFileSync(indexPath, indexContents.join('\n'), (err) => {
    if (err) throw err;
  });

}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath 
 * @param {boolean} resizable 
 * @returns { string [] } - chunked icon files to insert
 */
function processFolder(srcPath, destPath, resizable) {
  var files = fs.readdirSync(srcPath)
  /** @type string[] */
  const iconExports = [];
  files.forEach(function (file, index) {
    var srcFile = path.join(srcPath, file)
    if (fs.lstatSync(srcFile).isDirectory()) {
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
      // Check to see if the svg should be autoflipped
      var shouldAutoFlip = rtlArray.includes(file);
      var iconName = file.substring(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      iconName = resizable ? iconName.replace("20", "") : iconName
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter

      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      const getAttr = (key) => [...iconContent.matchAll(`(?<= ${key}=)".+?"`)].map((v) => v[0]);
      const width = resizable ? '"1em"' : getAttr("width")[0];
      const paths = getAttr("d").join(',');
      var jsCode = `export const ${destFilename} = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, [${paths}], ${shouldAutoFlip}));`
      iconExports.push(jsCode);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while(iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 1000));
  }

  for(const chunk of iconChunks) {
    chunk.unshift(`import { createFluentIcon } from "../utils/createFluentIcon";`);
    chunk.unshift(`import type { FluentIcon } from "../utils/createFluentIcon";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map(chunk => chunk.join('\n'));

  return chunkContent;
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
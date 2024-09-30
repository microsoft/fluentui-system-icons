// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const svgr = require("@svgr/core");
const fs = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs")
  .boolean("selector")
  .default("selector", false)
  .option("native", {
    type: "boolean",
  }).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const REACT_NATIVE = argv.native;
const TSX_EXTENSION = '.tsx'

const rnSvgElements = ['Path', 'Circle', 'Ellipse', 'G', 'Line', 'Polygon', 'Polyline', 'Rect', 'Symbol', 'Text', 'Use', 'Defs', 'LinearGradient', 'RadialGradient', 'Stop', 'ClipPath', 'Pattern', 'Mask'];

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

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
  indexContents.push('export { FluentIconsProps } from \'./utils/FluentIconsProps.types\'');
  indexContents.push('export { default as wrapIcon } from \'./utils/wrapIcon\'');
  indexContents.push('export * from \'./utils/useIconState\'');
  indexContents.push('export * from \'./utils/constants\'');

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

  // These options will be passed to svgr/core
  // See https://react-svgr.com/docs/options/ for more info
  function getSvgrOptions(file, isResizable) {
    const isColorIcon = file.includes('_color.svg');
    
    const options = {
      template: fileTemplate,
      expandProps: 'end',
      replaceAttrValues: isColorIcon ? {} : { '#212121': '{primaryFill}' },
      typescript: true,
      prettier: true,
      native: REACT_NATIVE,
    };
    
    // Add icon: true only if it's not a sized icon
    if (isResizable) {
      options.icon = true;
    }
    
    return options;
  }

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
      var iconName = file.substr(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      iconName = resizable ? iconName.replace("20", "") : iconName
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter

      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      
      var jsxCode = resizable ? 
        svgr.transform.sync(iconContent, getSvgrOptions(file, true), { filePath: file }) 
        : svgr.transform.sync(iconContent, getSvgrOptions(file, false), { filePath: file })

var jsCode = destFilename.endsWith('Color') ? `
const ${destFilename}Icon = (props) => {
  return ${jsxCode};
}

export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon, '${destFilename}');
      ` :
`

const ${destFilename}Icon = (props) => {
  const { fill: primaryFill = 'currentColor' } = props;
  return ${jsxCode};
}

export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon, '${destFilename}');
      `
      iconExports.push(jsCode);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while(iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  for(const chunk of iconChunks) {
    chunk.unshift(`import wrapIcon from "../utils/wrapIcon";`)
    chunk.unshift(`import * as React from "react";`)

    var foundElements = {};
    
    chunk.forEach(text => 
      {
        rnSvgElements.forEach(element => {
          if (!foundElements[element] && 
            (text.match(new RegExp(`<${element}\\b[\\S\\s]+\\/>`)) || 
             text.match(new RegExp(`<${element}\\b[\\s\\S]*>[\\s\\S]*<\\/${element}>`))))
            foundElements[element] = true;
        });
      });

    var extraImports = '';
    Object.entries(foundElements).forEach(([element, _]) => {
      extraImports += ', ' + element;
    });

    chunk.unshift(`import {Svg${extraImports}} from "react-native-svg";`)
  }

  /** @type string[] */
  const chunkContent = iconChunks.map(chunk => chunk.join('\n'));

  return chunkContent;
}

function fileTemplate (variables, { tpl })
{
  variables.componentName = variables.componentName.substring(3);
  variables.componentName = variables.componentName.replace('IcFluent', '');

  return tpl`
  ${variables.jsx}
 
`;
};
  
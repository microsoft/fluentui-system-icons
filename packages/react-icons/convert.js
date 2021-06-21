// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const svgr = require("@svgr/core");
const fs = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;

const TSX_EXTENSION = '.tsx'

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
  var componentsPath = path.join(dest, 'components')
  if (!fs.existsSync(componentsPath)) {
    fs.mkdirSync(componentsPath)
  }

  var indexPath = path.join(dest, 'index.tsx')
  var indexContents = processFolder(src, componentsPath)

  // Finally add the interface definition and then write out the index.
  indexContents += '\nexport { IFluentIconsProps } from \'./utils/IFluentIconsProps.types\''
  indexContents += '\nexport { default as wrapIcon } from \'./utils/wrapIcon\''
  indexContents += '\nexport { default as bundleIcon } from \'./utils/bundleIcon\''
  indexContents += '\nexport * from \'./utils/css\''
  fs.writeFileSync(indexPath, indexContents, (err) => {
    if (err) throw err;
  });

}

/*
  Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
*/
function processFolder(srcPath, destPath) {
  var files = fs.readdirSync(srcPath)

  // These options will be passed to svgr/core
  // See https://react-svgr.com/docs/options/ for more info
  var svgrOpts = {
    template: fileTemplate,
    expandProps: false, // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    svgProps: { className: '{className}'}, // In order to provide styling, className will be used
    replaceAttrValues: { '#212121': '{primaryFill}' }, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null.
    typescript: true,
  }

  // Build out the index for the components as we process the files
  var indexContents = ''

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
      var iconName = file.substr(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter
      var destFile = path.join(destPath, destFilename + TSX_EXTENSION) // get the qualified path

      var locale = destPath.substring(destPath.indexOf('components') + 11)
      var indexLocation = path.join('.', 'components')
      if (locale.length > 0) {
        indexLocation = path.join(indexLocation, locale)
      }
      indexLocation = path.join(indexLocation, destFilename)
      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      
      var jsxCode = svgr.default.sync(iconContent, svgrOpts, { filePath: file })
      var jsCode = 
`import * as React from 'react';
import  wrapIcon from '../utils/wrapIcon';
import { IFluentIconsProps } from '../utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return ${jsxCode};
}

const ${destFilename} = wrapIcon(rawSvg({}), '${destFilename}');
export default ${destFilename};
      `
      indexContents += '\nexport { default as ' + destFilename + ' } from \'./' + indexLocation + '\''
      fs.writeFileSync(destFile, jsCode, (err) => {
        if (err) throw err;
      });
    }
  });

  // console.log(indexContents)
  return indexContents
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
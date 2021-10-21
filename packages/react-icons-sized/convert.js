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

  var iconPath = path.join(dest, 'icons.tsx')
  iconContents = processFolder(src, dest)
  fs.writeFileSync(iconPath, iconContents, (err) => {
    if (err) throw err;
  });

  var indexPath = path.join(dest, 'index.tsx')
  var indexContents = 'export * from \'./icons\''
  // Finally add the interface definition and then write out the index.
  indexContents += '\nexport { IFluentIconsProps } from \'./utils/IFluentIconsProps.types\''
  indexContents += '\nexport { default as wrapIcon } from \'./utils/wrapIcon\''
  indexContents += '\nexport { default as bundleIcon } from \'./utils/bundleIcon\''
  indexContents += '\nexport * from \'./utils/useIconState\''
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
  var indexContents = 'import * as React from "react";\nimport  wrapIcon from "./utils/wrapIcon";\nimport { IFluentIconsProps } from "./utils/IFluentIconsProps.types";'

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

      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      
      var jsxCode = svgr.default.sync(iconContent, svgrOpts, { filePath: file })
      var jsCode = 
`
const ${destFilename}Icon = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return ${jsxCode};
}

export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon({}), '${destFilename}');
      `
      indexContents += '\n' + jsCode
    }
  });

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
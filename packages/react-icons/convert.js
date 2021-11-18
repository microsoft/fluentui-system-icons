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

  // make file for resizeable icons
  var iconPath = path.join(dest, 'icons.tsx')
  var iconContents = processFolder(src, dest, true)

  fs.writeFileSync(iconPath, iconContents, (err) => {
    if (err) throw err;
  });

  // make file for sized icons
  var sizedIconPath = path.join(dest, 'sizedIcons.tsx');
  var sizedIconContents = processFolder(src, dest, false)

  fs.writeFileSync(sizedIconPath, sizedIconContents, (err) => {
    if (err) throw err;
  })

  var indexPath = path.join(dest, 'index.tsx')
  // Finally add the interface definition and then write out the index.
  var indexContents = 'export * from \'./icons\''
  indexContents += '\nexport * from \'./sizedIcons\''
  indexContents += '\nexport { FluentIconsProps } from \'./utils/FluentIconsProps.types\''
  indexContents += '\nexport { default as wrapIcon } from \'./utils/wrapIcon\''
  indexContents += '\nexport { default as bundleIcon } from \'./utils/bundleIcon\''
  indexContents += '\nexport * from \'./utils/useIconState\''
  indexContents += '\nexport * from \'./utils/constants\''
  fs.writeFileSync(indexPath, indexContents, (err) => {
    if (err) throw err;
  });

}

/*
  Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
*/
function processFolder(srcPath, destPath, oneSize) {
  var files = fs.readdirSync(srcPath)

  // These options will be passed to svgr/core
  // See https://react-svgr.com/docs/options/ for more info
  var svgrOpts = {
    template: fileTemplate,
    expandProps: false, // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    svgProps: { className: '{className}'}, // In order to provide styling, className will be used
    replaceAttrValues: { '#212121': '{primaryFill}' }, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null.
    typescript: true,
    icon: true
  }

  var svgrOptsSizedIcons = {
    template: fileTemplate,
    expandProps: false, // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    svgProps: { className: '{className}'}, // In order to provide styling, className will be used
    replaceAttrValues: { '#212121': '{primaryFill}' }, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null.
    typescript: true
  }

  // Build out the index for the components as we process the files
  var iconContents = 'import * as React from "react";\nimport wrapIcon from "./utils/wrapIcon";\nimport { FluentIconsProps } from "./utils/FluentIconsProps.types";'

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
      if(oneSize && !file.includes("20")) {
        return
      }
      var iconName = file.substr(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      iconName = oneSize ? iconName.replace("20", "") : iconName
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter

      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      
      var jsxCode = oneSize ? svgr.default.sync(iconContent, svgrOpts, { filePath: file }) : svgr.default.sync(iconContent, svgrOptsSizedIcons, { filePath: file })
      var jsCode = 
`
const ${destFilename}Icon = (iconProps: FluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return ${jsxCode};
}

export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon({}), '${destFilename}');
      `
      iconContents += '\n' + jsCode
    }
  });

  return iconContents
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
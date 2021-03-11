// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const svgr = require("@svgr/core");
const fs = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");
const template = require("./template");

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

if (!fs.existsSync(DEST_PATH + '/components')) {
  fs.mkdirSync(DEST_PATH + '/components');
}

processFolder(SRC_PATH, DEST_PATH)

/*
  Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
*/
function processFolder(srcPath, destPath) {
  fs.readdir(srcPath, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

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
      var componentPath = destPath + '/components'
      var iconName = file.substr(0, file.length - 4) // strip '.svg'
      iconName = iconName.replace("ic_fluent_", "") // strip ic_fluent_
      var srcFile = path.join(srcPath, file)
      var destFilename = _.camelCase(iconName) // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()) // capitalize the first letter
      var destFile = path.join(componentPath, destFilename + TSX_EXTENSION) // get the qualified path

      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      jsCode = svgr.default.sync(iconContent, svgrOpts, { filePath: file })
      indexContents += '\nexport { default as ' + destFilename + ' } from \'./components/' + destFilename + '\''
      fs.writeFileSync(destFile, jsCode, (err) => {
        if (err) throw err;
      });
    });

    // Finally add the interface definition and then write out the index.
    indexContents += '\nexport { IFluentIconsProps } from \'./IFluentIconsProps.types\''
    fs.writeFileSync(destPath + '/index.tsx', indexContents, (err) => {
      if (err) throw err;
    });
  });
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
  exports.declaration.name = componentName.name

  return tpl.ast`
		import * as React from "react";
		import { IFluentIconsProps } from '../IFluentIconsProps.types';

		const ${componentName}: JSX.Element = (iconProps: IFluentIconsProps) => {
		const { primaryFill, className } = iconProps;
		return ${jsx};
		}
		
		${exports}
	`
}
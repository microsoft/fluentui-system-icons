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
const EXTENSION = argv.extension;
const TARGET = argv.target;
const SELECTOR = argv.selector;

const SVG_EXTENSION = '.svg'
const XML_EXTENSION = '.xml'
const TSX_EXTENSION = '.tsx'

const iconNames = new Set();
const date = new Date();

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

function processFolder(srcPath, destPath) {
  fs.readdir(srcPath, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    var svgrOpts = {
      indexTemplate: indexTemplate,
      template: fileTemplate,
      expandProps: 'start',
      svgProps: { className: '{className}' },
      replaceAttrValues: { '#212121': '{primaryFill}' },
      typescript: true,
    }

    var indexContents = ''

    files.forEach(function (file, index) {
      var componentPath = destPath + '/components'
      var iconName = file.substr(0, file.length - 4)
      iconName = iconName.replace("ic_fluent_", "")
      var srcFile = path.join(srcPath, file)
      var destFilename = _.camelCase(iconName)
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase())
      var destFile = path.join(componentPath, destFilename + TSX_EXTENSION)
      var iconContent = fs.readFileSync(srcFile, { encoding: "utf8" })
      jsCode = svgr.default.sync(iconContent, svgrOpts, { filePath: file })
      // console.log(jsCode)
      indexContents += '\nexport { default as ' + destFilename + ' } from \'./components/' + destFilename + '\''
      fs.writeFileSync(destFile, jsCode, (err) => {
        if (err) throw err;
      });
    });

    indexContents += '\nexport { IFluentIconsProps } from \'./IFluentIconsProps.types\''
    fs.writeFileSync(destPath + '/index.tsx', indexContents, (err) => {
      if (err) throw err;
    });
  });
}

/*
    "convert": "npx @svgr/cli --index-template indexTemplate.js --template template.js --expand-props start --svg-props className={className} --typescript --replace-attr-values \"#212121={primaryFill}\" -d ./src/components ./intermediate/ && mv ./src/components/index.tsx ./src/",

*/

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
		import * as React from "react"
		import { JSX } from "react-jsx"

		import { IFluentIconsProps } from '../IFluentIconsProps.types'

		const ${componentName} = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>) : JSX.Element=> {
		const { primaryFill, className } = iconProps;
		return ${jsx};
		}
		
		${exports}
	`
}

function indexTemplate(filePaths) {
  console.log('wtf')
  const exportEntries = filePaths.map(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `${basename}` : basename
    return `export { default as ${exportName} } from './components/${basename}'`
  })
  return exportEntries.join('\n')
}
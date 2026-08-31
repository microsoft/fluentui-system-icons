// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");
const argv = require("yargs")
  .option('source', {
    type: 'array',
    desc: 'One or more json files'
  })
  .argv;
const childProcess = require("child_process");

const FILE_NAME_REGEX = /^ic_fluent_(\w+)_(\d+)_(\w+)/gm;

const SRC_PATHS = argv.source;
const DEST_PATH = argv.dest;
const ICON_CLASS_NAME = 'fluent_icons.dart';
const ICON_CLASS_HEADER = 
`// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import 'package:flutter/widgets.dart';

class FluentIcons {

  // This class is not meant to be instantiated or extended; this constructor
  // prevents instantiation and extension.
  // ignore: unused_element
  FluentIcons._();

  // Generated code: do not hand-edit.
  // See https://github.com/microsoft/fluentui-system-icons
  // BEGIN GENERATED

  static const _kFontPkg = 'fluentui_system_icons';
`;
const ICON_CLASS_FOOTER =
`
  // END GENERATED
}
`;

const writeErrorHandler = (err) => {
  if (err) throw err; 
};

if (!SRC_PATHS) {
  throw new Error("Icon JSON sources not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}

processJsonFiles(SRC_PATHS, DEST_PATH)

function processJsonFiles(srcPaths, destPath) {
  var rtlIcons = fs.readFileSync('rtl.txt').toString().split("\n");
  let iconClassFile = path.join(destPath, ICON_CLASS_NAME);
  fs.writeFileSync(iconClassFile, "", writeErrorHandler);
  fs.appendFileSync(iconClassFile, ICON_CLASS_HEADER, writeErrorHandler);

  srcPaths.forEach(function (srcPath) {
    writeCodeForJson(srcPath, iconClassFile, rtlIcons);
  })

  fs.appendFileSync(iconClassFile, ICON_CLASS_FOOTER, writeErrorHandler);
  childProcess.execSync(`flutter format ${iconClassFile}`);
}

function writeCodeForJson(srcPath, iconClassFile, rtlIcons) {
  let jsonData = require("./" + srcPath);
  const orderedJsonData = {};
  Object.keys(jsonData).sort().forEach(function(key) {
    orderedJsonData[key] = jsonData[key];
  });

  let fontName = srcPath.substring(srcPath.lastIndexOf('/') + 1).replace(".json", "");
  var code = 
`
  // ${fontName}
`;

  fs.appendFileSync(iconClassFile, code, writeErrorHandler);

  for (var fullName in orderedJsonData) {
    let match = FILE_NAME_REGEX.exec(fullName);
    let name = match[1];
    let size = match[2];
    let style = match[3];
    FILE_NAME_REGEX.lastIndex = 0;

    let codepoint = orderedJsonData[fullName];
    let identifier = `${name}_${size}_${style}`;
    let matchTextDirection = rtlIcons.includes(fullName) ? `, matchTextDirection: true` : "";

    code = 
`
  /// fluent icon named "${name}" in size ${size} and ${style} style.
  static const IconData ${identifier} = IconData(${codepoint}, fontFamily: '${fontName}', fontPackage: _kFontPkg${matchTextDirection},);
`;
    fs.appendFileSync(iconClassFile, code, writeErrorHandler);
  }
}

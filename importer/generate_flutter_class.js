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

const SRC_PATHS = argv.source;
const DEST_PATH = argv.dest;
const ICON_CLASS_NAME = 'fluent_icons.dart';
const ICON_CLASS_HEADER = 
`// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @dart = 2.8

import 'package:flutter/widgets.dart';

class FluentIcons {

  // This class is not meant to be instantiated or extended; this constructor
  // prevents instantiation and extension.
  // ignore: unused_element
  FluentIcons._();

  // Generated code: do not hand-edit.
  // See https://github.com/microsoft/fluentui-system-icons
  // BEGIN GENERATED
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
  let iconClassFile = path.join(destPath, ICON_CLASS_NAME);
  fs.writeFileSync(iconClassFile, "", writeErrorHandler);
  fs.appendFileSync(iconClassFile, ICON_CLASS_HEADER, writeErrorHandler);

  srcPaths.forEach(function (srcPath, index) {
    writeCodeForJson(srcPath, iconClassFile);
  })

  fs.appendFileSync(iconClassFile, ICON_CLASS_FOOTER, writeErrorHandler);
}

function writeCodeForJson(srcPath, iconClassFile) {
  let jsonData = require("./" + srcPath);
  let fontName = srcPath.substring(srcPath.lastIndexOf('/') + 1).replace(".json", "");
  var code = 
`
  // ${fontName}
`;

  fs.appendFileSync(iconClassFile, code, writeErrorHandler);

  for (var name in jsonData) {
    let codepoint = jsonData[name].replace("\\", "0x");
    let identifier = name.replace("ic_fluent_", "");
    // TODO: Regex to extract sie and style from identifier
    code = 
`
  /// fluent icon named "${identifier}" in size 24 and regular style.
  static const IconData ${identifier} = IconData(${codepoint}, fontFamily: '${fontName}');
`;
    fs.appendFileSync(iconClassFile, code, writeErrorHandler);
  }
}

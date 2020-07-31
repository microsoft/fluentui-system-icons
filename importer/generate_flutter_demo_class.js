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

const FILE_NAME_REGEX = /^ic_fluent_(\w+)_(\d+)_(\w+)/gm;

const SRC_PATHS = argv.source;
const DEST_PATH = argv.dest;
const ICON_CLASS_NAME = 'sample_icons.dart';
const ICON_CLASS_HEADER = 
`// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import 'package:fluentui_system_icons/fluent_icons.dart';

import 'fluentui_sample_icon.dart';

final icons = <FluentUISampleIcon>[ 

  // Generated code: do not hand-edit.
  // BEGIN GENERATED
`;
const ICON_CLASS_FOOTER =
`
  // END GENERATED
];
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

  srcPaths.forEach(function (srcPath) {
    writeCodeForJson(srcPath, iconClassFile);
  })

  fs.appendFileSync(iconClassFile, ICON_CLASS_FOOTER, writeErrorHandler);
}

function writeCodeForJson(srcPath, iconClassFile) {
  let jsonData = require("./" + srcPath);

  for (var fullName in jsonData) {
    let match = FILE_NAME_REGEX.exec(fullName);
    let name = match[1];
    let size = match[2];
    let style = match[3];
    FILE_NAME_REGEX.lastIndex = 0;

    let identifier = `${name}_${size}_${style}`;

    var code = 
`
  FluentUISampleIcon(FluentIcons.${identifier}, '${identifier}', ${size}),
`;
    fs.appendFileSync(iconClassFile, code, writeErrorHandler);
  }
}

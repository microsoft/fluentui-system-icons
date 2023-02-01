// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).boolean("keepdirs").default("keepdirs", false).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const EXTENSION = argv.extension;
const TARGET = argv.target;
const SELECTOR = argv.selector;
const KEEP_DIRS = argv.keepdirs;
const ICON_OUTLINE_STYLE = '_regular'
const ICON_FILLED_STYLE = '_filled'
const ICON_LIGHT_STYLE = '_light'
const BRAND_MONO_STYLE = '_mono'
const BRAND_COLOR_STYLE = '_color'
const SELECTOR_SUFFIX = '_selector'
const REACT_SUFFIX = 'Icon'

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
if (!EXTENSION) {
  throw new Error("Desired icon extension not specified by --extension");
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

processFolder(SRC_PATH, DEST_PATH, 0)

function processFolder(srcPath, destPath, folderDepth) {
  fs.readdir(srcPath, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach(function (file, index) {
      var srcFile = path.join(srcPath, file);
  
      fs.stat(srcFile, function (error, stat) {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }
  
        if (stat.isDirectory()) {
          const folderName = srcFile.substring(srcFile.lastIndexOf('/') + 1)
          let locPath = destPath
          if (KEEP_DIRS) {
            if (folderName !== EXTENSION.toUpperCase()) {
              locPath = path.join(locPath, folderName).replace(/ /g, "")
            }
          } 
          else {
            if (folderDepth == 1 && folderName !== EXTENSION.toUpperCase()) {
              locPath = path.join(locPath, path.relative(SRC_PATH, folderName));
            }
          }


          processFolder(srcFile, locPath, folderDepth + 1)
          return;
        } else if (file.startsWith('.')) {
          // Skip invisible files
          return;
        } else if (file.startsWith('_')) {
          // Skip invalid file names
          return;
        } else if (!file.endsWith(ICON_OUTLINE_STYLE + "." + EXTENSION)
          && !file.endsWith(ICON_FILLED_STYLE + "." + EXTENSION)
          && !(EXTENSION === "pdf" && file.endsWith(ICON_LIGHT_STYLE + "." + EXTENSION))
          && !file.endsWith(BRAND_MONO_STYLE + "." + EXTENSION)
          && !file.endsWith(BRAND_COLOR_STYLE + "." + EXTENSION)) {
          // Only include icons in the desired configs
          return;
        }
        
        // Apply 'fluent_' prefix
        if (file.indexOf("_fluent_") < 0) {
          file = file.replace("ic_", "ic_fluent_");
        }
        
        var destFile = path.join(destPath, file);
        var destPathAbs = path.join(process.cwd(), destPath);
        if (!fs.existsSync(destPathAbs)) {
          fs.mkdirSync(destPathAbs, { recursive: true })
        }
        console.log("Copying " + srcFile + " to " + destFile);
        fs.copyFileSync(srcFile, destFile);
        // Generate selector if both filled/regular styles are available
        if (SELECTOR && file.endsWith(SVG_EXTENSION)) {
          var index = file.lastIndexOf(ICON_OUTLINE_STYLE);
          if (index == -1) {
            index = file.lastIndexOf(ICON_FILLED_STYLE);
          }
          if (index != -1) {
            var name = file.substring(0, index)
            if (!iconNames.has(name)) {
              iconNames.add(name);
            } else {
              generateSelector(destPath, name)
            }
            if (TARGET === 'react') {
              generateReact(destPath, file.substring(0, file.lastIndexOf(SVG_EXTENSION)), srcFile)
            }
          }
        }
      });
    });
  });
}

function generateSelector(destPath, iconName) {
  var selectorFile = path.join(destPath, iconName + SELECTOR_SUFFIX + XML_EXTENSION);
  var code = 
`<?xml version="1.0" encoding="utf-8"?>
<!--
  ~ Copyright (c) ${date.getFullYear()}.
  ~ Microsoft Corporation. All rights reserved.
  -->

<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@drawable/${iconName}${ICON_FILLED_STYLE}" android:state_activated="true"/>
    <item android:drawable="@drawable/${iconName}${ICON_FILLED_STYLE}" android:state_checked="true"/>
    <item android:drawable="@drawable/${iconName}${ICON_FILLED_STYLE}" android:state_selected="true"/>
    <item android:drawable="@drawable/${iconName}${ICON_OUTLINE_STYLE}"/>
</selector>
`;
  fs.writeFile(selectorFile, code, (err) => {
    if (err) throw err; 
  });
}

function generateReact(destPath, iconName, srcFile) {
  iconName = iconName.replace("ic_fluent_", "")
  iconName = _.camelCase(iconName)
  iconName = iconName.replace(iconName.substring(0, 1), iconName.substring(0, 1).toUpperCase())
  var iconContent = fs.readFileSync(srcFile, { encoding: "utf8"})
  var selectorFile = path.join(destPath, iconName + REACT_SUFFIX + TSX_EXTENSION);
  var code = 
`import * as React from 'react';
  const ${iconName + REACT_SUFFIX} = () => {
    return(
    ${iconContent}
  )};
export default ${iconName + REACT_SUFFIX};
`;
  fs.writeFile(selectorFile, code, (err) => {
    if (err) throw err; 
  });
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const EXTENSION = argv.extension;

const ICON_OUTLINE_STYLE = '_regular'
const ICON_FILLED_STYLE = '_filled'
const ICON_LIGHT_STYLE = '_light'
const BRAND_MONO_STYLE = '_mono'
const BRAND_COLOR_STYLE = '_color'

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
          if (folderName !== EXTENSION.toUpperCase()) {
            locPath = path.join(locPath, folderName).replace(/ /g, "")
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

        // Remove 'ic_fluent_' prefix
        if (file.indexOf("ic_fluent_") >= 0) {
          file = file.replace("ic_fluent_", "");
        }
        var destFile = path.join(destPath, file);
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath)
        }
        fs.copyFileSync(srcFile, destFile);
      });
    });
  });
}
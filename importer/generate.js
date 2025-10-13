// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require("fs");
const path = require("path");
const process = require("process");
const _ = require("lodash");
const yargs = require('yargs');

const parseArgs = (args=process.argv.slice(2)) => {
  const argv = yargs(args)
    .usage('Usage: $0 --source <src> --dest <dest> --extension <ext> [options]')
    .option('source', {
      type: 'string',
      describe: 'Icon source folder',
      demandOption: true,
    })
    .option('dest', {
      type: 'string',
      describe: 'Output destination folder',
      demandOption: true,
    })
    .option('extension', {
      type: 'string',
      describe: 'Desired icon extension (e.g. svg, xml, pdf, tsx)',
      demandOption: true,
    })
    .option('target', {
      type: 'string',
      describe: 'Target platform (react|android|ios|flutter)',
      default: 'android',
    })
    .option('selector', {
      type: 'boolean',
      describe: 'Generate selector files when applicable',
      default: false,
    })
    .option('keepdirs', {
      type: 'boolean',
      describe: 'Keep original directories in output',
      default: false,
    })
    .help()
    .wrap(Math.min(120, process.stdout.columns || 120))
    .argv;

  /**
   * @typedef {'react'|'android'|'ios'|'flutter'} TargetType
   * @typedef {'svg'|'xml'|'pdf'|'tsx'} ExtensionType
   *
   * @typedef {{
   *   SRC_PATH: string,
   *   DEST_PATH: string,
   *   EXTENSION: ExtensionType,
   *   TARGET: TargetType,
   *   SELECTOR: boolean,
   *   KEEP_DIRS: boolean
   * }} ParseResult
   */

  return /** @type {ParseResult} */ ({
    SRC_PATH: argv.source,
    DEST_PATH: argv.dest,
    EXTENSION: /** @type {ExtensionType} */ (argv.extension),
    TARGET: /** @type {TargetType} */ (argv.target),
    SELECTOR: Boolean(argv.selector),
    KEEP_DIRS: Boolean(argv.keepdirs),
  });
};

const { SRC_PATH, DEST_PATH, EXTENSION, TARGET, SELECTOR, KEEP_DIRS } = parseArgs();
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

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

processFolder(SRC_PATH, DEST_PATH, 0)

/**
 * Recursively processes a source directory of icon assets and produces copied and/or generated outputs in a destination directory.
 *
 * This function traverses srcPath and for each file/directory:
 * - Recurses into subdirectories.
 * - Skips hidden files and names that start with an underscore.
 * - Filters files to include only those that match the configured icon styles and the desired EXTENSION.
 * - Ensures filenames use the "ic_fluent_" prefix (adds it when missing).
 * - Creates destination directories as needed and copies matching files from source to destination.
 *
 * Notes and side effects:
 * - Mutates module-level state (e.g., the iconNames Set) to detect paired icon variants.
 * - Destination directory layout depends on KEEP_DIRS and the folderDepth argument (folderDepth == 0 for the initial call).
 *
 * @param {string} srcPath - Path to the source folder to traverse (absolute or relative).
 * @param {string} destPath - Path to the destination folder where files and generated artifacts will be written.
 * @param {number} folderDepth - Current recursion depth (0 for the top-level call). Influences destination directory creation when KEEP_DIRS is false.
 * @returns {void} - Performs file system side effects; does not return a meaningful value.
 */
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
          const folderName = path.basename(srcFile)
          let locPath = destPath
          if (KEEP_DIRS) {
            if (folderName !== EXTENSION.toUpperCase()) {
              locPath = path.join(locPath, folderName).replace(/ /g, "")
            }
          } else {
            if (folderDepth == 1 && folderName !== EXTENSION.toUpperCase()) {
              locPath = path.join(locPath, folderName)
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
          && !file.endsWith(ICON_LIGHT_STYLE + "." + EXTENSION)
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
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath)
        }
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

/**
 * Generate the selector XML file for the specified icon.
 * @param {string} destPath - The destination path for the selector file.
 * @param {string} iconName - The name of the icon.
 */
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

/**
 * Generate the React component file for the specified icon.
 * @param {string} destPath - The destination path for the React component file.
 * @param {string} iconName - The name of the icon.
 * @param {string} srcFile - The source file of the icon.
 */
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

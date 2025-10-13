// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require("node:fs/promises");
const path = require("node:path");
const process = require("node:process");

const yargs = require("yargs");

const parseArgs = (args = process.argv.slice(2)) => {
  const argv = yargs(args)
    .usage('Usage: $0 --source <src> --dest <dest>')
    .option('source', {
      type: 'string',
      describe: 'Icon source folder (containing metadata.json files)',
      demandOption: true,
    })
    .option('dest', {
      type: 'string',
      describe: 'Output destination file path (e.g., rtl.json)',
      demandOption: true,
    })
    .help()
    .wrap(Math.min(120, process.stdout.columns || 120))
    .argv;

  /**
   * @typedef {{
   *   SRC_PATH: string,
   *   DEST_FILE: string
   * }} ParseResult
   */

  return /** @type {ParseResult} */ ({
    SRC_PATH: argv.source,
    DEST_FILE: argv.dest,
  });
};

const { SRC_PATH, DEST_FILE } = parseArgs();

const destFolder = path.dirname(DEST_FILE);
fs.mkdir(destFolder, { recursive: true });

/**
 * @type {Record<string, string>}
 */
const result = {};

/**
 * @typedef {Object} Metadata
 * @property {string} name - The name of the icon
 * @property {number[]} size - The sizes of the icon (16,20,24,28,32,48,56,64)
 * @property {string[]} style - The style of the icon (Filled, Regular, Light)
 * @property {string} keyword - Keywords associated with the icon
 * @property {string} description - Description of the icon
 * @property {string} metaphor - Metaphor associated with the icon
 * @property {'mirror' | 'unique'} directionType - Direction type of the icon
 */

/**
 *
 * @param {string} srcPath
 */
async function processFolder(srcPath) {
    const files = await fs.readdir(srcPath);
    for (const file of files) {
        const srcFile = path.join(srcPath, file);
        const stat = await fs.stat(srcFile);

        if (stat.isDirectory()) {
            await processFolder(srcFile);
        } else if (file.startsWith('.') || file.startsWith('_')) {
            // Skip invisible and invalid files
            continue;
        } else if (file === 'metadata.json') {
            // If it's a metadata file, read and parse its content
            const data = await fs.readFile(srcFile, 'utf8');
            try {
                /** @type {Metadata} */
                const metadata = JSON.parse(data);
                const iconSize = metadata.size;
                let iconName = metadata.name;
                const directionType = metadata.directionType;
                if (!directionType) {  //ignore files with no directionType
                    continue;
                }
                iconName = iconName.replace(/\s+/g, '') //remove space
                iconName = iconName.replace(iconName.substring(0, 1), iconName.substring(0, 1).toUpperCase()) // capitalize the first letter

                for (const size of iconSize) { //iterate through the size file and create entries for each icon file
                    let tempName = iconName + size + "Filled";
                    result[tempName] = directionType;

                    tempName = iconName + size + "Regular";
                    result[tempName] = directionType;
                }
                let tempName = iconName + "Filled";
                result[tempName] = directionType;

                tempName = iconName + "Regular";
                result[tempName] = directionType;
            } catch (error) {
                console.error('Error parsing JSON in metadata file:', error);
            }
        }
    }
}

processFolder(SRC_PATH)
    .then(() => {
        const compiledJson = JSON.stringify(result, null, 2);
        return fs.writeFile(DEST_FILE, compiledJson, 'utf8');
    })
    .then(() => {
        console.log('JSON file has been written successfully.');
    })
    .catch(err => {
        console.error('Error processing folder:', err);
    });

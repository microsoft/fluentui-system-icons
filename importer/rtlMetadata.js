// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const argv = require("yargs").boolean("selector").default("selector", false).boolean("keepdirs").default("keepdirs", false).argv;
const _ = require("lodash");

const SRC_PATH = argv.source;
const DEST_FILE = argv.dest;

if (!SRC_PATH) {
    throw new Error("Icon source folder not specified by --source");
}
if (!DEST_FILE) {
  throw new Error("Output destination file not specified by --dest");
}

const destFolder = path.dirname(DEST_FILE);
fs.mkdir(destFolder, { recursive: true });

const result = {};
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
                // Parse the json content
                let metadata = JSON.parse(data);
                let iconSize = metadata.size;  
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

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require("fs");
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
if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
}

processFolder(SRC_PATH);
const result ={}
function processFolder(srcPath) {
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
            processFolder(srcFile)
            return;
          } else if (file.startsWith('.')) {
            // Skip invisible files
            return;
          } else if (file.startsWith('_')) {
            // Skip invalid file names
            return;
          } else if (file === 'metadata.json') {
            // If it's a metadata file, read and parse its content
            fs.readFile(srcFile, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading metadata file:', err);
                    return;
                }
                try {
                    // Parse the json content
                    let metadata = JSON.parse(data);
                    let iconSize = metadata.size;  
                    let iconName = metadata.name;
                    const directionType = metadata.directionType;
                    if (!directionType) {  //ignore files with no directionType
                        return;
                    }
                    iconName = iconName.replace(/\s+/g, '') //remove space
                    iconName = iconName.replace(iconName.substring(0, 1), iconName.substring(0, 1).toUpperCase()) // capitalize the first letter

                    iconSize.forEach((size, i) => { //iterate through the size file and create entries for each icon file
                        let tempName = iconName;
                    
                        tempName = tempName + size + "Filled";
                        result[tempName] = directionType;

                        tempName = iconName;
                        tempName = tempName + size + "Regular";
                        result[tempName] = directionType;

                    })
                    let tempName = iconName
                    tempName = tempName + "Filled";
                    result[tempName] = directionType;
                    
                    tempName = iconName;
                    tempName = tempName + "Regular";
                    result[tempName] = directionType;
                    
                    convertToJson(result)
                    
                } catch (error) {
                    console.error('Error parsing JSON in metadata file:', error);
                }
                })
            }
        }) 
       })
    })
}

function convertToJson(result) {
    const compiledJson = JSON.stringify(result, null, 2);
    fs.writeFile(DEST_FILE, compiledJson, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON fIle: ', err)
        }
    })
}

const fs = require('fs');
const path = require('path');

const targetFolder = `${__dirname}/../assets`;

const doesntHaveMetadataFile = (directory) => {
  const files = fs.readdirSync(directory);
  const metadataFiles = files.filter((file) => file === 'metadata.json');
  return metadataFiles.length === 0;
};

const findFolders = (folderPath) => {
  try {
    const directories = fs.readdirSync(folderPath, { withFileTypes: true });

    const noMetadataFolders = directories
      .filter((dirent) => dirent.isDirectory() && doesntHaveMetadataFile(path.join(folderPath, dirent.name)))
      .map((dirent) => dirent.name)
      .join(',');

    console.log(`Folders without a 'metadata.json' file: ${noMetadataFolders}`);
  } catch (error) {
    console.error('Error while reading the directory:', error);
  }
};

findFolders(targetFolder);

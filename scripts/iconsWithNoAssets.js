const fs = require('fs');
const path = require('path');

function checkEmptyFolders(directory) {
    // Get the absolute path of the directory
    const dirPath = path.resolve(__dirname, directory);

    // Read the contents of the directory
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dirPath}: ${err}`);
            return;
        }

        // Filter out subdirectories and .DS_Store files
        const subdirs = files.filter(file => {
            return fs.statSync(path.join(dirPath, file)).isDirectory() && file !== '.DS_Store';
        });

        // Check each subdirectory for emptiness
        subdirs.forEach(subdir => {
            const subdirPath = path.join(dirPath, subdir);
            fs.readdir(subdirPath, (err, files) => {
							files = files.filter(file => file !== '.DS_Store')
                if (err) {
                    console.error(`Error reading directory ${subdirPath}: ${err}`);
                    return;
                }

                // If the directory is empty, print its name
                if (files.length === 0) {
                    console.log(`Empty folder found: ${subdir}`);
                }
            });
        });
    });
}

// Example usage: check the "test" directory relative to the location of this script
checkEmptyFolders('../assets/');

const fs = require('fs');
const path = require('path');

function keepMetadataFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
            keepMetadataFiles(filePath);
            if (fs.readdirSync(filePath).length === 0) {
                fs.rmdirSync(filePath);
            }
        } else {
            if (file !== 'metadata.json') {
                fs.unlinkSync(filePath);
            }
        }
    });
}

// Specify the directory path here
const directoryPath = '/Users/willchavez/Documents/GitHub/fluentui-system-icons/assets';

keepMetadataFiles(directoryPath);

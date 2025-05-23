const nodePath = require('path');
module.exports = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            mergePaths: false        
          },
        },
  
      },
      {
        name: 'prefixIds',
        params: {
          prefix: (_, { path }) => {
            // Generate a unique prefix based on file path or name
            const filePath = path.filePath || path;
            return nodePath.basename(filePath, '.svg');
          },
        },
      },
    ],
};
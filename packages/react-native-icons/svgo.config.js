module.exports = {
    plugins: 
    [
      'removeXMLNS',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            mergePaths: false  
          },
        },
      },
    ],
};
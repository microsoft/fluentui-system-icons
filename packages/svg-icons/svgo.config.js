module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          mergePaths: false,
          cleanupIDs: false
        },
      },
    },
  ],
};

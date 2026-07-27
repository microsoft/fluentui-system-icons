module.exports = {
  plugins: [
    'removeXMLNS',
    {
      name: 'preset-default',
      params: {
        overrides: {
          mergePaths: false,
        },
      },
    },
  ],
};

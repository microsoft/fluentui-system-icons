// @ts-check
const { transformSync } = require('esbuild');

/** @type {import('webpack').LoaderDefinitionFunction} */
module.exports = function (source) {
  const result = transformSync(source, {
    loader: this.resourcePath.endsWith('.tsx') ? 'tsx' : 'ts',
    target: 'es2020',
  });
  return result.code;
};

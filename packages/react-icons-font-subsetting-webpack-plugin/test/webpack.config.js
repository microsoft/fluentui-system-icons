// @ts-check
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { default: FluentUIReactIconsFontSubsettingPlugin } = require('../lib/');

// Per-entry subset font size thresholds.
// Full (un-subset) fonts are 100 KB+, so even the higher limit validates that subsetting actually happened.
// Each entry is compiled separately (multi-compiler) so fonts are independently subset
//  — this gives accurate per-entry size measurement in the build output.
const entries = {
  index: { src: './src/index.js', threshold: 2 * 1_024 }, // 2 KB
  atoms: { src: './src/atoms.js', threshold: 2 * 1_024 }, // 2 KB
  // atomsImportStar uses `import *` and references more icon variants, producing a larger (but still properly subset) font.
  atomsImportStar: { src: './src/atoms-import-star.js', threshold: 3 * 1_024 }, // 3.0 KB
};

const isDevServer = process.env.WEBPACK_SERVE === 'true';

console.log(`Running webpack in ${isDevServer ? 'development' : 'production'} mode`);

/**
 * @param {string} name
 * @param {{ src: string, threshold: number }} entry
 * @returns {import('webpack').Configuration}
 */
function createConfig(name, entry) {
  return {
    name,
    context: __dirname,
    // FluentUIReactIconsFontSubsettingPlugin requires `optimization.usedExports: true` to determine
    // which icon exports are actually used.
    // This is enabled by default in production mode.
    // In development mode, webpack doesn't track used exports, so the plugin skips subsetting.
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(ttf|woff2?)$/,
          type: 'asset',
          generator: {
            filename: `[name]-[contenthash][ext]`,
            dataUrl: {},
          },
        },
      ],
    },
    entry: { [name]: entry.src },
    output: {
      path: resolve(__dirname, 'dist', name),
      filename: '[name].js',
    },
    resolve: {
      conditionNames: ['fluentIconFont', 'import'],
    },
    plugins: [
      ...(isDevServer
        ? [
            new HtmlWebpackPlugin({
              title: `FluentUIReactIconsFontSubsettingPlugin Demo - ${name}`,
            }),
          ]
        : []),
      new FluentUIReactIconsFontSubsettingPlugin(),
      {
        apply(compiler) {
          compiler.hooks.afterEmit.tap('test-subsetting', (compilation) => {
            for (const [assetName, source] of Object.entries(compilation.assets)) {
              if (/\.(ttf|woff2?)$/.test(assetName) && source.size() > entry.threshold) {
                throw new Error(
                  `[${name}] Asset "${assetName}" (${source.size()} bytes) exceeds the ` +
                    `${entry.threshold}-byte threshold — font may not have been properly subset.`,
                );
              }
            }
          });
        },
      },
    ],
  };
}

const testConfigs = Object.entries(entries).map(([name, entry]) => createConfig(name, entry));

module.exports = testConfigs;

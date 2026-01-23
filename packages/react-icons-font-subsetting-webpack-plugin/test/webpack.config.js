// @ts-check
const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const {default: FluentUIReactIconsFontSubsettingPlugin} = require('../lib/');

const FONT_THRESHOLD_SIZE = 2 * 1_024; // 2kb

const isDevServer = process.env.WEBPACK_SERVE === 'true';

console.log(`Running webpack in ${isDevServer ? 'development' : 'production'} mode`);

/** @type {import('webpack').Configuration} */
module.exports = {
    context: __dirname,
    // FluentUIReactIconsFontSubsettingPlugin requires `optimization.usedExports: true` to determine
    // which icon exports are actually used. This is enabled by default in production mode.
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
            }
        ]
    },
    output: {
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        conditionNames: ['fluentIconFont', 'import']
    },
    plugins: [
        ...(isDevServer ? [new HtmlWebpackPlugin({
            title: 'FluentUIReactIconsFontSubsettingPlugin Demo'
        })] : []),
        new FluentUIReactIconsFontSubsettingPlugin(),
        {
            apply(compiler) {
                compiler.hooks.afterEmit.tap('test-subsetting', (compilation) => {
                    for (const [assetName, source] of Object.entries(compilation.assets)) {
                        if (/\.(ttf|woff2?)$/.test(assetName) && source.size() > FONT_THRESHOLD_SIZE) {
                            throw new Error(`Asset "${assetName}" does not appear to have been properly subset.`)
                        }
                    }
                })
            }
        }
    ],
};
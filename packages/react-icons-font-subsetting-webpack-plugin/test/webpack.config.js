const {default: FluentUIReactIconsFontSubsettingPlugin} = require('../lib/');
const {resolve} = require('path');

const FONT_THRESHOLD_SIZE = 2 * 1_024; // 2kb

module.exports = {
    context: __dirname,
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
        conditionNames: ['fluentIcontFont', 'import']
    },
    plugins: [
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
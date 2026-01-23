# @fluentui/react-icons-font-subsetting-webpack-plugin

This package includes a plugin for `webpack@>=5.0.0` to subset the icon font files used by `@fluentui/react-icons` when using the `"fluentIconFont"` condition in `resolve.conditionNames`.

If `optimization.usedExports` is enabled (as it is by default in webpack `production` mode), this plugin will subset the font files to only include the glyphs actually used by your build.

## Usage
```js
// webpack.config.js
const {default: FluentUIReactIconsFontSubsettingPlugin} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');

module.exports = {
    module: {
        rules: [
            // Treat the font files as webpack assets
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset',
            }
        ]
    },
    resolve: {
        // Include 'fluentIconFont' to use the font implementation of the Fluent icons
        conditionNames: ['fluentIconFont', 'import']
    },
    plugins: [
        // Include this plugin
        new FluentUIReactIconsFontSubsettingPlugin(),
    ],
};
```
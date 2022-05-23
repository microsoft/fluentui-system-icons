const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
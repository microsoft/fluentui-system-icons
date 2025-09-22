// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            // Force React and React-DOM to use the versions installed in icon-app (React 19)
            // This prevents version conflicts with react-icons package which uses React 17
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            // Ensure React/jsx-runtime uses the correct version
            'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime'),
            'react/jsx-dev-runtime': path.resolve(__dirname, 'node_modules/react/jsx-dev-runtime')
        }
    },
    mode: 'development',
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
        new HtmlWebpackPlugin({
            title: 'Fluent React Icons Demo'
        })
    ],
};
// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset',
      },
      // `@fluentui/react-icons` ships its styling as plain `.css`, and this app's own layout
      // is plain `.css` too. `style-loader` is fine for a dev demo; production apps should
      // prefer `MiniCssExtractPlugin` — see
      // `packages/react-icons/docs/bundle-size-rendering-approaches-comparison.md`.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fluent React Icons Demo',
    }),
  ],
};

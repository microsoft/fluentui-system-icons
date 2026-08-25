// @ts-check
const { CssExtractRspackPlugin } = require('@rspack/core');

const { makeConfigs } = require('./make-configs');

// rspack is incompatible with mini-css-extract-plugin and ships CssExtractRspackPlugin as the drop-in.
// HtmlPlugin is omitted because the dev-server demo is webpack-only.
module.exports = makeConfigs({ name: 'rspack', CssExtractPlugin: CssExtractRspackPlugin, HtmlPlugin: null });

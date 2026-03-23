// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { replaceInFiles } = require('../../importer/replace-in-files');
const argv = require('yargs').argv;

replaceInFiles({
  search: /\sfill="(none|#212121)"/g,
  replacement: '',
  targets: [argv.path],
  recursive: true,
  include: '*.svg',
  quiet: true,
});

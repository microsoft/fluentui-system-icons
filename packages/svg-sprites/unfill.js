// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { parseArgs } = require('node:util');

const { replaceInFiles } = require('../../importer/replace-in-files');

const { values } = parseArgs({ options: { path: { type: 'string' } } });

replaceInFiles({
  search: /\sfill="(none|#212121)"/g,
  replacement: '',
  paths: [values.path],
  recursive: true,
  include: '*.svg',
  quiet: true,
});

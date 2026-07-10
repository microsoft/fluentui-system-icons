// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { replaceInFiles } = require('../../importer/replace-in-files');

const { parseArgs } = require('node:util');

const { values } = parseArgs({ options: { path: { type: 'string' } } });

replaceInFiles({
  search: /\sfill="(none|#212121)"/g,
  replacement: '',
  paths: [values.path],
  recursive: true,
  include: '*.svg',
  // Color icons rely on their fills (incl. #212121 base layers) for correct
  // rendering and gradient fallbacks, so they are excluded from unfill.
  exclude: '*_color.svg',
  quiet: true,
});

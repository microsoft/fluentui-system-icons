// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

// Shared SVGO optimization config used by both @fluentui/svg-icons and
// @fluentui/react-icons so that raw-SVG processing is identical across packages.
//
// Keeping a single source of truth lets @fluentui/svg-icons serve as the
// canonical optimized-SVG base that @fluentui/react-icons (and future consumers)
// can build from. Precision is supplied per-package via the svgo CLI
// (`--precision=2`); recursion/folder selection is also a CLI concern.
//
// Notes:
// - `removeViewBox: false` keeps the viewBox so icons remain scalable.
// - `mergePaths: false` preserves per-layer paths (required by color icons whose
//   layers carry distinct fills/gradients).
// - `prefixIds` namespaces ids (e.g. gradient ids) with the file's basename so
//   color icons rendered together on a single page never collide.
const nodePath = require('node:path');

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          mergePaths: false,
        },
      },
    },
    {
      name: 'prefixIds',
      params: {
        prefix: (_, { path }) => {
          // Generate a unique prefix based on file path or name
          const filePath = path.filePath || path;
          return nodePath.basename(filePath, '.svg');
        },
      },
    },
  ],
};

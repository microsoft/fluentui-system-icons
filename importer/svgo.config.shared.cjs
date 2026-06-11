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
// - `prefixIds` namespaces ids (e.g. gradient ids) with the canonical
//   `ic_fluent_` icon prefix so color icons rendered together on a single page
//   never collide, and so the ids stay identical across svg-icons and react-icons.
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
          // Namespace ids with the canonical `ic_fluent_` icon prefix so generated
          // ids are stable regardless of whether the source filename carries it
          // (svg-icons strips the prefix from filenames; react-icons keeps it).
          // This keeps the rendered ids identical across both packages.
          const filePath = path.filePath || path;
          const base = nodePath.basename(filePath, '.svg');
          return base.startsWith('ic_fluent_') ? base : `ic_fluent_${base}`;
        },
      },
    },
  ],
};

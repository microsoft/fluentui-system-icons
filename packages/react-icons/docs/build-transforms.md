# Build-Time Import Transforms

You can keep root-level barrel imports and leverage build-time transforms to automatically rewrite them to optimized atomic imports — no source code changes required.

These transforms rewrite imports from:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons';
```

To the optimized atomic import for your chosen target:

```tsx
// SVG (standard)
import { AccessTime24Filled } from '@fluentui/react-icons/svg/access-time';

// SVG sprites
import { AccessTime24Filled } from '@fluentui/react-icons/svg-sprite/access-time';

// Font icons
import { AccessTime24Filled } from '@fluentui/react-icons/fonts/access-time';

// Base API (SVG)
import { AccessTime24Filled } from '@fluentui/react-icons/base/svg/access-time';

// Base API (SVG sprites)
import { AccessTime24Filled } from '@fluentui/react-icons/base/svg-sprite/access-time';

// Base API (fonts)
import { AccessTime24Filled } from '@fluentui/react-icons/base/fonts/access-time';
```

The examples below use `svg` as the target path. Replace it with the appropriate path for your setup from the list above.

## Babel

Add [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) with the following setup.

Copy the following helper into your project (e.g. as `fluent-icons-transform.js`):

```js
// @filename fluent-icons-transform.js

/**
 * Resolves a @fluentui/react-icons import name to its atomic module path.
 * @param {string} importName - The named export being imported.
 * @param {string} [target='svg'] - The target subpath (e.g. 'svg', 'svg-sprite', 'fonts',
 *   'base/svg', 'base/svg-sprite', 'base/fonts').
 * @returns {string} The resolved module path.
 */
function resolveFluentIconImport(importName, target = 'svg') {
  if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
    return '@fluentui/react-icons/providers';
  }

  const match = importName.match(/^(.+?)(\d+)?(Regular|Filled|Light|Color)$/);
  if (!match) {
    return '@fluentui/react-icons/utils';
  }

  return `@fluentui/react-icons/${target}/${kebabCase(match[1])}`;
}

function kebabCase(str) {
  return str.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();
}

module.exports = { resolveFluentIconImport };
```

Then use it in your Babel config:

```js
// @filename .babelrc.js
const { resolveFluentIconImport } = require('./fluent-icons-transform');

module.exports = {
  presets: [
    // ... your preset configuration
  ],
  plugins: [
    [
      'transform-imports',
      {
        '@fluentui/react-icons': {
          // Change the second argument to match your target:
          //   'svg' | 'svg-sprite' | 'fonts' | 'base/svg' | 'base/svg-sprite' | 'base/fonts'
          transform: (importName) => resolveFluentIconImport(importName, 'svg'),
          preventFullImport: false,
          skipDefaultConversion: true,
        },
      },
    ],
  ],
};
```

## SWC

Add [@swc/plugin-transform-imports](https://www.npmjs.com/package/@swc/plugin-transform-imports) with the following setup.

Replace every `svg` segment in the target paths below with your chosen target (`svg`, `svg-sprite`, `fonts`, `base/svg`, `base/svg-sprite`, or `base/fonts`):

```jsonc
// @filename .swcrc
{
  "jsc": {
    "experimental": {
      "plugins": [
        [
          "@swc/plugin-transform-imports",
          {
            "@fluentui/react-icons": {
              "transform": [
                // Transform provider imports to /providers
                ["^(useIconContext|IconDirectionContextProvider)$", "@fluentui/react-icons/providers"],
                // Transform icon imports to /{target}/{icon-name}
                // (.+?) lazily captures the icon base name (may contain digits,
                // e.g. "Space3D", "Rotate315Right"), (\d+)? greedily strips any
                // trailing all-digit segment (size suffixes like 16/20/24, but
                // also level indicators like Battery0) — this mirrors the
                // normalizeBaseName logic used by the generation pipeline.
                // {{ kebabCase }} on group 1 mirrors lodash.kebabCase.
                [
                  "(.+?)(\\d+)?(Regular|Filled|Light|Color)$",
                  "@fluentui/react-icons/svg/{{ kebabCase memberMatches.[1] }}",
                ],
                // Fallback: all other exports are utilities
                [".*", "@fluentui/react-icons/utils"],
              ],
              "preventFullImport": false,
              "skipDefaultConversion": true,
              "handleDefaultImport": false,
              "handleNamespaceImport": false,
            },
          },
        ],
      ],
    },
  },
}
```

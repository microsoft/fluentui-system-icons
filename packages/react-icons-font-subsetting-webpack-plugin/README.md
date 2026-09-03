# @fluentui/react-icons-font-subsetting-webpack-plugin

This package includes a plugin for `webpack@>=5.0.0` and `@rspack/core@>=2.0.0` to subset the icon font files used by `@fluentui/react-icons` when using font-based icon implementations.

If `optimization.usedExports` is enabled (as it is by default in `production` mode), this plugin will subset the font files to only include the glyphs actually used by your build.

## Supported Import Patterns

The plugin supports the following import patterns from `@fluentui/react-icons`:

### 1. Using the `fluentIconFont` condition

```js
// Uses font implementation via resolve.conditionNames
import { AddRegular, DeleteFilled } from '@fluentui/react-icons';
```

### 2. Using atomic imports from `@fluentui/react-icons/fonts/*`

```js
// Direct atomic imports - no conditionNames required
import { AddRegular, AddFilled } from '@fluentui/react-icons/fonts/add';
import { DeleteRegular } from '@fluentui/react-icons/fonts/delete';
```

Atomic imports provide better tree-shaking and faster build times for applications using a small number of icons.

### 3. Using headless atomic imports from `@fluentui/react-icons/headless/fonts/*`

```js
// Headless font atoms — no Griffel runtime.
// You MUST also import the headless font CSS so the @font-face declarations and
// font files enter the module graph (the headless atoms don't import them):
import '@fluentui/react-icons/headless/fonts/styles.css';
import { AddRegular, AddFilled } from '@fluentui/react-icons/headless/fonts/add';
```

The plugin subsets the same shared font files used by the standard API, based on the headless icons you actually use. Because the font files arrive via `styles.css`, your config needs a CSS loader (e.g. `css-loader`) so the `url(...)` references resolve into webpack assets.

> **Tip 💡:** You don't have to write atomic headless imports by hand. Pair this plugin with [`@fluentui/react-icons-atomic-webpack-loader`](../react-icons-atomic-webpack-loader) using `{ headless: true, iconVariant: 'fonts' }` — it rewrites plain barrel imports (`import { AddFilled } from '@fluentui/react-icons'`) into headless font atoms, which this plugin then subsets. You still import `@fluentui/react-icons/headless/fonts/styles.css` yourself.

## Usage

### With `fluentIconFont` condition

```js
// webpack.config.js
const {
  default: FluentUIReactIconsFontSubsettingPlugin,
} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // Treat the font files as webpack assets
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    // Include 'fluentIconFont' to use the font implementation of the Fluent icons
    conditionNames: ['fluentIconFont', 'import'],
  },
  plugins: [
    // Include this plugin
    new FluentUIReactIconsFontSubsettingPlugin(),
  ],
};
```

### With atomic imports (no conditionNames required)

```js
// webpack.config.js
const {
  default: FluentUIReactIconsFontSubsettingPlugin,
} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // Treat the font files as webpack assets
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    // Include this plugin
    new FluentUIReactIconsFontSubsettingPlugin(),
  ],
};
```

### With rspack

The plugin is bundler-agnostic and works unchanged in rspack — the same configuration applies:

```js
// rspack.config.js
const {
  default: FluentUIReactIconsFontSubsettingPlugin,
} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [new FluentUIReactIconsFontSubsettingPlugin()],
};
```

Two rspack-specific notes:

- For the headless import pattern, use `rspack.CssExtractRspackPlugin` instead of `mini-css-extract-plugin`, which is not compatible with rspack.
- `webpack` and `@rspack/core` are both declared as **optional** peer dependencies, so you only need to install the bundler you actually use.

rspack `>=2.0.0` is required because subsetting reads the module graph, and
`moduleGraph.getUsedExports()` was exposed to the JS API in rspack 2.0.0.

On rspack `2.0.x` there is one limitation: `moduleGraph.getProvidedExports()` only landed in 2.1.0,
and it is what lets the plugin subset icons reached through a **namespace import**
(`import * as Icons from '@fluentui/react-icons/fonts/…'`). Because those icons cannot be
identified, _every_ font in the affected package is left un-subset — not just the namespace import's
own module — since subsetting from the package's remaining imports would drop glyphs the namespace
import actually uses. A build warning names the package when this happens. Named imports — the
common case — are unaffected and subset fully. Upgrade to rspack `>=2.1.0` for complete coverage.

# @fluentui/react-icons-font-subsetting-webpack-plugin

This package includes a plugin for `webpack@>=5.0.0` to subset the icon font files used by `@fluentui/react-icons` when using font-based icon implementations.

If `optimization.usedExports` is enabled (as it is by default in webpack `production` mode), this plugin will subset the font files to only include the glyphs actually used by your build.

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

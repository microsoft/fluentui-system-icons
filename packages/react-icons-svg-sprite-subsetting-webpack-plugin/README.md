# @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin

Webpack plugin that optimizes the `@fluentui/react-icons/svg-sprite/*` entrypoints.

It supports two modes:

- **`atomic` (default):** subsets each emitted sprite asset (`atoms/svg-sprite/*.svg`) to only the `<symbol>` IDs that are actually used.
- **`merged`:** emits a single merged sprite asset containing only the used `<symbol>` IDs, and rewrites internal sprite imports so all icons reference the merged file.

## Install

```sh
npm i -D @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin
```

## Usage

```js
const { default: FluentUIReactIconsSvgSpriteSubsettingPlugin } = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: 'atomic', // or 'merged'
    }),
  ],
};
```

## Notes

- For best results, run Webpack in production mode (or enable `optimization.usedExports`) so the plugin can detect which icon exports are used.

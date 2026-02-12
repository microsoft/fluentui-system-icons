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
      generateSpritesManifest: false,
      injectSpritesInTemplates: false,
      // mergedSpriteFilename: 'fluentui-react-icons.[contenthash].svg'
    }),
  ],
};
```

## Options

- `mode?: 'atomic' | 'merged'` (default: `atomic`)
  - `atomic`: subsets each emitted sprite asset (`atoms/svg-sprite/*.svg`).
  - `merged`: emits a single merged sprite and rewrites sprite imports to it.
- `mergedSpriteFilename?: string`
  - Only valid in `merged` mode.
  - Supports `[fullhash]` and `[contenthash]` placeholders only.
- `forceEnableUsedExports?: boolean` (default: `true`)
  - Enables `optimization.usedExports` if not set.
- `generateSpritesManifest?: boolean` (default: `false`)
  - Emits `sprites-manifest.json` with entrypoint-level sprite usage.
- `injectSpritesInTemplates?: false | { mode: 'inline' | 'reference' } | true`
  - `false` disables HTML injection.
  - `true` is shorthand for `{ mode: 'inline' }`.
  - `inline` injects a merged inline `<svg>` at the start of `<body>`.
  - `reference` injects `<link rel="preload">` tags for used sprite assets.

## Notes

- For best results, run Webpack in production mode (or enable `optimization.usedExports`) so the plugin can detect which icon exports are used.
- `injectSpritesInTemplates` requires `html-webpack-plugin` to be installed and configured in your Webpack build.

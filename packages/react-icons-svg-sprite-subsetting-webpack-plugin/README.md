# @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin

> **⚠️ Alpha** — this package is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin@alpha`

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
const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');

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

You can pass a hash of configuration options to the plugin. Allowed values are as follows:

| Name                           | Type                   | Default     | Description                                                                                                                                                                                                                                                                                                |
| :----------------------------- | :--------------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`mode`**                     | `{'atomic'\|'merged'}` | `'atomic'`  | `'atomic'` subsets each emitted sprite asset (`atoms/svg-sprite/*.svg`) to only used symbols. `'merged'` emits a single merged sprite and rewrites sprite imports to it.                                                                                                                                   |
| **`mergedSpriteFilename`**     | `{String}`             | `undefined` | The filename for the merged sprite asset. Only valid when `mode` is `'merged'`. Supports `[fullhash]` and `[contenthash]` placeholders.                                                                                                                                                                    |
| **`forceEnableUsedExports`**   | `{Boolean}`            | `true`      | If `true`, automatically enables `optimization.usedExports` when it is not already set in your webpack config.                                                                                                                                                                                             |
| **`generateSpritesManifest`**  | `{Boolean}`            | `false`     | If `true`, emits a `sprites-manifest.json` file containing entrypoint-level sprite usage information.                                                                                                                                                                                                      |
| **`injectSpritesInTemplates`** | `{Boolean\|Object}`    | `false`     | Controls HTML injection of sprites via `html-webpack-plugin`. `false` disables injection. `true` is shorthand for `{ mode: 'inline' }`. `{ mode: 'inline' }` injects a merged inline `<svg>` at the start of `<body>`. `{ mode: 'reference' }` injects `<link rel="preload">` tags for used sprite assets. |

## Notes

- For best results, run Webpack in production mode (or enable `optimization.usedExports`) so the plugin can detect which icon exports are used.
- `injectSpritesInTemplates` requires `html-webpack-plugin` to be installed and configured in your Webpack build.

## Contributing

For an in-depth look at the plugin's internal architecture, hook lifecycle, used-exports analysis, and runtime modules, see [SPEC.md](./SPEC.md).

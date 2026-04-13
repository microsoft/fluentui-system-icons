# @fluentui/react-icons-atomic-webpack-loader

> **⚠️ Alpha** — this package is available as an alpha prerelease only.
> ⚠️ The API may change before the first stable release.

> Install via `npm install @fluentui/react-icons-atomic-webpack-loader@alpha --save-dev`

Webpack loader that transforms barrel imports and re-exports from `@fluentui/react-icons` into atomic deep paths for better tree-shaking and smaller bundles.

## Before / After

```js
// Before — barrel import pulls in the entire icon set
import { AddFilled, bundleIcon, useIconContext } from '@fluentui/react-icons';
export { ArrowLeftRegular } from '@fluentui/react-icons';

// After — each reference resolves to a small, isolated module
import { AddFilled } from '@fluentui/react-icons/svg/add';
import { bundleIcon } from '@fluentui/react-icons/utils';
import { useIconContext } from '@fluentui/react-icons/providers';
export { ArrowLeftRegular } from '@fluentui/react-icons/svg/arrow-left';
```

## Usage

Add the loader to your webpack config as an [`enforce: 'pre'`](https://webpack.js.org/configuration/module/#ruleenforce) rule so it runs on the original source before any other loaders:

NOTE: Unlike most loaders, this one should NOT exclude `node_modules`. It needs to process files inside `node_modules` as well to transform barrel imports from `@fluentui/react-icons` in your third-party dependencies. Files that don't reference `@fluentui/react-icons` are skipped via a fast regex pre-check, so there is no meaningful overhead.

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.[mc]?[jt]sx?$/,
        enforce: 'pre',
        use: ['@fluentui/react-icons-atomic-webpack-loader'],
      },
      // … your other rules (babel-loader, ts-loader, etc.)
    ],
  },
};
```

If your existing rules exclude `node_modules`, add a separate rule to cover dependencies:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.[mc]?[jt]sx?$/,
        include: /[\\/]node_modules[\\/]/,
        enforce: 'pre',
        use: ['@fluentui/react-icons-atomic-webpack-loader'],
      },
      // … your other rules (babel-loader, ts-loader, etc.)
    ],
  },
};
```

## Options

| Option        | Type                 | Default | Description                                           |
| ------------- | -------------------- | ------- | ----------------------------------------------------- |
| `iconVariant` | `'svg'` \| `'fonts'` | `'svg'` | Whether icons resolve to SVG or font-based components |

### Using font icons

```js
{
  test: /\.[mc]?[jt]sx?$/,
  enforce: 'pre',
  use: [
    {
      loader: '@fluentui/react-icons-atomic-webpack-loader',
      options: {
        iconVariant: 'fonts',
      },
    },
  ],
}
```

This changes icon resolution from `@fluentui/react-icons/svg/*` to `@fluentui/react-icons/fonts/*`. Non-icon exports (`utils`, `providers`) are unaffected.

## How it works

The loader uses a Babel transform to rewrite import and re-export declarations that reference `@fluentui/react-icons`. Each named specifier is routed to an atomic subpath based on its name:

| Export type    | Example                                          | Resolved path                                     |
| -------------- | ------------------------------------------------ | ------------------------------------------------- |
| Icon component | `AddFilled`, `ArrowLeftRegular`                  | `@fluentui/react-icons/svg/add` (or `/fonts/add`) |
| Context / hook | `useIconContext`, `IconDirectionContextProvider` | `@fluentui/react-icons/providers`                 |
| Utility        | `bundleIcon`, `createFluentIcon`                 | `@fluentui/react-icons/utils`                     |

Files that don't reference `@fluentui/react-icons` are passed through untouched (fast regex pre-check).

## Requirements

- `webpack` >= 5
- `@fluentui/react-icons` >= 2 (with atomic subpath exports)

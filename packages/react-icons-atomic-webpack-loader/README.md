# @fluentui/react-icons-atomic-webpack-loader

> ⚠️ This package is in early development. The API may change before the first stable release.

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

## Install

```bash
npm install @fluentui/react-icons-atomic-webpack-loader --save-dev
```

## Usage

Add the loader to your webpack config. It should run on both your source files and any `node_modules` that re-export from `@fluentui/react-icons`.

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.[mc]?[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          'your-existing-loader', // e.g. babel-loader, ts-loader, swc-loader
          '@fluentui/react-icons-atomic-webpack-loader',
        ],
      },
      {
        test: /\.m?js$/,
        include: /node_modules/,
        use: ['@fluentui/react-icons-atomic-webpack-loader'],
      },
    ],
  },
};
```

> **Note:** Webpack loaders run bottom-to-top. Place the atomic import loader **below** your transpilation loader so it runs first on the original source.

## Options

| Option        | Type                 | Default | Description                                           |
| ------------- | -------------------- | ------- | ----------------------------------------------------- |
| `iconVariant` | `'svg'` \| `'fonts'` | `'svg'` | Whether icons resolve to SVG or font-based components |

### Using font icons

```js
{
  loader: '@fluentui/react-icons-atomic-webpack-loader',
  options: {
    iconVariant: 'fonts',
  },
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

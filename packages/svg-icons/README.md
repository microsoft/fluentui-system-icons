# Fluent UI System Icons (svg)

This package provides the Fluent UI System Icons as optimized plain svg assets.

## Installation

```bash
npm install @fluentui/svg-icons
```

## Usage

The library offers icons in SVG format; the icon names are structured as:

> `[name]_[size]_[style]`

- `name` - Name of the icon from [assets](../assets) that is all lowercased and underscore separated.
- `size` - Size of the icon that is one of 16/20/24/28/48. Note that some icons do not have all sizes available yet. Our designers are working to add missing ones to complete the collection.
- `style` - Style of the icon that is one of `regular`, `filled`. See the section below for details.

### Icon styles

The library offers icons in two styles, `regular` and `filled`

| regular                                                  | filled                                                 |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![mail_24_regular](../../art/ic_fluent_mail_regular.png) | ![mail_24_filled](../../art/ic_fluent_mail_filled.png) |

## Implementation

### Webpack

A common use case is to use [svg-inline-loader](https://www.npmjs.com/package/svg-inline-loader) in your Webpack config.

```bash
npm install svg-inline-loader --save-dev
```

webpack.js:

```js
module.exports = {
  resolve: {
    extensions: ['.svg'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false,
            },
          },
        ],
      },
    ],
  },
};
```

Then reference an icon on a page.

Using template literal:

```ts
import AddIcon from '@fluentui/svg-icons/icons/add_20_filled.svg';

`<div>${AddIcon}</div>`;
```

Or `require`:

```ts
var icon = require('@fluentui/svg-icons/icons/add_20_filled.svg');
```

### Vite

If your project uses [Vite](https://vite.dev/), you can use an icon either as an SVG or inlined (note the URL query params):
```ts
import AddIconInline from "@fluentui/svg-icons/icons/add_20_filled.svg?inline";
import AddIconRaw from "@fluentui/svg-icons/icons/add_20_filled.svg?raw";

`<img src="${AddIconInline}">`
`<div>${AddIconRaw}</div>`
```

See <https://vite.dev/guide/assets.html> for more information on asset handling with Vite.

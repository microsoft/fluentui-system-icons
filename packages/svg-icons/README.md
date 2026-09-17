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
- `style` - Style of the icon that is one of `regular`, `filled`, or `color`. See the section below for details.

### Icon styles

The library offers icons in three styles, `regular`, `filled`, and `color`.

| regular                                                  | filled                                                 |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![mail_24_regular](../../art/ic_fluent_mail_regular.png) | ![mail_24_filled](../../art/ic_fluent_mail_filled.png) |

#### `regular` and `filled`

Monochrome icons. The single design fill is stripped during build so the icon
inherits `currentColor` (or whatever `fill` you set on the element), making them
fully themeable.

```ts
import MailIcon from '@fluentui/svg-icons/icons/mail_24_regular.svg';
```

#### `color` (deprecated)

Multi-color icons (gradients, multiple fills) intended to be used as-is. Unlike
`regular`/`filled`, their fills are preserved and **not** themeable, and each
file's gradient/clip ids are namespaced with the file name (e.g.
`#mail_24_color__a`) so multiple color icons can be inlined on the same page
without id collisions.

```ts
import MailColorIcon from '@fluentui/svg-icons/icons/mail_24_color.svg';
```

> **Deprecated:** color icons are deprecated and may be removed in a future
> release. Prefer `regular`/`filled` for new work. See the
> [color variants guidance](https://microsoft.github.io/fluentui-system-icons/?path=/docs/icons-user-guidance--docs#color-variants-deprecated).
>
> Note: color icons cover only a subset of the icon set (and not every
> size is available for each icon).

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

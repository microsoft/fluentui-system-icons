# Fluent UI System Icons (svg)

This package provides the Fluent UI System Icons as optimized plain svg assets.

## Installation

```bash
npm install @fluentui\svg-icons
```

## Usage

A common use case is to use [svg-inline-loader](https://www.npmjs.com/package/svg-inline-loader) in your Webpack config.

```bash
npm install svg-inline-loader --save-dev
```

webpack.js:
```js
module.exports = {
    resolve: {
        extensions: [".svg"],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader",
                        options: {
                            removeSVGTagAttrs: false,
                        },
                    },
                ],
            }
        ]
    }
};
```

Then reference an icon on a page.

Using template literal:
```ts
import AddIcon from "@fluentui/svg-icons/icons/add_20_filled.svg";

`<div>${AddIcon}</div>`
```

Or `require`:
```ts
var icon = require('@fluentui/svg-icons/icons/add_20_filled.svg');
```

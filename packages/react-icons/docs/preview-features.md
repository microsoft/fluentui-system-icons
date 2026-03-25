# Preview Features

## Atomic API (SVG Sprites)

> **⚠️ Alpha** — this feature is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons@alpha`

### Benefits

- Smaller bundles, faster renders, zero runtime overhead, and no migration cost.
- If you use icons at scale, sprites can be considered the new default.

**📦 Bundle size wins**

With sprites, icons are deduplicated at the app level:

- The size savings increase with every additional icon you use
- Each icon definition exists only once for the entire application
- Icon code is removed from your JS bundles entirely

**⚡ Performance by design**

- Every icon exists once, outside of JS
- React re-renders are effectively no‑ops for icons
- Browsers give you an aggressive, free SVG storage cache, making repeated icon usage extremely cheap

### How it works

Each icon component renders a lightweight `<svg><use href="/path/to/sprite.svg#icon-id" /></svg>` element. The actual icon paths live inside an external `.sprite.svg` file that the browser fetches, caches, and reuses across every render and page navigation. This completely removes icon rendering cost from your JavaScript bundle and React tree.

### Same-origin requirement

> **Important:** Browsers block cross-origin SVG `<use href="...">` references due to security constraints — this is **not** a CORS header issue and cannot be solved by adding `Access-Control-Allow-Origin` headers alone.

The sprite files **must be served from the same origin** as your application. There are two straightforward ways to achieve this:

**Option 1 — Serve from your own static assets (recommended)**

Copy the sprite files into your application's public/static folder and reference them from your own domain. The [Webpack Subsetting Plugin](#webpack-plugin) handles this automatically at build time.

**Option 2 — Reverse proxy**

If the sprites are hosted on a CDN or separate server, configure your reverse proxy to forward requests under a same-origin path to that upstream. Example Nginx config:

```nginx
# Proxy /sprites/ requests to the CDN while appearing same-origin to the browser
location /sprites/ {
    proxy_pass https://your-cdn.example.com/sprites/;
    proxy_cache_valid 200 30d;
    add_header Cache-Control "public, max-age=2592000, immutable";
}
```

After proxying, sprite URLs like `/sprites/access-time.sprite.svg` resolve from the same origin and the browser security restriction is lifted.

### Usage

#### Direct API usage

Atomic SVG sprites, similarly to Atomic SVGs, are grouped by icon kind and exposed via `@fluentui/react-icons/svg-sprite/{icon-group}`.

```ts
// Import individual icon variants from atomic icon groups
import {
  AccessTime20Filled,
  AccessTime24Filled,
  AccessTime20Regular,
} from '@fluentui/react-icons/svg-sprite/access-time';
import { Add16Filled, Add20Filled } from '@fluentui/react-icons/svg-sprite/add';
```

#### TypeScript Configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve these sprite exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

#### Build-Time Transform

You can keep root-level barrel imports and leverage build transforms to start using the new atomic sprites API.

These transforms automatically rewrite imports from:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons';
```

To the optimized atomic import:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons/svg-sprite/access-time';
```

##### Babel

If you use Babel for transpilation, add [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) with the following setup:

```js
// @filename .babelrc.js
module.exports = {
  presets: [
    // ... your preset configuration
  ],
  plugins: [
    [
      'transform-imports',
      {
        '@fluentui/react-icons': {
          transform: (importName) => {
            // Handle utility imports (bundleIcon, className constants)
            const utilityExports = [
              'bundleIcon',
              'iconClassName',
              'iconFilledClassName',
              'iconRegularClassName',
              'iconColorClassName',
              'iconLightClassName',
            ];

            if (utilityExports.includes(importName)) {
              return '@fluentui/react-icons/utils';
            }

            // Handle icon imports
            const withoutSuffix = importName.replace(/(\d*)?(Regular|Filled|Light|Color)$/, '');

            const kebabCase = withoutSuffix.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

            return `@fluentui/react-icons/svg-sprite/${kebabCase}`;
          },
          preventFullImport: false,
          skipDefaultConversion: true,
        },
      },
    ],
  ],
};
```

##### SWC

If you use SWC for transpilation, add [@swc/plugin-transform-imports](https://www.npmjs.com/package/@swc/plugin-transform-imports) with the following setup:

```jsonc
// @filename .swcrc
{
  "jsc": {
    "experimental": {
      "plugins": [
        [
          "@swc/plugin-transform-imports",
          {
            "@fluentui/react-icons": {
              "transform": [
                // Transform utility imports to /utils
                [
                  "^(bundleIcon|iconClassName|iconFilledClassName|iconRegularClassName|iconColorClassName|iconLightClassName)$",
                  "@fluentui/react-icons/utils",
                ],
                // Transform icon imports to /svg-sprite/{icon-name}
                [
                  "(\\D*)(\\d*)?(Regular|Filled|Light|Color)",
                  "@fluentui/react-icons/svg-sprite/{{ kebabCase memberMatches.[1] }}",
                ],
              ],
              "preventFullImport": false,
              "skipDefaultConversion": true,
              "handleDefaultImport": false,
              "handleNamespaceImport": false,
            },
          },
        ],
      ],
    },
  },
}
```

### Tooling

#### Webpack

Enable static asset processing for SVG files so the bundler emits them as separate URL-addressed resources:

```js
const config = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
};
```

#### Vite

Vite handles static assets out of the box. Ensure SVG files are **not** processed by any SVG-to-component plugin (such as `vite-plugin-svgr`) for sprite files, or scope such plugins to exclude `.sprite.svg`:

```js
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // If you use vite-plugin-svgr, exclude sprite files:
    // svgr({ include: /(?<!\.sprite)\.svg$/ }),
  ],
  // Sprite .svg files are served as static URLs automatically — no extra config needed.
});
```

#### Webpack Plugin

> **⚠️ Alpha** — this package is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin@alpha`

To leverage performance benefits to the fullest, use the Webpack SvgSprite Subsetting Plugin. It analyzes your application's actual icon usage at build time and strips unused icon definitions from the sprite files — ensuring only icons your app references are shipped.

[Learn more about `react-icons-svg-sprite-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin)

```js
const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');

const config = {
  plugins: [
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      /**
       * 'atomic' (recommended) — one sprite file per icon group (e.g. access-time.sprite.svg).
       *   Best for HTTP/2 servers; browsers fetch only the groups your app actually uses and
       *   cache each group independently.
       *
       * 'merged' — all icons combined into a single sprite file.
       *   Useful when your app uses a large portion of the icon set and you prefer a single
       *   network request over many smaller ones.
       */
      mode: 'atomic', // or 'merged'
    }),
  ],
};
```

## Headless API

> **⚠️ Alpha** — this feature is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons@alpha`

The Headless API is a drop-in replacement for the standard icon API that eliminates the CSS-in-JS runtime dependency. Instead of injecting styles at runtime, it uses static CSS with `data-*` attribute selectors — making it suitable for any React setup, including those without a CSS-in-JS runtime.

### Benefits

- **No CSS-in-JS runtime** — removes the CSS-in-JS dependency entirely; styling is handled by an opt in plain CSS file or in user-land
- **Smaller JavaScript bundles** — icon styling code is moved from JS to a static CSS file
- **Framework-agnostic styling** — works in any environment that can load a CSS file (Vite, Next.js, Remix, etc.)
- **Same API surface** — `createFluentIcon`, `bundleIcon`, `useIconState`, and all constants work identically to the standard API
- **Migration-friendly** — works with both existing codebases (via build-time transforms) and greenfield projects (via direct imports)

### How it works

The standard API uses Griffel's `makeStyles` / `mergeClasses` to inject CSS rules at runtime. The headless API replaces this with HTML `data-*` attributes and a shipped CSS file (`headless.css`) that targets them:

| Concern               | Standard (Griffel)                  | Headless (CSS)                                                             |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| Base icon layout      | `useRootStyles()` → atomic classes  | `[data-fui-icon] { display: inline; line-height: 0 }`                      |
| High-contrast mode    | `@media (forced-colors)` in JS      | `@media (forced-colors) { [data-fui-icon] { forced-color-adjust: auto } }` |
| RTL directional flip  | `transform: scaleX(-1)` via Griffel | `[data-fui-icon-rtl] { transform: scaleX(-1) }`                            |
| bundleIcon visibility | Generated show/hide classes         | `[data-fui-icon-hidden] { display: none }`                                 |
| Font icon family      | Griffel styles per variant          | `[data-fui-icon-font="filled"] { font-family: '...' }`                     |

### CSS Setup

You **must** import the headless CSS file — this is the key difference from the standard API, which injects styles at runtime.

**For SVG icons and SVG sprites:**

```ts
import '@fluentui/react-icons/headless/headless.css';
```

**For font icons** (additionally):

```ts
import '@fluentui/react-icons/headless/headless-fonts.css';
import '@fluentui/react-icons/headless/headless.css';
```

> **Note:** `headless-fonts.css` contains `@font-face` declarations with relative paths to the font files (`.woff2`, `.woff`, `.ttf`). Your bundler (webpack, Vite, esbuild) will resolve these into the dependency graph automatically, enabling font subsetting plugins to process them.

> **Tip 💡:** It's highly recommended to enable our [`react-icons-font-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-font-subsetting-webpack-plugin) to get same fonts "tree-shaking" perf boost

### Usage

#### SVG Icons

Headless SVG icons are grouped by icon kind and exposed via `@fluentui/react-icons/headless/svg/{icon-group}`:

```tsx
import '@fluentui/react-icons/headless/headless.css';

import {
  AccessTime20Filled,
  AccessTime24Filled,
  AccessTime20Regular,
} from '@fluentui/react-icons/headless/svg/access-time';
import { Add16Filled, Add20Filled } from '@fluentui/react-icons/headless/svg/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

#### SVG Sprites

Headless SVG sprites work the same way as standard SVG sprites but without Griffel:

```tsx
import '@fluentui/react-icons/headless/headless.css';

import { AccessTime20Filled, AccessTime24Filled } from '@fluentui/react-icons/headless/svg-sprite/access-time';
import { Add16Filled } from '@fluentui/react-icons/headless/svg-sprite/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

> **Same-origin requirement:** Sprite files must be served from the same origin as your application. See the [SVG Sprites same-origin section](#same-origin-requirement) above for details.

#### Font Icons

Headless font icons require both CSS files — `headless.css` for base styles and `headless-fonts.css` for `@font-face` declarations:

```tsx
import '@fluentui/react-icons/headless/headless-fonts.css';
import '@fluentui/react-icons/headless/headless.css';

import { Airplane20Filled, Airplane24Regular } from '@fluentui/react-icons/headless/fonts/airplane';

function MyComponent() {
  return <Airplane20Filled />;
}
```

#### Utilities

The headless entry point (`@fluentui/react-icons/headless`) re-exports all core utilities:

```tsx
import {
  // Icon factories
  createFluentIcon,
  bundleIcon,

  // Core hook
  useIconState,

  // CSS class name constants (for consumer targeting)
  iconClassName, // 'fui-Icon'
  iconFilledClassName, // 'fui-Icon-filled'
  iconRegularClassName, // 'fui-Icon-regular'
  iconLightClassName, // 'fui-Icon-light'
  iconColorClassName, // 'fui-Icon-color'
  fontIconClassName, // 'fui-Icon-font'

  // Data attribute constants
  DATA_FUI_ICON, // 'data-fui-icon'
  DATA_FUI_ICON_RTL, // 'data-fui-icon-rtl'
  DATA_FUI_ICON_HIDDEN, // 'data-fui-icon-hidden'
  DATA_FUI_ICON_FONT, // 'data-fui-icon-font'

  // Context
  IconDirectionContextProvider,
  useIconContext,

  // Class name helper
  cx,
} from '@fluentui/react-icons/headless';
```

The `bundleIcon` function works identically to the standard API:

```tsx
import '@fluentui/react-icons/headless/headless.css';
import { bundleIcon } from '@fluentui/react-icons/headless';
import { AccessTimeFilled } from '@fluentui/react-icons/headless/svg/access-time';
import { AccessTimeRegular } from '@fluentui/react-icons/headless/svg/access-time';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

function MyComponent() {
  return <AccessTime filled aria-label="Access time" />;
}
```

### TypeScript Configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve the headless atomic exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Build-Time Transform

You can keep root-level barrel imports and leverage build transforms to adopt the headless API without modifying your source code. This works for both existing codebases migrating to headless approach and greenfield projects.

These transforms automatically rewrite imports from:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons';
```

To the optimized headless atomic import:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons/headless/svg/access-time';
```

> **Note:** You still need to manually add the CSS import (`import '@fluentui/react-icons/headless/headless.css'`) to your application entry point — build transforms only rewrite component imports.

> **Tip 💡:** The examples below target `headless/svg/*`. The same approach applies to SVG sprites and font icons — just replace the target path:
>
> - SVG sprites: `@fluentui/react-icons/headless/svg-sprite/{icon-name}`
> - Font icons: `@fluentui/react-icons/headless/fonts/{icon-name}` (also import `headless-fonts.css`)

#### Babel

If you use Babel for transpilation, add [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) with the following setup:

```js
// @filename .babelrc.js
module.exports = {
  presets: [
    // ... your preset configuration
  ],
  plugins: [
    [
      'transform-imports',
      {
        '@fluentui/react-icons': {
          transform: (importName) => {
            if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
              return '@fluentui/react-icons/providers';
            }

            // Icons end with a style suffix
            const isIcon = importName.match(/(\d*)?(Regular|Filled|Light|Color)$/);
            if (!isIcon) {
              return '@fluentui/react-icons/utils';
            }

            const withoutSuffix = importName.replace(/(\d*)?(Regular|Filled|Light|Color)$/, '');

            const kebabCase = withoutSuffix.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

            return `@fluentui/react-icons/headless/svg/${kebabCase}`;
          },
          preventFullImport: false,
          skipDefaultConversion: true,
        },
      },
    ],
  ],
};
```

#### SWC

If you use SWC for transpilation, add [@swc/plugin-transform-imports](https://www.npmjs.com/package/@swc/plugin-transform-imports) with the following setup:

```jsonc
// @filename .swcrc
{
  "jsc": {
    "experimental": {
      "plugins": [
        [
          "@swc/plugin-transform-imports",
          {
            "@fluentui/react-icons": {
              "transform": [
                // Transform provider imports to /providers
                ["^(useIconContext|IconDirectionContextProvider)$", "@fluentui/react-icons/providers"],
                // Transform icon imports to headless /svg/{icon-name}
                [
                  "(\\D*)(\\d*)?(Regular|Filled|Light|Color)$",
                  "@fluentui/react-icons/headless/svg/{{ kebabCase memberMatches.[1] }}",
                ],
                // Fallback: all other exports are utilities
                [".*", "@fluentui/react-icons/utils"],
              ],
              "preventFullImport": false,
              "skipDefaultConversion": true,
              "handleDefaultImport": false,
              "handleNamespaceImport": false,
            },
          },
        ],
      ],
    },
  },
}
```

# Atomic API (SVG Sprites)

> **⚠️ Alpha** — this feature is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons@prerelease`

## Benefits

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

## How it works

Each icon component renders a lightweight `<svg><use href="/path/to/sprite.svg#icon-id" /></svg>` element. The actual icon paths live inside an external `.sprite.svg` file that the browser fetches, caches, and reuses across every render and page navigation. This completely removes icon rendering cost from your JavaScript bundle and React tree.

## Same-origin requirement

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

## Usage

### Direct API usage

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

### TypeScript Configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve these sprite exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Build-Time Transform

You can keep root-level barrel imports and leverage build transforms to start using the new atomic sprites API.

Use `svg-sprite` as the target path.

👉 **[Build-Time Transform setup (Babel & SWC) →](../build-transforms.md)**

## Tooling

### Webpack

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

### Vite

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

### Webpack Plugin

> **⚠️ Alpha** — this package is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin@prerelease`

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

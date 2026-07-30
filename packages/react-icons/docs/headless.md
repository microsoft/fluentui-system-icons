# Styling

> **This file was `Headless API`.** The headless implementation is the default one now, so this
> is no longer documentation for an alternative — it is how `@fluentui/react-icons` is styled.
> The filename is kept so existing links keep resolving, and will be renamed in the next major.

Icons carry no CSS-in-JS runtime. Styling behavior is expressed as `data-*` attributes on the
rendered element and resolved by a plain CSS file the package ships. That makes the icons usable
in any React setup — Vite, Next.js, Remix, webpack, esbuild — and moves the styling bytes out of
your JavaScript bundle.

## You must import the stylesheet

This is the one setup step, and skipping it fails **silently and application-wide**.

**For SVG and sprite icons:**

```ts
import '@fluentui/react-icons/styles.css';
```

**For font icons** (both, since the second only carries `@font-face`):

```ts
import '@fluentui/react-icons/styles.css';
import '@fluentui/react-icons/fonts/styles.css';
```

Without them every icon loses `display`, the RTL flip and the high-contrast handling — and a
`bundleIcon` pair renders **both** variants at once. Nothing throws; the icons just look wrong,
everywhere. Wire the import up before upgrading, not after.

> **Note:** `fonts/styles.css` contains `@font-face` declarations with relative paths to the font
> files (`.woff2`, `.woff`, `.ttf`). Your bundler resolves these into the dependency graph
> automatically, which is what lets font subsetting plugins see them.

> **Tip 💡:** enable [`react-icons-font-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-font-subsetting-webpack-plugin)
> to strip unused glyphs from the font binaries.

> **Bundle size:** prefer CSS extraction (`MiniCssExtractPlugin`, or any bundler that extracts CSS
> in production) over webpack's default `style-loader`. It is worth several kB — see
> [bundle-size-rendering-approaches-comparison.md](./bundle-size-rendering-approaches-comparison.md).

## Cascade layers

The shipped stylesheets are **unlayered**, and this matters more than it sounds. Cascade layers
are compared **before** specificity, so an unlayered rule beats a layered one no matter how
specific the layered rule is:

```css
[data-fui-icon-hidden] {
  display: none;
} /* unlayered, 0-1-0 */
@layer components {
  .my-button:hover .fui-Icon-filled {
    display: inline;
  }
} /* layered, 0-2-0 — still LOSES */
```

If your application organises its CSS with `@layer`, your own layered rules therefore cannot
override these icon defaults until the icon styles are part of the same layer system. Assign them
a layer at import time:

```css
@import '@fluentui/react-icons/styles.css' layer(base);
@import '@fluentui/react-icons/fonts/styles.css' layer(base);
```

Replace `base` with whichever layer the icon defaults should sit in — typically your lowest one,
so component styles win. The package deliberately does not pick a layer name: shipping one would
impose it on the whole ecosystem, and the choice belongs to the consuming application.

Note that `:where()` alone does not solve this. The base rule _is_ `:where()`-wrapped (zero
specificity, so any class-based styling wins), but the contentious rule is
`[data-fui-icon-hidden]`, which is deliberately **not** wrapped — it has to beat the base rule.
Layering is the only mechanism that subordinates it to yours.

## How it works

| Concern               | Mechanism                                                                  |
| --------------------- | -------------------------------------------------------------------------- |
| Base icon layout      | `:where([data-fui-icon]) { display: inline; line-height: 0 }`              |
| High-contrast mode    | `@media (forced-colors) { [data-fui-icon] { forced-color-adjust: auto } }` |
| RTL directional flip  | `[data-fui-icon-rtl] { transform: scaleX(-1) }`                            |
| bundleIcon visibility | `[data-fui-icon-hidden] { display: none }`                                 |
| Font icon family      | `[data-fui-icon-font="filled"] { font-family: '…' }`                       |

The `fui-Icon`, `fui-Icon-filled`, `fui-Icon-regular`, `fui-Icon-light`, `fui-Icon-color` and
`fui-Icon-font` class names are still applied, unchanged, and remain the supported hook for
targeting icons from your own CSS.

Because nothing is inserted at runtime, there is no `<style>` ordering to reason about, no
hydration step and no CSP nonce to thread through — server and client markup are identical.

## Usage

### SVG icons

```tsx
import '@fluentui/react-icons/styles.css';

import { AccessTime20Filled, AccessTime24Filled, AccessTime20Regular } from '@fluentui/react-icons/svg/access-time';
import { Add16Filled, Add20Filled } from '@fluentui/react-icons/svg/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

### SVG sprites

> **⚠️ Alpha** — SVG sprites are a [preview feature](./preview-features/svg-sprites.md).

Sprite icons are exposed via `@fluentui/react-icons/svg-sprite/{icon-group}`; each component
renders `<svg><use href="…#icon-id" /></svg>` against an external sprite file:

```tsx
import '@fluentui/react-icons/styles.css';

import { AccessTime20Filled } from '@fluentui/react-icons/svg-sprite/access-time';

function MyComponent() {
  return <AccessTime20Filled />;
}
```

The [`react-icons-svg-sprite-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin)
subsets these entrypoints with no extra configuration.

### Font icons

Font icons need both stylesheets — `styles.css` for the base rules and `fonts/styles.css` for the
`@font-face` declarations:

```tsx
import '@fluentui/react-icons/styles.css';
import '@fluentui/react-icons/fonts/styles.css';

import { Airplane20Filled, Airplane24Regular } from '@fluentui/react-icons/fonts/airplane';

function MyComponent() {
  return <Airplane20Filled />;
}
```

### Utilities

```tsx
import {
  // Icon factories
  createFluentIcon,
  bundleIcon,
  wrapIcon,

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

  // Class name helper
  cx,
} from '@fluentui/react-icons/utils';

import { IconDirectionContextProvider, useIconContext } from '@fluentui/react-icons/providers';
```

`bundleIcon` composes a filled/regular pair into one component; the inactive variant gets
`data-fui-icon-hidden`, which is what the stylesheet hides:

```tsx
import '@fluentui/react-icons/styles.css';
import { bundleIcon } from '@fluentui/react-icons/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/svg/access-time';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

function MyComponent() {
  return <AccessTime filled aria-label="Access time" />;
}
```

## Migrating from the `./headless` subpaths

`./headless*` is **deprecated**. Every one of those subpaths is an alias of its default
counterpart — the same modules and the same files — kept for one release so existing adopters
upgrade without a code change. They are removed in the next major.

| Deprecated                                        | Use                                      |
| ------------------------------------------------- | ---------------------------------------- |
| `@fluentui/react-icons/headless`                  | `@fluentui/react-icons`                  |
| `@fluentui/react-icons/headless/utils`            | `@fluentui/react-icons/utils`            |
| `@fluentui/react-icons/headless/svg/*`            | `@fluentui/react-icons/svg/*`            |
| `@fluentui/react-icons/headless/svg-sprite/*`     | `@fluentui/react-icons/svg-sprite/*`     |
| `@fluentui/react-icons/headless/fonts`            | `@fluentui/react-icons/fonts`            |
| `@fluentui/react-icons/headless/fonts/*`          | `@fluentui/react-icons/fonts/*`          |
| `@fluentui/react-icons/headless/styles.css`       | `@fluentui/react-icons/styles.css`       |
| `@fluentui/react-icons/headless/fonts/styles.css` | `@fluentui/react-icons/fonts/styles.css` |

Likewise, the atomic webpack loader's `headless: true` option is deprecated for this package —
it now only selects which spelling of the same modules gets emitted.

## TypeScript configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"` /
`"nodenext"`) in their `tsconfig.json` to resolve the atomic exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

## Build-time transform

You can keep root-level barrel imports and let a build transform rewrite them to atomic paths,
without touching your source. Use `svg` as the target path (or `svg-sprite` / `fonts`).

> **Note:** the transform only rewrites component imports. You still have to add the stylesheet
> import to your application entry point yourself.

👉 **[Build-Time Transform setup (Babel & SWC) →](./build-transforms.md)**

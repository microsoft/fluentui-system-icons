# Base API

> **⚠️ Alpha** — this feature is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons@prerelease`

The Base API is a drop-in replacement for the standard icon API that removes the CSS-in-JS runtime dependency. It provides `data-*` attribute selectors for styling behaviour with opt-in pre-defined vanilla CSS — making it suitable for any React setup, including those without a CSS-in-JS runtime.

## Benefits

- **No CSS-in-JS runtime** — removes the CSS-in-JS dependency entirely; styling is handled by an opt in plain CSS file or in user-land
- **Smaller JavaScript bundles** — icon styling code is moved from JS to a static CSS file
- **Framework-agnostic styling** — works in any environment that can load a CSS file (Vite, Next.js, Remix, etc.)
- **Same API surface** — `createFluentIcon`, `bundleIcon`, `useIconState`, and all constants work identically to the standard API
- **Migration-friendly** — works with both existing codebases (via build-time transforms) and greenfield projects (via direct imports)

## How it works

The standard API uses Griffel's `makeStyles` / `mergeClasses` to inject CSS rules at runtime. The base API replaces this with HTML `data-*` attributes and a shipped CSS file (`base.css`) that targets them:

| Concern               | Standard (Griffel)                  | Base (CSS)                                                                 |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| Base icon layout      | `useRootStyles()` → atomic classes  | `[data-fui-icon] { display: inline; line-height: 0 }`                      |
| High-contrast mode    | `@media (forced-colors)` in JS      | `@media (forced-colors) { [data-fui-icon] { forced-color-adjust: auto } }` |
| RTL directional flip  | `transform: scaleX(-1)` via Griffel | `[data-fui-icon-rtl] { transform: scaleX(-1) }`                            |
| bundleIcon visibility | Generated show/hide classes         | `[data-fui-icon-hidden] { display: none }`                                 |
| Font icon family      | Griffel styles per variant          | `[data-fui-icon-font="filled"] { font-family: '...' }`                     |

## CSS Setup

You **must** import the base CSS file — this is the key difference from the standard API, which injects styles at runtime.

**For SVG icons and SVG sprites:**

```ts
import '@fluentui/react-icons/base/base.css';
```

**For font icons** (additionally):

```ts
import '@fluentui/react-icons/base/base-fonts.css';
import '@fluentui/react-icons/base/base.css';
```

> **Note:** `base-fonts.css` contains `@font-face` declarations with relative paths to the font files (`.woff2`, `.woff`, `.ttf`). Your bundler (webpack, Vite, esbuild) will resolve these into the dependency graph automatically, enabling font subsetting plugins to process them.

> **Tip 💡:** It's highly recommended to enable our [`react-icons-font-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-font-subsetting-webpack-plugin) to get same fonts "tree-shaking" perf boost

## Usage

### SVG Icons

Base SVG icons are grouped by icon kind and exposed via `@fluentui/react-icons/base/svg/{icon-group}`:

```tsx
import '@fluentui/react-icons/base/base.css';

import {
  AccessTime20Filled,
  AccessTime24Filled,
  AccessTime20Regular,
} from '@fluentui/react-icons/base/svg/access-time';
import { Add16Filled, Add20Filled } from '@fluentui/react-icons/base/svg/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

### SVG Sprites

Base SVG sprites work the same way as standard SVG sprites but without Griffel:

```tsx
import '@fluentui/react-icons/base/base.css';

import { AccessTime20Filled, AccessTime24Filled } from '@fluentui/react-icons/base/svg-sprite/access-time';
import { Add16Filled } from '@fluentui/react-icons/base/svg-sprite/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

> **Same-origin requirement:** Sprite files must be served from the same origin as your application. See the [SVG Sprites same-origin section](./svg-sprites.md#same-origin-requirement) for details.

### Font Icons

Base font icons require both CSS files — `base.css` for base styles and `base-fonts.css` for `@font-face` declarations:

```tsx
import '@fluentui/react-icons/base/base-fonts.css';
import '@fluentui/react-icons/base/base.css';

import { Airplane20Filled, Airplane24Regular } from '@fluentui/react-icons/base/fonts/airplane';

function MyComponent() {
  return <Airplane20Filled />;
}
```

### Utilities

The base entry point (`@fluentui/react-icons/base`) re-exports all core utilities:

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
} from '@fluentui/react-icons/base';
```

The `bundleIcon` function works identically to the standard API:

```tsx
import '@fluentui/react-icons/base/base.css';
import { bundleIcon } from '@fluentui/react-icons/base';
import { AccessTimeFilled } from '@fluentui/react-icons/base/svg/access-time';
import { AccessTimeRegular } from '@fluentui/react-icons/base/svg/access-time';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

function MyComponent() {
  return <AccessTime filled aria-label="Access time" />;
}
```

## TypeScript Configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve the base atomic exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

## Build-Time Transform

You can keep root-level barrel imports and leverage build transforms to adopt the base API without modifying your source code. This works for both existing codebases migrating to base approach and greenfield projects.

Use `base/svg` as the target path (or `base/svg-sprite` for sprites, `base/fonts` for font icons).

> **Note:** You still need to manually add the CSS import (`import '@fluentui/react-icons/base/base.css'`) to your application entry point — build transforms only rewrite component imports.

👉 **[Build-Time Transform setup (Babel & SWC) →](../build-transforms.md)**

The **Headless API** is a drop-in replacement for the standard icon API that removes the CSS-in-JS (Griffel) runtime dependency. It provides `data-*` attribute selectors for styling behaviour with opt-in pre-defined vanilla CSS — making it suitable for any React setup, including those without a CSS-in-JS runtime.

> **Complements Fluent UI Headless components.** If you are building with the [Fluent UI Headless components](https://storybooks.fluentui.dev/headless/?path=/docs/overview-introduction--docs), this API is the icon counterpart — same unstyled, bring-your-own-CSS philosophy.

## Benefits

- **No CSS-in-JS runtime** — removes the Griffel dependency entirely; styling is handled by an opt-in plain CSS file or in user-land
- **Smaller JavaScript bundles** — icon styling code is moved from JS to a static CSS file. With CSS extraction this reduces JS bundle sizes significantly (see the [Bundle Size](?path=/docs/icons-bundle-size--docs) page — up to −70% for font icons)
- **Framework-agnostic styling** — works in any environment that can load a CSS file (Vite, Next.js, Remix, etc.)
- **Same API surface** — `createFluentIcon`, `bundleIcon`, `useIconState`, and all constants work identically to the standard API
- **Migration-friendly** — works with both existing codebases (via build-time transforms) and greenfield projects (via direct imports)

## How it works

The standard API uses Griffel's `makeStyles` / `mergeClasses` to inject CSS rules at runtime. The headless API replaces this with HTML `data-*` attributes and a shipped CSS file (`styles.css`) that targets them:

| Concern               | Standard (Griffel)                  | Headless (CSS)                                                             |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| Base icon layout      | `useRootStyles()` → atomic classes  | `[data-fui-icon] { display: inline; line-height: 0 }`                      |
| High-contrast mode    | `@media (forced-colors)` in JS      | `@media (forced-colors) { [data-fui-icon] { forced-color-adjust: auto } }` |
| RTL directional flip  | `transform: scaleX(-1)` via Griffel | `[data-fui-icon-rtl] { transform: scaleX(-1) }`                            |
| bundleIcon visibility | Generated show/hide classes         | `[data-fui-icon-hidden] { display: none }`                                 |
| Font icon family      | Griffel styles per variant          | `[data-fui-icon-font="filled"] { font-family: '...' }`                     |

## CSS Setup

You **must** import the headless CSS file — this is the key difference from the standard API, which injects styles at runtime.

**For SVG icons:**

```ts
import '@fluentui/react-icons/headless/styles.css';
```

**For font icons** (additionally):

```ts
import '@fluentui/react-icons/headless/fonts/styles.css';
import '@fluentui/react-icons/headless/styles.css';
```

> **Note:** `fonts/styles.css` contains `@font-face` declarations with relative paths to the font files (`.woff2`, `.woff`, `.ttf`). Your bundler (webpack, Vite, esbuild) will resolve these into the dependency graph automatically, enabling font subsetting plugins to process them.

> **Tip 💡:** It's highly recommended to enable the [`@fluentui/react-icons-font-subsetting-webpack-plugin`](https://www.npmjs.com/package/@fluentui/react-icons-font-subsetting-webpack-plugin) to get the same font "tree-shaking" perf boost. See the [Build Transforms](?path=/docs/icons-build-transforms--docs) page.

## Usage

### SVG Icons

Headless SVG icons are grouped by icon kind and exposed via `@fluentui/react-icons/headless/svg/{icon-group}`:

```tsx
import '@fluentui/react-icons/headless/styles.css';

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

> **SVG sprites are not available in the Headless API yet.** SVG sprites are still a [preview feature](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/react-icons/docs/preview-features/svg-sprites.md) of the standard (Griffel) API only. A headless sprite variant is not published.

### Font Icons

Headless font icons require both CSS files — `styles.css` for base styles and `fonts/styles.css` for `@font-face` declarations:

```tsx
import '@fluentui/react-icons/headless/fonts/styles.css';
import '@fluentui/react-icons/headless/styles.css';

import { Airplane20Filled, Airplane24Regular } from '@fluentui/react-icons/headless/fonts/airplane';

function MyComponent() {
  return <Airplane20Filled />;
}
```

### Utilities

Import core utilities from the atomic `@fluentui/react-icons/headless/utils` subpath (preferred over the barrel for best tree-shaking):

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
} from '@fluentui/react-icons/headless/utils';
```

The `bundleIcon` function works identically to the standard API:

```tsx
import '@fluentui/react-icons/headless/styles.css';
import { bundleIcon } from '@fluentui/react-icons/headless/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/headless/svg/access-time';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

function MyComponent() {
  return <AccessTime filled aria-label="Access time" />;
}
```

## TypeScript Configuration

**Important:** TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve the headless atomic exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

## Build-Time Transform

You can keep root-level barrel imports and leverage build transforms to adopt the headless API without modifying your source code. Use the `headless: true` option of the webpack loader (or a `headless/svg` target for Babel/SWC).

> **Note:** You still need to manually add the CSS import (`import '@fluentui/react-icons/headless/styles.css'`) to your application entry point — build transforms only rewrite component imports.

👉 **[Build Transforms setup →](?path=/docs/icons-build-transforms--docs)**

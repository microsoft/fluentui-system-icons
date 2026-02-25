# @fluentui/react-icons

**IMPORTANT: PLEASE READ**

@fluentui/react-icons has been major bumped to 2.x. There are some key changes in the API and usages. The main ones are:

- The general icons are now resizeable using styling (i.e. scaling using the `height` and `width` props or using `fontSize` prop, etc). Ex: `<AccessTimeFilled fontSize={40}>`
- There is now a more general icon offering included with the sized icons. Instead of importing `<AccessTime24Filled>`, you just import `<AccessTimeFilled>`.
- The sized icons are still available, and are recommended if you know the specific size you want your icons to be. For the general case, the more general icons are available to you.

(Note: For those who were consuming `@fluentui/react-icons` v 0.x, we are releasing a new set of icons under `@fluentui/react-icons` v 1.x. You can still use 0.x version for the old icons, but if you major bump to 1.x, you will be using the new icons. The Fabric MDL2 SVG Icon set that is released with v 0.x has been rereleased in `@fluentui/react-icons-mdl2`.)

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

## User Story

`@fluentui/react-icons` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application.

Icons are available in multiple variants: `Regular` and `Filled` for most icons, with `Light` and `Color` variants available for select icons. You can choose what works best for your application. These are by default sized to `1em`, and can be scaled up or down to suit your developer needs.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application.

## Usage

In order to use these icons, simply import them as `import { [Componentname][variant] } from @fluentui/react-icons` as follows:

```tsx
import { AccessTimeFilled } from '@fluentui/react-icons';
```

The previous icon offerings are scalable, but if you know what size you want to use for your icons, and you are not planning on using multiple sizes, it is recommended to use the sized icons. These are the same icons as the general case, but in multiple different sizes, built to look pixel perfect at those specific sizes.

You can import the sized icons in a similar way:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons';
```

You can also style the icons using the `FluentIconsProps` interface, with the `className` prop or the `primaryFill` prop.

Finally, you can bundle the `Filled` and `Regular` versions of each icon into a compound icon component using the `bundleIcon` method. The `bundleIcon()` function returns a component with both variants of the icon, and you can then use the classnames `iconFilledClassName` and `iconRegularClassName` to style this compound component.

The bundled icon accepts a `filled` prop (boolean) to control which variant is displayed: when `filled={true}`, the filled variant is shown; when `filled={false}` or omitted, the regular variant is shown.

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  AccessTimeFilled,
  AccessTimeRegular,
  bundleIcon,
  iconFilledClassName,
  iconRegularClassName,
} from '@fluentui/react-icons';
import { makeStyles } from '@griffel/react';

// Define props to customize the icon's appearance
// primaryFill: Sets the icon's color
// className: Applies custom CSS class for additional styling
const iconStyleProps: FluentIconsProps = {
  primaryFill: 'purple',
  className: 'iconClass',
};

// Create styles using Griffel's makeStyles
// This example toggles between Filled and Regular variants on hover
const useIconStyles = makeStyles({
  icon: {
    ':hover': {
      // Hide the filled variant on hover
      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      // Show the regular variant on hover
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
    },
  },
});

// Bundle both icon variants into a single component
// By default, displays the Filled variant; use filled={false} prop to show Regular variant
const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);
const rootElement = document.getElementById('root');
const styles = useIconStyles();
ReactDOM.render(
  <div className={styles.icon}>
    <AccessTime aria-label="AccessTime" {...iconStyleProps} />
  </div>,
  rootElement,
);
```

### Using the icon font

If, for performance or other reasons, you wish to use the font implementation of these icons rather than the SVG implementation, you can specify `"fluentIconFont"` as a condition for the import, either via [Node >= 12.19.0](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#resolving-user-conditions) or [webpack >= 5.0.0](https://webpack.js.org/configuration/resolve/#resolveconditionnames).

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    conditionNames: ['fluentIconFont', 'require', 'node'],
  },
};
```

If you do choose this route, you may wish to use `@fluentui/react-icons-font-subsetting-webpack-plugin` to optimize the font assets.

### Using color variants

> **⚠️ Warning:** We strongly recommend avoiding `Color` icon variants due to several accessibility issues. Use `Filled` or `Regular` variants instead.

#### Known Accessibility Issues

##### 1. High Contrast Mode (HCM) Non-Compliance

Color variants are non‑compliant with Windows High Contrast Mode, resulting in accessibility issues for users who depend on high‑contrast settings ([#951](https://github.com/microsoft/fluentui-system-icons/issues/951)).

**Workaround:** If you must use color variants, bundle them with `Filled` variants and switch between them using a Griffel media query:

```tsx
import { makeStyles } from '@griffel/react';
import { bundleIcon, iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';
import { CodeBlock48Color, CodeBlock48Filled } from '@fluentui/react-icons';

const CodeBlock48ColorFixed = bundleIcon(CodeBlock48Filled, CodeBlock48Color);

const useStyles = makeStyles({
  icon: {
    [`& .${iconFilledClassName}`]: {
      display: 'none',
    },
    [`& .${iconRegularClassName}`]: {
      display: 'inline',
    },

    '@media (forced-colors: active)': {
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },
  },
});

function MyComponent() {
  const styles = useStyles();
  return <CodeBlock48ColorFixed className={styles.icon} />;
}
```

**Note:** This approach increases bundle size as both variants are included.

##### 2. SVG Gradient ID Collision

Color icons with gradients use non-scoped `id` attributes. When multiple instances of the same color icon exist on a page, hiding one with `display: none` will hide all instances.

**Root cause:** SVG gradient IDs exist in the global DOM namespace. When one icon has applied css rule `display: 'none'`, the gradient definition becomes inaccessible, affecting all icons referencing that ID ([#936](https://github.com/microsoft/fluentui-system-icons/issues/936)).

**Workarounds:**

✅ **Option 1: Use SVG sprites (recommended for multiple instances)**

```tsx
<svg>
  <symbol id="code-block-48-color">
    <CodeBlock48Color />
  </symbol>
</svg>

// Reference it multiple times without gradient ID Collision
<svg width="48" height="48">
  <use href="#code-block-48-color" />
</svg>
<svg width="48" height="48">
  <use href="#code-block-48-color" />
</svg>
```

✅ **Option 2: Move off-screen with absolute positioning**

```tsx
<Icon style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} />
```

✅ **Option 3: Use `visibility: 'hidden'`** (maintains layout space)

##### 3. Dark Theme Contrast Issues

Color variants have insufficient contrast ratios in dark themes, failing WCAG accessibility standards.

**WCAG Requirements:**

- **Non-text elements** (simple icons): Minimum 3:1 contrast ratio ([WCAG 2.1 SC 1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
- **Text-like elements** (icons with letters/numbers or small details): Minimum 4.5:1 for normal text, 3:1 for large text ([WCAG 2.0 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
- **Decorative icons**: No contrast requirements

**Current status:** Most color icons meet 3:1 contrast, but contain small visual details that could be treated as text-equivalent elements which require 4.5:1 contrast. This makes them non-compliant in dark themes.

#### Recommendation

For accessible, maintainable icon implementations:

- ✅ Use `Filled` or `Regular` variants
- ❌ Avoid `Color` variants unless absolutely necessary and you've implemented the HCM workaround

### Using multiple colors for single-color icons

To apply multiple colors to an icon (e.g., one color for the fill and another for the outline), layer the `Filled` and `Regular` variants using absolute positioning:

```tsx
import { makeStyles, mergeClasses } from '@fluentui/react-components';
import { ShieldLock48Filled, ShieldLock48Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  icon: {
    position: 'absolute',
  },
  filled: {
    zIndex: 1,
    color: 'yellow',
  },
  regular: {
    zIndex: 2,
    color: 'red',
  },
});

function MyComponent() {
  const styles = useStyles();
  return (
    <span>
      <ShieldLock48Filled className={mergeClasses(styles.icon, styles.filled)} />
      <ShieldLock48Regular className={mergeClasses(styles.icon, styles.regular)} />
    </span>
  );
}
```

This technique positions both icon variants in the same space using z-index stacking. The `Regular` variant (z-index: 2) sits on top, providing the outline, while the `Filled` variant (z-index: 1) sits underneath, providing the fill. By applying different colors to each layer, you can create custom multi-color effects.

## API Contract

> [!IMPORTANT]
> This library does not strictly follow semantic versioning. Breaking changes may occur in patch releases.

### Versioning Strategy

Due to the monorepo architecture, all packages share a unified release cycle. Both minor (feature additions) and patch (bug fixes and icon updates) changes are released as **PATCH version bumps only**. This means:

- `2.0.X` → `2.0.Y` may include new features, icon additions, or breaking changes
- Major version bumps (`2.X.X` → `3.0.0`) are reserved for significant API redesigns

### Breaking Changes

While we strive to maintain API stability, there are two scenarios where breaking changes can occur outside of major version updates:

1. **Icon Removal**: Icons may be removed from the library due to legal or licensing issues. When an icon asset is removed, any code importing that icon will break.

2. **Icon Renaming**: Icons may be renamed to better reflect their purpose or to align with design system updates. This will break existing imports that reference the old icon name.

These are the only two types of breaking changes that deviate from standard semantic versioning practices. All other aspects of our API contract follow semantic versioning conventions - meaning additions, bug fixes, and internal improvements will not break your existing code.

> **💡 NOTE:** We could remedy these breaking change scenarios by providing empty icon placeholders, but we believe a failing build pipeline is preferable to silently shipping invalid UI with blank icons to your users.

**Recommendation**: When upgrading, even for patch versions, review the release notes for any removed or renamed icons to ensure your application isn't affected.

## Atomic API

The Atomic API provides a more granular way to import icons, with each icon variant exported individually from dedicated module files. This approach can significantly improve tree-shaking and reduce bundle sizes, especially when you only use a small subset of the available icons.

### Benefits

- **Better tree-shaking**: Import only the exact icon variants you need
- **Smaller bundles**: Each icon variant is in its own file, allowing bundlers to eliminate unused code more effectively
- **Grouped variants**: Related icon variants (different sizes and styles) are grouped together in a single file for convenience

### File Organization

Icons with multiple variants are automatically grouped into a single file:

- **Example**: `access-time.js` contains all AccessTime variants (AccessTime20Regular, AccessTime24Filled, etc.).
- **Average**: ~9 exports per file (mix of sizes and styles).

This grouping strikes a balance between granularity and convenience, making it easy to import related variants while still maintaining excellent tree-shaking characteristics.

### Using API Directly

Icons are available via two export maps:

- `@fluentui/react-icons/svg/*` - SVG-based icons
- `@fluentui/react-icons/fonts/*` - Font-based icons

The following utility module is also available:

- `@fluentui/react-icons/utils` - General icon helper utilities
- `@fluentui/react-icons/providers` - React Context related apis

```tsx
// Import individual icon variants from grouped files
import { AccessTime20Filled, AccessTime24Filled, AccessTime20Regular } from '@fluentui/react-icons/svg/access-time';
import { Add16Filled, Add20Filled } from '@fluentui/react-icons/fonts/add';

function MyComponent() {
  return (
    <>
      <AccessTime20Filled />
      <Add16Filled />
    </>
  );
}
```

#### TypeScript Configuration

**IMPORTANT**: TypeScript users must use `moduleResolution: "bundler"` (or `"node16"`/`"nodenext"`) in their `tsconfig.json` to properly resolve these atomic exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

Without this setting, TypeScript will not be able to resolve the individual icon exports from the grouped files.

**NOTE:** TypeScript users that are still using _old_ `"moduleResolution": "node"`, can use `@fluentui/react-icons/lib/atoms/svg/*` - for SVG-based atomic icon imports.

### Using API via Build Transform

Migrating a larger codebase to the new performant atomic imports might be a daunting task. To make this migration more straightforward, you can leverage build-time import transforms to get all the benefits without modifying your actual code.

These transforms automatically rewrite imports from:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons';
```

To the optimized atomic import:

```tsx
import { AccessTime24Filled } from '@fluentui/react-icons/svg/access-time';
```

This transformation happens at build time, so your source code remains unchanged while your bundled output gets the full tree-shaking benefits.

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

            return `@fluentui/react-icons/svg/${kebabCase}`;
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
                // Transform icon imports to /svg/{icon-name}
                [
                  "(\\D*)(\\d*)?(Regular|Filled|Light|Color)$",
                  "@fluentui/react-icons/svg/{{ kebabCase memberMatches.[1] }}",
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

## Viewing Icons

You can view the full list of available icons by type:

- [React Icons Catalogue](https://storybooks.fluentui.dev/react/?path=/docs/icons-catalog--docs)
- [Regular icons](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md)
- [Filled icons](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_filled.md)

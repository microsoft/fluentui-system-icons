# @fluentui/react-native-icons

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft. This package provides typed React Native components rendered with [`react-native-svg`](https://github.com/software-mansion/react-native-svg).

## Installation

```sh
yarn add @fluentui/react-native-icons react-native-svg
```

The package requires React `>=18.2.0 <20.0.0`, React Native `>=0.73.0`, and `react-native-svg >=12.5.0`. Choose a `react-native-svg` version compatible with your React Native version and follow its [installation instructions](https://github.com/software-mansion/react-native-svg#installation), including native setup where required. For Expo, use `npx expo install react-native-svg` to select a compatible version.

## Usage

Import icons by name from the package root. Most families provide `Filled` and `Regular` styles; selected icons also provide `Light` or multicolor `Color` styles. Not every family has every style or size.

```tsx
import { View } from 'react-native';
import { AccessTimeFilled, AccessTime20Regular, AddCircleColor } from '@fluentui/react-native-icons';

export function IconExamples() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AccessTimeFilled primaryFill="#212121" />
      <AccessTimeFilled width={32} height={32} primaryFill="#0078d4" />
      <AccessTime20Regular primaryFill="#212121" title="Time" />
      <AddCircleColor title="Add" />
    </View>
  );
}
```

### Sizing

Resizable icons omit the size from their name, such as `AccessTimeFilled`. They normally use the 20-unit artwork and viewBox, rendered at **24 by 24** by default, not `1em`. Set `width` and `height` to scale them without changing their viewBox.

Sized icons include their intended size, such as `AccessTime20Regular` or `AccessTime24Filled`. They use artwork designed for that size and default to those dimensions. Prefer the matching sized variant when rendering at a fixed size. Original non-square dimensions and nonstandard viewBoxes are preserved where applicable.

Generated icon props extend `SvgProps` from `react-native-svg`. Use `width`, `height`, and, when needed, `viewBox` to override geometry. The `size` convenience prop belongs to the `FluentSvg` utility, not the generated icon prop type.

### Color and styling

Use `primaryFill` for the primary monochrome color. It defaults to `currentColor`, so the SVG `color` prop can also supply that color:

```tsx
<>
  <AccessTimeFilled primaryFill="#0078d4" />
  <AccessTimeFilled color="#0078d4" />
</>
```

`primaryFill` takes precedence over the raw `fill` prop. Passing `fill` alone does not change the primary icon color. Color icons and explicitly colored details retain their authored fills and gradients rather than being recolored uniformly.

Standard `react-native-svg` props, including `style`, are supported. This package does not provide the web package's CSS classes, Griffel styling, or `bundleIcon` API. Choose the `Filled` or `Regular` component to switch artwork; the `filled` prop does not switch SVG variants.

### Accessibility

Use `title` to give a meaningful icon an accessible name. It is mapped to `aria-label`, not rendered as an SVG `<title>` element. Icons with a `title`, `aria-label`, or `aria-labelledby` are assigned `role="img"`; unnamed icons are marked `aria-hidden`.

For an icon inside an already labeled button or other control, leave the icon unnamed and put the accessible name on the control.

## Utilities and custom icons

The `@fluentui/react-native-icons/utils` entry point exports `FluentSvg`, `useIconState`, and `wrapIcon`, plus the `FluentSvgProps` and `FluentIconsProps` types.

`FluentSvg` applies the same color and accessibility behavior as generated icons. Without `size`, it defaults to a 24-by-24 viewport and `viewBox="0 0 20 20"`. With `size`, its default width, height, and viewBox all use that size. Explicit `width`, `height`, and `viewBox` values take precedence.

```tsx
import { Path } from 'react-native-svg';
import { FluentSvg } from '@fluentui/react-native-icons/utils';
import type { FluentIconsProps } from '@fluentui/react-native-icons/utils';

export function DiamondIcon(props: FluentIconsProps) {
  return (
    <FluentSvg size={20} {...props}>
      <Path d="M10 2 18 10 10 18 2 10Z" />
    </FluentSvg>
  );
}
```

Here the path inherits the root fill, so `primaryFill` works without a per-path fill expression. Preserve explicit fills when custom artwork needs multiple colors or other SVG paint behavior.

`useIconState` normalizes color and accessibility props. `wrapIcon` remains available for compatibility, but generated icons no longer use it. `useIconState`, `wrapIcon`, and the `FluentIconsProps` type also remain exported from the package root.

## Package output and code generation

The package provides ESM in `lib/` and CommonJS in `lib-cjs/`, with TypeScript declarations. Package exports select the appropriate format. Use the public root and `/utils` entry points rather than internal generated chunk paths.

The `convert:rnsvg` step generates components from the prepared SVGs in `intermediate/`:

- Each icon renders `FluentSvg` directly, using an inferred component name instead of a generated `displayName` assignment.
- Square sized icons use `size`; default dimensions and conformant viewBoxes are omitted.
- Simple monochrome shapes inherit the root fill. Complex artwork retains explicit fills where needed.
- Eligible resizable and size-20 components live in the same chunk and share path-data strings, without an extra icon component layer. Short paths remain inline when sharing would increase code size.
- Barrels use `export *`; sized chunks re-export colocated components to preserve existing bindings.

Icons are still grouped into chunks. Named imports and side-effect-free modules allow tree-shaking where supported, but the code included in an application depends on its bundler.

## Development

Use the repository's Yarn 4 setup with Node.js 22 or 24. From the repository root:

```sh
corepack enable
yarn install --immutable
```

If `packages/react-native-icons/intermediate/` is not already prepared, generate and optimize the SVG inputs first:

```sh
yarn nx run react-native-icons:copy
yarn nx run react-native-icons:optimize
yarn nx run react-native-icons:unfill
```

For code generation and an ESM-only build:

```sh
yarn nx run react-native-icons:convert:rnsvg
yarn nx run react-native-icons:build:esm
yarn nx run react-native-icons:test
yarn nx run react-native-icons:lint
```

`build:esm` runs TypeScript only; it does not regenerate icons. The package uses TypeScript 7, targets ES2022, and uses the automatic React JSX transform (`react-jsx`). `build:cjs` separately emits CommonJS, while the full `build` script refreshes the SVG inputs and builds both formats.

Edit source assets, `convert-rn.js`, or handwritten utilities as appropriate. Do not hand-edit generated files in `src/icons/`, `src/sizedIcons/`, `src/index.tsx`, `lib/`, or `lib-cjs/`.

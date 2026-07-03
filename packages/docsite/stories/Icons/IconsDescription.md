The `@fluentui/react-icons` package provides the [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) icon set. Each icon is a React component backed by SVG graphics. Icons come in multiple styles: `Regular` and `Filled` for most icons, plus `Light` and `Color` variants for a select subset.

> **⚠️ Note:** `Color` icon variants are deprecated due to accessibility issues. See the <a href="./?path=/docs/icons-color-variants--docs" target="_top">Color Variants</a> page for details and migration guidance.

## Browse the catalog

Not sure which icon you need? Explore the full set in the <a href="./?path=/docs/icons-catalog--docs" target="_top">icon catalog</a> — search by name and pick the component to use.

## Sized icons vs unsized icons

- **Unsized** icons (e.g., `SendRegular`, `SendFilled`, etc.) are set to `1em` in size and can be adjusted proportionally using the `fontSize` property.
- **Sized** icons (e.g., `Send24Regular`, `Send32Regular`) are fixed to predetermined sizes and do not scale.

As a general guideline, it's recommended to utilize unsized icons since the same instance of an icon can be reused multiple times. However, there are instances where icons may not scale effectively. For example, icons containing logos and signs often have varied glyph sizes. In such cases, it's advisable to opt for sized icons.

## Rendering approaches

Icons can be delivered three ways, trading off bundle size, render performance, and styling:

- **Inline SVG** (default) — each icon is an SVG React component; zero setup and full styling flexibility.
- **Icon fonts** — a single font glyph per icon; best when many icons render on screen at once.
- **SVG sprites** (⚠️ preview) — browser-cached sprite references; small JS with pixel-perfect SVG.

See the <a href="./?path=/docs/icons-rendering-approaches--docs" target="_top">Rendering Approaches</a> page for the full comparison and setup.

## Default (Griffel) vs Headless

- **Default** icons (imported from `@fluentui/react-icons`) are styled with [Griffel](https://github.com/microsoft/griffel) and work with zero setup — styles are injected at runtime.
- **Headless** icons (imported from `@fluentui/react-icons/headless/*`) ship **no** CSS-in-JS runtime; you opt into styling by importing a small vanilla CSS file once. This yields smaller JS bundles, especially with CSS extraction.

The **default** icons are the right choice for most applications. Reach for the **headless** icons when you build with the [Fluent UI Headless components](https://storybooks.fluentui.dev/headless/?path=/docs/overview-introduction--docs), which are Griffel-free by design — pairing them with headless icons keeps your app free of the CSS-in-JS runtime. See the <a href="./?path=/docs/icons-headless-api--docs" target="_top">Headless API</a> page for details and the <a href="./?path=/docs/icons-bundle-size--docs" target="_top">Bundle Size</a> page for the trade-offs.

## Barrel imports vs Atomic API

- **Barrel** imports (`import { SendRegular } from '@fluentui/react-icons'`) are the default and simplest to use, but pull icons in through the package entry point, which bundlers tree-shake less effectively.
- **Atomic** imports (`import { SendRegular } from '@fluentui/react-icons/svg/send'`) resolve each icon from its own grouped module, giving bundlers the best possible tree-shaking and smaller bundles.

The **atomic** API is preferred for production apps. You don't need to rewrite your imports by hand — keep the ergonomic barrel imports in your source and let a **build-time transform** rewrite them to atomic paths automatically. See the <a href="./?path=/docs/icons-atomic-api--docs" target="_top">Atomic API</a> and <a href="./?path=/docs/icons-build-transforms--docs" target="_top">Build Transforms</a> pages for details.

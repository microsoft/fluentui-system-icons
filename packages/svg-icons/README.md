# @fluentui/svg-icons

Fluent UI System Icons as SVG files, for HTML, server templates, or any framework. No React or CSS-in-JS dependency.

[Browse the SVG catalogue](https://microsoft.github.io/fluentui-system-icons/?path=/docs/svg-icons-catalog--docs) to preview artwork and copy exact package paths. For ready-made React components, use [`@fluentui/react-icons`](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/react-icons/README.md).

## Installation

```sh
npm install @fluentui/svg-icons
```

Import individual files under `icons/`; there is no package-root JavaScript API. Bundlers determine whether an SVG import returns a URL or markup.

## Usage

### CDN or local public assets

Copy selected files from `node_modules/@fluentui/svg-icons/icons/` into your public assets:

```html
<img src="/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

`/icons/` is your site's URL, not a service exposed by installing the package. Explicit dimensions reserve layout space. Use `alt=""` for decorative images.

Alternatively, use a CDN URL directly in the image's `src`, without installing the package:

```text
https://unpkg.com/@fluentui/svg-icons@latest/icons/{name}_{size}_{style}.svg
```

```html
<img src="https://unpkg.com/@fluentui/svg-icons@latest/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

Pin an exact version instead of `latest` in production. For localized or directional directories, retain that directory after `icons/`.

### Usage with bundlers

Vite, Webpack 5, and Rspack can import SVGs as asset URLs or markup without an SVG loader. These examples use `?url` for a URL and `?raw` for markup:

```js
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';
```

- **Vite:** Both queries work out of the box.
- **Webpack 5:** Use native asset-module rules, or the built-in query support in [5.109+ with `experiments.futureDefaults`](https://webpack.js.org/guides/asset-modules/#built-in-query-suffixes).
- **Rspack:** Use native asset-module rules to map the queries to URLs or text.

#### Vite

Vite supports `?url` and `?raw` out of the box; no SVG plugin is needed. TypeScript projects should include Vite's asset declarations through `vite/client`, usually in `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

#### Webpack 5 and Rspack

Both bundlers provide built-in asset modules; no SVG loader or plugin is needed. Add mutually exclusive rules in `webpack.config.js` or `rspack.config.js` so the `?url` and `?raw` queries have the meanings used above:

[Webpack 5.109+ with `experiments.futureDefaults`](https://webpack.js.org/guides/asset-modules/#built-in-query-suffixes) recognizes these queries without custom rules. The explicit rules below also work with older Webpack 5 versions and Rspack; skip them if your configuration already handles these imports.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          { resourceQuery: /[?&]raw(?:&|$)/, type: 'asset/source' },
          { resourceQuery: /[?&]url(?:&|$)/, type: 'asset/resource' },
          { type: 'asset/resource' },
        ],
      },
    ],
  },
};
```

Exclude these imports from other matching SVG rules so they are not processed twice. No SVG loader is needed.

For TypeScript, declare the imports as strings in a declaration file included by your project:

```ts
declare module '*.svg?url' {
  const url: string;
  export default url;
}

declare module '*.svg?raw' {
  const markup: string;
  export default markup;
}
```

## File API contract

Filenames follow `{name}_{size}_{style}.svg`:

- `name`: Lowercase, underscore-separated icon name.
- `size`: Native artwork size. Available sizes include `10`, `12`, `16`, `20`, `24`, `28`, `32`, and `48`.
- `style`: Artwork variant, as listed below.

Not every size, style, or locale combination exists. The installed package's files are the availability contract. Prefer native-size artwork where available; these files do not have React's resizable `1em` variants.

### Variants

The `{style}` filename value selects the artwork variant:

- **`regular`:** Regular-weight design.
- **`filled`:** Filled design.
- **`light`:** Thin-stroke design, available for selected icons and sizes.
- **`color`:** Deprecated multicolor design that preserves its palette and gradients. Prefer the other variants; see [Color variants](https://microsoft.github.io/fluentui-system-icons/?path=/docs/icons-color-variants--docs).

For example: `mail_32_regular.svg`, `mail_32_filled.svg`, and `mail_32_light.svg`. Not every icon, size, locale, and variant combination exists; no variant conversion or fallback is provided.

### Locales and direction

Examples below are relative to `@fluentui/svg-icons/icons/`.

| Artwork               | Existing files                                                    |
| --------------------- | ----------------------------------------------------------------- |
| Default               | `mail_24_regular.svg`                                             |
| Locale directory      | `es/text_bold_24_regular.svg`, `sr-cyrl/text_bold_24_regular.svg` |
| Direction in filename | `text_direction_horizontal_rtl_24_regular.svg`                    |
| Localized direction   | `ko/text_direction_horizontal_rtl_24_regular.svg`                 |
| LTR directory         | `LTR/text_number_list_rotate_270_20_regular.svg`                  |
| RTL directory         | `RTL/text_number_list_rotate_270_20_regular.svg`                  |

- **Locale:** `icons/{locale}/{name}_{size}_{style}.svg`. Language-only (`es`) and language-plus-script (`sr-cyrl`) codes use this same layout. Preserve spelling, hyphens, and case. Do not append React's locale export suffixes to SVG filenames.
- **Direction:** Choose an existing `_ltr`/`_rtl` filename, including localized variants, or a file under `icons/LTR/{name}_{size}_{style}.svg` or `icons/RTL/{name}_{size}_{style}.svg`. These case-sensitive directories contain only a small subset of artwork, not universal alternates for every icon.
- **Fallback:** No locale detection, fallback, or automatic mirroring is provided. HTML `dir="rtl"` does not switch artwork. Your application selects an available file and any fallback; do not blanket-mirror localized letterforms.
- **Upgrades:** Removed or renamed files break references. Check the [changelog](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/svg-icons/CHANGELOG.md); do not infer SVG paths or versions from React exports.

## Rendering approaches

| Delivery   | Best for                                       | Color and styling                                              |
| ---------- | ---------------------------------------------- | -------------------------------------------------------------- |
| `<img>`    | Ordinary image loading and browser caching     | Set dimensions; page `color` and `fill` do not recolor the SVG |
| CSS mask   | Themeable monochrome UI icons                  | Paint the silhouette with `background-color: currentColor`     |
| Inline SVG | Native SVG styling and accessibility semantics | Set `fill: currentColor`; fixed child fills take precedence    |

Embed only trusted SVG markup. Scope local IDs and references per inline instance; external images isolate their SVG IDs.

## Monochrome recoloring options

Set `color` on the surrounding control. A mask uses `background-color: currentColor`; inline SVG uses `fill: currentColor`. External images cannot inherit the page's color.

The build strips the primary `#212121` design fill. SVG defaults to black; other fixed child fills take precedence over an inherited fill. A non-Color filename is not a guarantee of full recolorability.

### Monochrome CSS masks

Use a mask when an icon should follow the surrounding text color. The SVG supplies the shape; CSS paints that shape with `currentColor`. Unlike an `<img>`, changing the button's CSS `color` also recolors the icon.

The visible Inbox text names the button, so the icon is hidden from screen readers:

```html
<button type="button">
  <span class="icon-mask" aria-hidden="true"></span>
  Inbox
</button>
```

```css
.icon-mask {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  background-color: currentColor;
  -webkit-mask-image: var(--icon-url, url('/icons/mail_24_regular.svg'));
  mask-image: var(--icon-url, url('/icons/mail_24_regular.svg'));
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  forced-color-adjust: preserve-parent-color;
}
```

For a bundled URL, set the same CSS variable from your application:

```js
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

document.querySelector('.icon-mask').style.setProperty('--icon-url', `url("${mailUrl}")`);
```

Masks discard the artwork's palette. Serve them from the same origin or satisfy CORS, and permit the URL in your content security policy.

See [Accessibility when recoloring](#accessibility-when-recoloring) for contrast and high-contrast behavior, including why the mask uses `preserve-parent-color`.

## Accessibility when recoloring

### Accessible names

- Give icon-only buttons an accessible name on the **button**, for example `aria-label="Inbox"`, and hide the icon with `aria-hidden="true"`. An existing visible button label already provides its name.
- For standalone meaningful images, use descriptive `alt` text. For standalone meaningful masks or inline SVG hosts, use `role="img"` with an accessible name. For decorative images, use `alt=""`; for decorative masks or inline SVG hosts, use `aria-hidden="true"` instead of `role="img"` and `aria-label`.

### Color and contrast

- Do not use color alone to convey status: pair it with text or a distinguishable shape. Recoloring does not change an icon's accessible name.
- When an icon is needed to understand a control or state, its essential shape needs at least [3:1 contrast against adjacent colors (WCAG 1.4.11)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Text labels have their own [text contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Check light/dark themes and interaction states rather than assuming a selected color passes.

### Forced colors and high contrast

In forced-colors mode, the browser substitutes a user's chosen palette. Inline SVG using `fill: currentColor` can follow the surrounding system-adjusted text color. An external `<img>` does not inherit page color, so check its visibility against the adjusted background.

CSS masks paint a background through the SVG's shape. That shape can disappear when forced-colors mode remaps the background paint. Apply this setting to the **mask element only**, not the entire button:

```css
.icon-mask {
  color: inherit;
  background-color: currentColor;
  forced-color-adjust: preserve-parent-color;
}
```

`currentColor` handles ordinary recoloring. `preserve-parent-color` keeps the mask's background paint while allowing its inherited `color` to follow the parent's system-adjusted text color. It does not preserve the original brand color. Do not set `forced-color-adjust: none` on the entire control to prevent the user's palette from taking effect.

Support for `preserve-parent-color` varies; see [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust#browser_compatibility). Where unsupported, use inline SVG with `fill: currentColor` rather than an unverified mask. Feature detection alone does not establish visibility or contrast.

### Verification

Check that meaningful icons, labels, focus indicators, and control states remain distinguishable in light/dark themes and real high-contrast modes. Browser forced-colors emulation is useful, but also test the operating-system/browser combinations you support. Confirm accessible names with a screen reader; do not rely on the icon's color to communicate meaning.

# @fluentui/svg-icons

The official framework-agnostic SVG asset package for Fluent UI System Icons. Use optimized SVG files directly in HTML, server-rendered templates, vanilla JavaScript, Vue, Svelte, Angular, or React. No React wrapper, icon runtime, or CSS-in-JS library is required.

Choose this package when you want to own icon delivery and styling. For ready-made React components, automatic metadata-driven mirroring, and React-specific helpers, use [`@fluentui/react-icons`](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/react-icons/README.md). Its headless API also requires React.

[Live examples and guidance](https://microsoft.github.io/fluentui-system-icons/?path=/docs/svg-icons-overview--docs)

## Installation

```sh
npm install @fluentui/svg-icons
```

The package contains individual files under `icons/`, not JavaScript component exports. Import the files you use; there is no package-root icon API. How an SVG import is handled depends on your build tool. Native JavaScript cannot import SVG markup as a component.

## Icon names and availability

Default artwork follows `[name]_[size]_[style].svg`, for example `mail_24_regular.svg`.

- `name`: Lowercase, underscore-separated icon name.
- `size`: Native artwork size. Available sizes include `10`, `12`, `16`, `20`, `24`, `28`, `32`, and `48`.
- `style`: `regular`, `filled`, `light`, or `color` (deprecated).

Not every icon has every size or style. Locale-specific artwork is also a subset. Check the files in your installed version rather than assuming a combination exists. Prefer artwork drawn for your intended display size; SVGs can also be scaled with CSS `width` and `height`. Unlike React's resizable components, these files have native dimensions, not a default `1em` size.

### Icon styles

`regular` and `filled` are available for most icons. `light` is a thinner monochrome style available for selected icons, for example `mail_32_light.svg`. Light artwork is not restricted to one size across the entire collection.

The primary monochrome design fill is removed during the build. For inline SVG, set **`fill: currentColor`** explicitly to follow text color, or set another `fill`. SVG's default fill is black; removing the design fill does not automatically make it `currentColor`.

`color` files preserve their multiple fills and gradients and are intended to be displayed as-is. They cannot be recolored like monochrome artwork.

> **Deprecated:** Avoid color variants for new work because of high-contrast and dark-theme accessibility issues. Prefer monochrome styles. See the [Color Variants guidance](https://microsoft.github.io/fluentui-system-icons/?path=/docs/icons-color-variants--docs).

### Localized and directional icons

Localized artwork lives in subdirectories, **not** React-style filename suffixes:

```js
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_24_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_24_regular.svg?url';
```

These are explicit artwork choices, with no automatic locale detection or fallback. Preserve directory spelling and case, including hyphens in `sr-cyrl`.

Direction-specific artwork includes filenames such as `text_direction_horizontal_rtl_24_regular.svg`, as well as assets under `LTR/` and `RTL/`. Select the appropriate file explicitly. Setting HTML `dir="rtl"` does not select or mirror an SVG asset. Only mirror icons where their meaning and source directionality permit it; do not blanket-mirror localized letterforms or all icons in RTL interfaces.

## Direct usage

| Delivery   | Best for                                       | Color and styling                                              |
| ---------- | ---------------------------------------------- | -------------------------------------------------------------- |
| `<img>`    | Ordinary image loading and browser caching     | Set dimensions; page `color` and `fill` do not recolor the SVG |
| CSS mask   | Themeable monochrome UI icons                  | Paint the silhouette with `background-color: currentColor`     |
| Inline SVG | Native SVG styling and accessibility semantics | Set `fill: currentColor` for monochrome artwork                |

### HTML without a bundler

Copy the selected files from `node_modules/@fluentui/svg-icons/icons/` into your site's public assets during your build or deployment. Then reference the served URL:

```html
<img src="/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

`/icons/` is your own public asset location. Browsers do not resolve npm package specifiers in `src`; installing the package does not expose a public URL or serve `node_modules` automatically. Keep explicit dimensions to reserve space before loading. Use `alt=""` when an image is decorative.

External images isolate each SVG's IDs, including when displaying repeated copies of a color icon. However, the page's CSS `color` and `fill` do not reach inside an `<img>` or a CSS background image. Use a mask or inline SVG when monochrome icons must follow the surrounding text color.

### CDN without installation

Alternatively, load individual SVGs from UNPKG without installing the package, copying files, or using a bundler:

```text
https://unpkg.com/@fluentui/svg-icons@latest/icons/{name}_{size}_{style}.svg
```

```html
<img src="https://unpkg.com/@fluentui/svg-icons@latest/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

`@latest` follows the latest published release. For production, replace `latest` with an exact package version to keep asset URLs stable across releases. This option requires access to the third-party CDN; the same external-image styling and accessibility guidance applies.

### Asset URLs with a bundler

With Vite, `?url` explicitly requests an asset URL. The Webpack 5 configuration below supports the same syntax:

```js
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

const image = document.createElement('img');
image.src = mailUrl;
image.width = image.height = 24;
image.alt = 'Mail';
document.body.append(image);
```

The URL may refer to an emitted file or a data URL depending on your bundler's asset settings. No SVG loader or conversion to a framework component is needed.

### Monochrome CSS masks

Serve the SVG as an asset, and use it as a mask. The icon is decorative here because the button's visible text provides its accessible name:

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

Masks use transparency, not the artwork's original colors, and are unsuitable for preserving multicolor icons. External mask requests must satisfy your browser's origin/CORS requirements; serving from the same origin is the simplest option. Ensure your content security policy permits the selected asset URLs.

In forced-colors mode, browsers may remove background colors. `forced-color-adjust: preserve-parent-color` preserves the mask's paint while inheriting the surrounding control's adjusted text color. Unlike `none`, it does not retain an unadjusted inherited brand color. Do not opt the whole control out or hardcode the mask color. Check support for this value in your target browsers and test high-contrast themes; use inline SVG when the required mask behavior is unsupported.

### Trusted inline SVG

Include the SVG markup directly in your HTML or server template at build time, or import it as a string. Vite's `?raw` and the Webpack configuration below return markup:

```html
<span id="mail-icon" class="icon-inline" role="img" aria-label="Mail"></span>
```

```css
.icon-inline {
  display: inline-flex;
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.icon-inline > svg {
  width: 100%;
  height: 100%;
}
```

```js
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';

const host = document.getElementById('mail-icon');
host.innerHTML = mailMarkup;
host.querySelector('svg').setAttribute('focusable', 'false');
```

Only insert **trusted SVG markup**, such as these installed package assets. Never interpolate untrusted SVG/HTML into this pattern. No client-side insertion is necessary when your build or server can include the markup directly.

For decorative inline icons, use `aria-hidden="true"` on the host instead of `role="img"` and `aria-label`. When an icon is the only content of a button, give the **button** an accessible name and hide the decorative icon from assistive technology.

Color files namespace local IDs using the filename, for example `ic_fluent_mail_24_color__a`. This distinguishes different filenames, **not repeated inline instances of the same SVG**. Repeated copies still need instance-unique IDs and matching references, or use external `<img>` elements for isolation. Raw SVG files do not provide React's `idPrefix` prop.

## Bundler configuration

### Vite

Vite supports `?url` and `?raw` out of the box; no SVG plugin is needed for these recipes. TypeScript projects should include Vite's asset declarations through `vite/client`, usually in `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

### Webpack 5

Use built-in asset modules for URL and markup imports, with mutually exclusive rules:

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

Merge this into your existing configuration. Exclude these imports from any other matching SVG rules, such as component loaders, so they are not processed twice. No `svg-inline-loader` dependency is required.

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

Other bundlers can use their equivalent URL or text-asset handling. The package does not ship a React transform or TypeScript component types.

## Direct use in React

Use the same URL with a native image element. You do not need to turn the SVG into a React component:

```tsx
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

<img src={mailUrl} width={24} height={24} alt="Mail" />;
```

For a monochrome mask, reuse the `.icon-mask` CSS above and supply the bundled asset URL:

```tsx
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

<button type="button" aria-label="Open inbox">
  <span
    className="icon-mask"
    aria-hidden="true"
    style={{ maskImage: `url("${mailUrl}")`, WebkitMaskImage: `url("${mailUrl}")` }}
  />
</button>;
```

These elements use native HTML/CSS, not `FluentIconsProps`, `primaryFill`, `bundleIcon`, or React icon providers. Your application owns sizing, accessibility, directionality, and any variant switching.

## Upgrading and browsing

Artwork and availability evolve with the shared icon set. Removed or renamed files break references to those paths, so review the [package changelog](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/svg-icons/CHANGELOG.md) when upgrading. Do not assume the SVG and React packages have matching versions or import names.

- [Regular icons](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md)
- [Filled icons](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_filled.md)
- [Light icons](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_light.md)
- [Source artwork and metadata](https://github.com/microsoft/fluentui-system-icons/tree/main/assets)
- [SVG usage examples](https://microsoft.github.io/fluentui-system-icons/?path=/docs/svg-icons-overview--docs)

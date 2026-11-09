`@fluentui/svg-icons` provides Fluent UI System Icons as SVG files, with no React or CSS-in-JS dependency.

[Browse the SVG catalogue](?path=/docs/svg-icons-catalog--docs) to find artwork and copy its exact package path.

## Installation

```sh
npm install @fluentui/svg-icons
```

## Usage

### CDN or local public assets

Copy selected SVGs into your site's public assets and reference their served URLs:

```html
<img src="/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

Or use UNPKG without installation:

```text
https://unpkg.com/@fluentui/svg-icons@latest/icons/{name}_{size}_{style}.svg
```

Pin an exact version instead of `latest` in production. For localized assets, include the directory after `icons/`, for example `icons/es/text_bold_24_regular.svg`.

### Usage with bundlers

Vite, Webpack 5, and Rspack can import SVGs as asset URLs or markup without an SVG loader. These examples use `?url` for a URL and `?raw` for markup:

```js
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';
```

- **Vite:** Both queries work out of the box.
- **Webpack 5:** Use native asset-module rules, or the built-in query support in [5.109+ with `experiments.futureDefaults`](https://webpack.js.org/guides/asset-modules/#built-in-query-suffixes).
- **Rspack:** Use native asset-module rules to map the queries to URLs or text.

## File API contract

Import individual files from `@fluentui/svg-icons/icons/`. There is no package-root JavaScript API. The installed package's files determine availability; the catalogue lists paths from the documented version. Examples below are relative to `icons/`.

Filenames follow `{name}_{size}_{style}.svg`. Names use lowercase and underscores. Native artwork sizes include `10`, `12`, `16`, `20`, `24`, `28`, `32`, and `48`; these files do not have React's resizable `1em` variants.

### Variants

The `{style}` filename value selects the artwork variant:

- **`regular`:** Regular-weight design.
- **`filled`:** Filled design.
- **`light`:** Thin-stroke design, available for selected icons and sizes.
- **`color`:** Deprecated multicolor design that preserves its palette and gradients. Prefer the other variants; see [Color variants](?path=/docs/icons-color-variants--docs).

For example: `mail_32_regular.svg`, `mail_32_filled.svg`, and `mail_32_light.svg`. Not every icon, size, locale, and variant combination exists; no variant conversion or fallback is provided.

### Locales and direction

| Artwork               | Existing files                                                    |
| --------------------- | ----------------------------------------------------------------- |
| Default               | `mail_24_regular.svg`                                             |
| Locale directory      | `es/text_bold_24_regular.svg`, `sr-cyrl/text_bold_24_regular.svg` |
| Direction in filename | `text_direction_horizontal_rtl_24_regular.svg`                    |
| LTR directory         | `LTR/text_number_list_rotate_270_20_regular.svg`                  |
| RTL directory         | `RTL/text_number_list_rotate_270_20_regular.svg`                  |

- **Locale:** `icons/{locale}/{name}_{size}_{style}.svg`. Language-only (`es`) and language-plus-script (`sr-cyrl`) codes use this same layout. Preserve spelling, hyphens, and case; do not append React's locale export suffixes to SVG filenames.
- **Direction:** Choose an existing `_ltr`/`_rtl` filename or a file under `icons/LTR/{name}_{size}_{style}.svg` or `icons/RTL/{name}_{size}_{style}.svg`. These case-sensitive directories are not universal alternate locations.
- **Fallback:** No locale detection, fallback, or automatic mirroring is provided. HTML `dir="rtl"` does not switch artwork. Your application chooses an available file and any fallback.

## Rendering approaches

- **Image:** Load a URL with `<img>` for ordinary image loading and browser caching. Page `color` and `fill` do not reach inside the SVG.
- **CSS mask:** Use the SVG as a silhouette painted by CSS. Best for monochrome icons that follow text color.
- **Inline SVG:** Embed package markup when you need SVG styling. Use only trusted markup and scope local IDs/references per instance; external images isolate their SVG IDs.

## Monochrome recoloring options

Set `color` on the surrounding control. CSS masks use `background-color: currentColor`; inline SVG uses `fill: currentColor`. External images keep their own colors. Fixed child fills take precedence over an inherited fill.

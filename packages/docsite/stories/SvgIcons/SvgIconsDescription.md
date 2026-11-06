`@fluentui/svg-icons` is the official framework-agnostic SVG asset package for Fluent UI System Icons. Use it in HTML, server-rendered templates, vanilla JavaScript, or any framework, including React when you want to manage assets yourself. It has no React or CSS-in-JS runtime dependency.

For ready-made React components, automatic mirroring, and React-specific helpers, choose `@fluentui/react-icons` instead. Its headless API also requires React.

## Installation

```sh
npm install @fluentui/svg-icons
```

Import individual files, not the package root. SVG imports produce URLs or markup according to your build tool; they are not JavaScript component exports.

## Direct usage

For a site without a bundler, copy selected files from the installed package's `icons/` directory into your public assets. Then use an ordinary image:

```html
<img src="/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

The `/icons/` URL is your site's asset location, not a URL provided by the npm package. Reserve dimensions to avoid layout shift. Use `alt=""` for decorative images, and name icon-only buttons on the button itself.

Alternatively, load an SVG directly from UNPKG without installing the package or hosting the files yourself:

```text
https://unpkg.com/@fluentui/svg-icons@latest/icons/{name}_{size}_{style}.svg
```

```html
<img src="https://unpkg.com/@fluentui/svg-icons@latest/icons/mail_24_regular.svg" width="24" height="24" alt="Mail" />
```

`@latest` follows the latest published release. Pin an exact package version instead of `latest` for stable production asset URLs. CDN usage requires access to UNPKG and has the same external-image styling and accessibility limitations as locally hosted SVGs.

With Vite, import a URL explicitly:

```js
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

const image = document.createElement('img');
image.src = mailUrl;
image.width = image.height = 24;
image.alt = 'Mail';
document.body.append(image);
```

For Webpack 5, configure `asset/resource` for `?url` and `asset/source` for `?raw`. See the [complete package guide](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/svg-icons/README.md#bundler-configuration) for configuration and copyable CSS-mask and inline-SVG recipes.

## Choosing how to render

- **External image:** Ordinary image loading and caching. Set dimensions; page `color` and `fill` do not recolor the SVG.
- **CSS mask:** A themeable monochrome silhouette painted with `background-color: currentColor`. Multicolor details are lost.
- **Inline SVG:** Native SVG styling and semantics. Set `fill: currentColor` explicitly for monochrome artwork.

The **Monochrome coloring** example below applies the same selected CSS `color` to all three methods. The image stays black; only the mask and inline SVG follow the chosen color.

Monochrome assets have their primary design fill removed, but SVG's default fill is black, not `currentColor`. External images and CSS backgrounds do not inherit styles from the embedding document. Include inline markup at build time or from a trusted source; never insert untrusted SVG/HTML. Test masks in your supported browsers and forced-colors modes.

## Styles, sizes, and locales

Files follow `[name]_[size]_[style].svg`, with lowercase, underscore-separated names. Sizes include `10`, `12`, `16`, `20`, `24`, `28`, `32`, and `48`. Styles are `regular`, `filled`, `light`, and deprecated `color`. Availability varies by icon, size, style, and locale; use native-size artwork where available and CSS dimensions when scaling is necessary.

```js
import lightMailUrl from '@fluentui/svg-icons/icons/mail_32_light.svg?url';
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_24_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_24_regular.svg?url';
```

Localized artwork lives in directories, not React-style filename suffixes. Direction-specific artwork also exists, including `_ltr`/`_rtl` filenames and `LTR`/`RTL` directories. Choose the appropriate file explicitly: there is no locale detection, fallback, or automatic RTL mirroring. Do not blanket-mirror localized letterforms.

`color` artwork retains its fills and gradients and has accessibility limitations in high contrast and dark themes. Prefer monochrome styles. File-level ID prefixes distinguish different filenames, not repeated inline instances of the same file. External images isolate their SVG IDs; inline consumers must manage instance-unique IDs and references themselves. See [Color Variants guidance](?path=/docs/icons-color-variants--docs).

## Direct use in React

React can use the same URL or CSS-mask approach without converting SVGs into components:

```tsx
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

<img src={mailUrl} width={24} height={24} alt="Mail" />;
```

The examples below use React only as Storybook's host. The image, mask, and inline-SVG techniques themselves work without React. For full recipes and upgrade guidance, see the [package README](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/svg-icons/README.md).

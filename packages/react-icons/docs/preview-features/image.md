# Image API (CSS mask / `<img>`)

> **⚠️ Alpha** — this feature is available as an alpha prerelease only.
>
> Install via `npm i @fluentui/react-icons@prerelease`

The Image API renders icons **without any icon rendering in JavaScript**. Instead of shipping SVG
path data in your JS bundle, each icon component carries only a short hashed **URL** to its `.svg`
file. Monochrome icons are drawn with CSS `mask-image` (so they recolor like text via
`currentColor`), and the deprecated multicolor `*_color` icons are rendered as a native `<img>`.

## Benefits

- **Zero icon rendering in JS** — components render a `<span>` (mask) or `<img>` (color); no SVG path
  data is included in the JavaScript bundle
- **Smallest JS footprint** — each icon module is just a `createImageIcon('Name', url, width)` call;
  under `asset/resource` the imported `.svg` compiles to a short hashed URL string (~30–50 bytes)
- **CSS-driven coloring** — mask icons inherit `color` (`background-color: currentColor`), so they
  recolor like text; an explicit `primaryFill` overrides it
- **Strong caching** — every distinct icon is a content-hashed, immutably cacheable `.svg` file,
  fetched lazily in parallel over HTTP/2 and shared across the app
- **No CSS-in-JS runtime** — styling is a single opt-in vanilla CSS file (`image.css`)

## How it works

| Concern       | Mask icon (`<span>`)                                             | Color icon (`<img>`)                           |
| ------------- | ---------------------------------------------------------------- | ---------------------------------------------- |
| Element       | `<span class="fui-Icon-Image" style="--fui-img: url(...)">`      | `<img class="fui-Icon-Image-Color" src="...">` |
| Color         | `background-color: currentColor` masked by the SVG shape         | fixed multicolor (not recolorable)             |
| Sizing        | `1em` box scaled by `font-size` (sized variants pin `font-size`) | same                                           |
| RTL flip      | `[data-fui-icon-rtl] { transform: scaleX(-1) }`                  | same                                           |
| Accessibility | `title` → `aria-label` + `role="img"`, else `aria-hidden`        | `title` → `alt`, else `alt=""`                 |
| High-contrast | `forced-colors` → `background-color: CanvasText` (stays visible) | system default                                 |

> **Why two techniques?** CSS `mask-image` is the only one that can recolor a monochrome icon via
> CSS. `<img>` content is isolated and cannot be recolored, so it is used only for the deprecated
> multicolor `*_color` icons. Note that `mask-image` cannot reliably reference SVG `#fragment` ids
> across browsers, so each icon is served as its own whole `.svg` file (not a `<use>` sprite).

## CSS Setup

You **must** import the image CSS file — it provides the mask, coloring, RTL, and high-contrast
rules via class/attribute selectors:

```ts
import '@fluentui/react-icons/image/image.css';
```

## Bundler Setup

Your bundler must emit imported `.svg` files as **assets** (a URL), not inline them into JS:

- **webpack 5** — handled by default via [asset modules](https://webpack.js.org/guides/asset-modules/)
  (`type: 'asset/resource'`). Avoid `asset/inline` / `url-loader`, which would embed large base64
  strings into the JS bundle.
- **Vite / Rollup** — handled by default (`.svg` imports resolve to a URL).

## Usage

Image icons are grouped by icon kind and exposed via `@fluentui/react-icons/image/{icon-group}`:

```tsx
import '@fluentui/react-icons/image/image.css';

import { AccessTime20Filled, AccessTime24Regular } from '@fluentui/react-icons/image/access-time';
import { Add20Filled } from '@fluentui/react-icons/image/add';

function MyComponent() {
  return (
    <>
      {/* inherits text color */}
      <span style={{ color: 'rebeccapurple' }}>
        <AccessTime24Regular />
      </span>

      {/* explicit color */}
      <Add20Filled primaryFill="#0f6cbd" />

      {/* accessible label */}
      <AccessTime20Filled title="Access time" />
    </>
  );
}
```

### Coloring

Mask icons take their color from the surrounding text `color`:

```tsx
<span style={{ color: 'red' }}>
  <Add20Filled />
</span>
```

…or via the `primaryFill` prop, which overrides `color`:

```tsx
<Add20Filled primaryFill="red" />
```

### Sizing

Image icons are a `1em` box scaled by `font-size` (matching the `"1em"` width convention of the
other APIs). Resizable variants (e.g. `AddFilled`) inherit `font-size` from their context; sized
variants (e.g. `Add24Filled`) pin themselves to that pixel size.

```tsx
{
  /* 32px via font-size */
}
<span style={{ fontSize: 32 }}>
  <AddFilled />
</span>;
```

## API surface

| Export                                     | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| `@fluentui/react-icons/image`              | Factories, types, and constants                          |
| `@fluentui/react-icons/image/image.css`    | Opt-in vanilla CSS (mask, coloring, RTL, HCM)            |
| `@fluentui/react-icons/image/{icon-group}` | Per-group icon components (e.g. `.../image/access-time`) |
| `createImageIcon`                          | Factory for monochrome (CSS-mask) icons                  |
| `createImageColorIcon`                     | Factory for multicolor (`<img>`) icons                   |

## Notes & limitations

- **Color icons cannot be recolored** and do not participate in CSS mask styling — they are served
  as plain `<img>`. Color icons are deprecated.
- **Each icon is one HTTP request** for its hashed `.svg` (cached immutably). For small, curated
  icon sets a future build-time plugin may inline icons into a single CSS file (1 request) or a
  `<style>` block (0 requests); per-icon files are the default strategy for the general case.

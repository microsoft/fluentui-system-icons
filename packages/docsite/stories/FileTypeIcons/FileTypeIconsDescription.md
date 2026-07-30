The `@fluentui/react-icons-file-type` package renders Fluent file type icons (the raster/SVG glyphs used to represent documents, spreadsheets, folders, and other file types) as plain `<img>` elements sourced from CDN-hosted assets. It is a v9-compatible, dependency-light successor to the v8 `@fluentui/react-file-type-icons` package — there is no global icon registry, and the Fluent CDN is an overridable default rather than a value you must hardcode into your application code.

## Zero configuration

`FileTypeIcon` resolves its assets from the Fluent CDN by default, so it works out of the box — no provider or setup required.

```tsx
import { FileTypeIcon } from '@fluentui/react-icons-file-type';

<FileTypeIcon extension="docx" size={24} />;
```

## Configuring the asset host

Wrap a subtree with `FileTypeIconsProvider` to serve the icons from your own host (for example a same-origin CDN proxy). The `baseUrl` is resolved with the following precedence:

1. the `baseUrl` from the nearest `<FileTypeIconsProvider>`
2. the Fluent CDN default

```tsx
import { FileTypeIconsProvider, FileTypeIcon } from '@fluentui/react-icons-file-type';

<FileTypeIconsProvider baseUrl="https://my-cdn.example.com/item-types/">
  <FileTypeIcon extension="pptx" size={24} />
</FileTypeIconsProvider>;
```

## Icons without a file extension

Use the `type` prop with `FileIconType` for icons that aren't tied to a file extension, such as folders or lists.

```tsx
import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';

<FileTypeIcon type={FileIconType.folder} size={24} />;
```

## Styling: import the stylesheet

`FileTypeIcon` carries **no** CSS-in-JS runtime. It renders a single `<img>` tagged with a `data-fui-filetype-icon` attribute, and the styling that attribute needs lives in a plain CSS file the package ships:

```ts
import '@fluentui/react-icons-file-type/styles.css';
```

Without it the icon still renders, but loses `display: inline-block` and `object-fit: contain` — so a non-square asset stretches inside the square `width`/`height` box the `size` prop sets. That is a quieter failure than a blank icon, not a less real one.

The stylesheet is **unlayered**. Cascade layers are compared before specificity, so a layered rule of yours loses to an unlayered rule here no matter how specific it is. If your application organises its CSS with `@layer`, assign the stylesheet a layer at import time:

```css
@import '@fluentui/react-icons-file-type/styles.css' layer(base);
```

Shipping the layer inside the package would impose a layer name on the whole ecosystem, so the file stays unlayered and the obligation is documented instead.

You can also skip the shipped stylesheet entirely and write the two rules yourself, against the attribute or your own `className`:

```css
[data-fui-filetype-icon] {
  display: inline-block;
  object-fit: contain;
}
```

> **Upgrading from the `/headless` subpath?** `@fluentui/react-icons-file-type/headless` and `/headless/styles.css` are now deprecated aliases of `.` and `./styles.css` — the same module and the same file. They are removed in the next major.

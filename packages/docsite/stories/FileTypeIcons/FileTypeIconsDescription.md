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

## Headless (style-free) API

The default `FileTypeIcon` is styled with [Griffel](https://github.com/microsoft/griffel) so it works with zero setup. If you want to avoid bundling the Griffel runtime — for example to ship the smallest possible bundle or to own all styling yourself — import from the `/headless` subpath instead.

The headless component is identical in behavior (same props, same `src`/accessibility resolution) but ships **no** styling runtime. It tags the rendered `<img>` with a `data-fui-filetype-icon` attribute that you can style. Bring your own styles in one of two ways:

```tsx
// Option A: import the opt-in stylesheet once (reproduces the default box behavior)
import '@fluentui/react-icons-file-type/headless/styles.css';
import { FileTypeIcon } from '@fluentui/react-icons-file-type/headless';

<FileTypeIcon extension="docx" size={24} />;
```

```css
/* Option B: target the data attribute (or pass your own className) with your own CSS */
[data-fui-filetype-icon] {
  display: inline-block;
  object-fit: contain;
}
```

The `/headless` entry point re-exports the same `FileTypeIconsProvider`, `useFileTypeIconsContext`, `FileIconType`, and constants, so it is fully usable on its own. Prefer the default `@fluentui/react-icons-file-type` entry point unless you specifically need to drop the Griffel runtime.

| Entry point                                 | Griffel runtime | Styling                                            |
| ------------------------------------------- | --------------- | -------------------------------------------------- |
| `@fluentui/react-icons-file-type` (default) | included        | Griffel, zero setup                                |
| `@fluentui/react-icons-file-type/headless`  | none            | bring your own (`headless/styles.css` or your CSS) |

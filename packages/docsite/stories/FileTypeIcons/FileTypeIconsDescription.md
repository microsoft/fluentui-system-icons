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

## Migrating from v8 (`@fluentui/react-file-type-icons`)

The v9 package is **not** a drop-in re-export of v8 — the package name is different, several v8
APIs are intentionally not ported, and `FileIconType` is now a `const` object. See the dedicated
**File Type Icons → Migration (v8 → v9)** page for the full, step-by-step guide (package rename,
removing `initializeFileTypeIcons()`, the `getFileTypeIconProps`/`<Icon>` → `FileTypeIcon`
rewrite, configuring a custom CDN, and the list of v8 APIs that were not ported).

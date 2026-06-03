The `@fluentui/react-icons-file-type` package renders Fluent file type icons (the raster/SVG glyphs used to represent documents, spreadsheets, folders, and other file types) as plain `<img>` elements sourced from CDN-hosted assets. It is a v9-compatible, dependency-light successor to the v8 `@fluentui/react-file-type-icons` package — there is no global icon registry, and the Fluent CDN is an overridable default rather than a value you must hardcode into your application code.

## Zero configuration

`FileTypeIcon` resolves its assets from the Fluent CDN by default, so it works out of the box — no provider or setup required.

```tsx
import { FileTypeIcon } from '@fluentui/react-icons-file-type';

<FileTypeIcon extension="docx" size={24} />;
```

## Configuring the asset host

Wrap a subtree with `FileTypeIconsProvider` to serve the icons from your own host (for example a same-origin CDN proxy). The `baseUrl` is resolved with the following precedence:

1. the `baseUrl` prop on `<FileTypeIcon>` (per-icon override)
2. the `baseUrl` from the nearest `<FileTypeIconsProvider>`
3. the Fluent CDN default

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

In v8 you registered the icons globally and rendered them through the v8 `<Icon>` component:

```tsx
// v8
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
import { Icon } from '@fluentui/react';
import { getFileTypeIconProps } from '@fluentui/react-file-type-icons';

// once, at app startup
initializeFileTypeIcons();

<Icon {...getFileTypeIconProps({ extension: 'docx', size: 24 })} />;
```

In v9 there is no global registry. The Fluent CDN is still the default asset host, but it is now an overridable default of `FileTypeIconsProvider` rather than hardcoded into your app — render `FileTypeIcon` directly:

```tsx
// v9
import { FileTypeIcon } from '@fluentui/react-icons-file-type';

<FileTypeIcon extension="docx" size={24} />;
```

Key differences:

| v8                                                      | v9                                                                                             |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `initializeFileTypeIcons()` required at startup         | Not needed — remove the call                                                                   |
| `<Icon {...getFileTypeIconProps(options)} />`           | `<FileTypeIcon {...options} />`                                                                |
| Custom CDN passed to `initializeFileTypeIcons(baseUrl)` | `<FileTypeIconsProvider baseUrl="...">` (or the `baseUrl` prop); the Fluent CDN is the default |
| Icons registered into the global icon registry          | No global state; assets resolved per render                                                    |

`getFileTypeIconProps` is still exported for advanced scenarios, but most code can switch to the `FileTypeIcon` component. The `getFileTypeIconAsUrl` and `getFileTypeIconAsHTMLString` helpers cover non-React usage.

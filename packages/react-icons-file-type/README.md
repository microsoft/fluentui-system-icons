# @fluentui/react-icons-file-type

File type icon components for React, rendered from Microsoft Fluent CDN-hosted assets. A v9-compatible, dependency-light successor to the v8 `@fluentui/react-file-type-icons` package — no global icon registry and no CDN hardcoded inside the component.

## Installation

```bash
npm install @fluentui/react-icons-file-type
```

## Usage

### Zero configuration

The icon resolves its assets from the Fluent CDN by default, so it works out of the box — no provider or setup required.

```tsx
import { FileTypeIcon } from '@fluentui/react-icons-file-type';

function Example() {
  return <FileTypeIcon extension="docx" size={24} />;
}
```

### Configure the asset host once

Wrap your app (or a subtree) with `FileTypeIconsProvider` to serve the icons from your own host — for example a same-origin CDN proxy.

```tsx
import { FileTypeIconsProvider, FileTypeIcon } from '@fluentui/react-icons-file-type';

function App() {
  return (
    <FileTypeIconsProvider baseUrl="https://my-cdn.example.com/item-types/">
      <FileTypeIcon extension="pptx" size={24} />
    </FileTypeIconsProvider>
  );
}
```

`baseUrl` resolution precedence:

1. the `baseUrl` prop on `<FileTypeIcon>` (per-icon override)
2. the `baseUrl` from the nearest `<FileTypeIconsProvider>`
3. the Fluent CDN default

### Icons without a file extension

Use the `type` prop with `FileIconType` for icons that aren't tied to an extension (folders, lists, etc.).

```tsx
import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';

<FileTypeIcon type={FileIconType.folder} size={24} />;
```

### Framework-agnostic helpers

For non-React environments or custom rendering:

```tsx
import {
  getFileTypeIconAsUrl,
  getFileTypeIconAsHTMLString,
  getFileTypeIconProps,
} from '@fluentui/react-icons-file-type';

getFileTypeIconAsUrl({ extension: 'docx', size: 24 }); // -> "https://.../24/docx.svg"
getFileTypeIconAsHTMLString({ extension: 'docx', size: 24 }); // -> "<img ... />"
getFileTypeIconProps({ extension: 'docx', size: 24 }); // -> { iconName, 'aria-label' }
```

All helpers accept an optional `baseUrl` second argument and default to the Fluent CDN.

## Migrating from `@fluentui/react-file-type-icons` (v8)

- Remove the global `initializeFileTypeIcons()` call — it is no longer needed.
- Replace `<Icon {...getFileTypeIconProps(options)} />` with `<FileTypeIcon {...options} />`.
- To use a custom CDN, wrap with `<FileTypeIconsProvider baseUrl="...">` instead of passing a base URL to `initializeFileTypeIcons()`.

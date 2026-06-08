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

1. the `baseUrl` from the nearest `<FileTypeIconsProvider>`
2. the Fluent CDN default

### Icons without a file extension

Use the `type` prop with `FileIconType` for icons that aren't tied to an extension (folders, lists, etc.).

```tsx
import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';

<FileTypeIcon type={FileIconType.folder} size={24} />;
```

## Migrating from `@fluentui/react-file-type-icons` (v8)

- Remove the global `initializeFileTypeIcons()` call — it is no longer needed.
- Replace `<Icon {...getFileTypeIconProps(options)} />` with `<FileTypeIcon {...options} />`.
- To use a custom CDN, wrap with `<FileTypeIconsProvider baseUrl="...">` instead of passing a base URL to `initializeFileTypeIcons()`.

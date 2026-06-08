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

> This section is written to be self-contained for both humans and automated agents. It lists
> the exact package/API differences and the rewrite for each v8 usage pattern.

### 1. Package name changed

The package name is **different** (the words are reordered). Update `package.json` and every import.

|          | Package                           |
| -------- | --------------------------------- |
| v8 (old) | `@fluentui/react-file-type-icons` |
| v9 (new) | `@fluentui/react-icons-file-type` |

```bash
npm uninstall @fluentui/react-file-type-icons
npm install @fluentui/react-icons-file-type
```

```diff
- import { ... } from '@fluentui/react-file-type-icons';
+ import { ... } from '@fluentui/react-icons-file-type';
```

### 2. There is no global registry / initialization

v8 required `initializeFileTypeIcons()` at app startup to register icons into the global
`@fluentui/react` (v8) icon registry. v9 has **no global state** — remove the call entirely.
Assets are resolved per render from the CDN.

```diff
- import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
- initializeFileTypeIcons();            // at app startup
```

### 3. Render with the `FileTypeIcon` component instead of `Icon` + props

v8 produced props for the v8 `<Icon>` component via `getFileTypeIconProps`. v9 ships a
dedicated component; pass the same options as props.

```diff
- import { Icon } from '@fluentui/react';
- import { getFileTypeIconProps } from '@fluentui/react-file-type-icons';
- <Icon {...getFileTypeIconProps({ extension: 'docx', size: 24 })} />
+ import { FileTypeIcon } from '@fluentui/react-icons-file-type';
+ <FileTypeIcon extension="docx" size={24} />
```

The options are the same shape: `extension`, `type`, `size`, and `imageFileType` (`'svg' | 'png'`).
For non-extension icons use the `type` prop with `FileIconType` (see below).

### 4. Configure a custom CDN via the provider (not an init argument)

```diff
- initializeFileTypeIcons('https://my-cdn.example.com/item-types/');
+ import { FileTypeIconsProvider } from '@fluentui/react-icons-file-type';
+ <FileTypeIconsProvider baseUrl="https://my-cdn.example.com/item-types/">
+   {/* ...app... */}
+ </FileTypeIconsProvider>
```

The Fluent CDN remains the **default** in both v8 and v9, so a `baseUrl` is only needed to
override the host. There is no per-`FileTypeIcon` `baseUrl` prop — configure it on the provider.

### 5. `FileIconType` is now a `const` object, not a TypeScript `enum`

Value usage is unchanged — `FileIconType.folder` still works. The difference is type-level: it
is a `const` object plus a derived union type rather than a TS `enum`. This avoids a runtime
reverse-mapping and is generally a drop-in replacement.

```ts
import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';
<FileTypeIcon type={FileIconType.folder} size={24} />;
```

Notes for code that did unusual things with the v8 enum:

- ✅ `FileIconType.folder` (value access) — unchanged.
- ✅ `type: FileIconType` (type annotation) — unchanged; `FileIconTypeInput` is also exported and
  is structurally the numeric union accepted by the `type` prop.
- ⚠️ Reverse lookup `FileIconType[7]` (number → name) — **not available**. A `const` object has no
  reverse map. If you relied on this, keep your own name table.

### 6. APIs that were NOT ported

The following v8 exports are intentionally **not** part of the v9 public API. Use the
`FileTypeIcon` component instead.

| v8 export                               | v9 replacement                                  |
| --------------------------------------- | ----------------------------------------------- |
| `initializeFileTypeIcons()`             | _removed_ — no global registry                  |
| `getFileTypeIconProps()`                | `<FileTypeIcon {...options} />`                 |
| `getFileTypeIconAsUrl()`                | _not exported_ — use `<FileTypeIcon>`           |
| `getFileTypeIconAsHTMLString()`         | _not exported_ — use `<FileTypeIcon>`           |
| `FileTypeIconMap` (raw extension table) | _not exported_ — internal implementation detail |

### v9 public API surface (for reference)

- Components: `FileTypeIcon`, `FileTypeIconsProvider`
- Hook: `useFileTypeIconsContext`
- Values: `FileIconType`, `DEFAULT_BASE_URL`, `FLUENT_CDN_BASE_URL`, `DEFAULT_ICON_SIZE`, `ICON_SIZES`
- Types: `FileTypeIconProps`, `FileTypeIconsContextValue`, `FileTypeIconsProviderProps`,
  `FileIconTypeInput`, `FileTypeIconSize`, `ImageFileType`

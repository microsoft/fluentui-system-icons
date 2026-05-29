# @fluentui/react-native-icons-modular

Fluent System Icons for React Native — **modular per-icon subpath exports** for optimal bundling with Metro.

## When to use this package

Use this package instead of [`@fluentui/react-native-icons`](../react-native-icons) when:

- You bundle with **Metro 0.82 or newer** with `unstable_enablePackageExports: true`
- You want bundle size to scale with the number of icons you actually import (not the entire icon set)

The companion package `@fluentui/react-native-icons` ships icons in chunked files of 500 icons each. With Metro's lack of cross-module tree-shaking, importing a single icon pulls in ~24 MB of unused icon code. This package solves that by giving each icon its own file, exposed via a per-icon subpath export.

| Icons imported | `@fluentui/react-native-icons` | `@fluentui/react-native-icons-modular` |
| --- | --- | --- |
| 1 | ~24 MB | ~374 KB (one-time SVG runtime) |
| 5 | ~24 MB | ~385 KB (+ ~3 KB per extra icon) |

## Requirements

- **Metro 0.82+** with `resolver.unstable_enablePackageExports = true`
- `react-native-svg >= 12.5.0`
- `react >= 16.8.0 < 19.0.0`

## Usage

Import each icon from its own subpath:

```tsx
import { AccessTimeFilled } from '@fluentui/react-native-icons-modular/AccessTimeFilled';
import { AccessTimeRegular } from '@fluentui/react-native-icons-modular/AccessTimeRegular';
```

Sized variants live in the same flat namespace:

```tsx
import { AccessTime24Filled } from '@fluentui/react-native-icons-modular/AccessTime24Filled';
import { AccessTime20Regular } from '@fluentui/react-native-icons-modular/AccessTime20Regular';
```

The component API is the same as `@fluentui/react-native-icons`:

```tsx
<AccessTime24Filled />
<AccessTime24Filled color="red" />
```

## Metro configuration

```js
// metro.config.js
const config = {
  resolver: {
    unstable_enablePackageExports: true,
    unstable_conditionNames: ['import', 'react-native', 'default'],
  },
};
module.exports = config;
```

## How it differs from `@fluentui/react-native-icons`

| Aspect | `react-native-icons` | `react-native-icons-modular` |
| --- | --- | --- |
| File layout | 500 icons per chunk | 1 icon per file |
| Import path | `'@fluentui/react-native-icons'` | `'@fluentui/react-native-icons-modular/IconName'` |
| Bundle scaling | Constant (~24 MB) | Linear with usage |
| Distribution | CJS + ESM | ESM only |
| Metro version | Any | 0.82+ with package exports enabled |

## Tags

`React Native` `Metro` `Tree shaking`

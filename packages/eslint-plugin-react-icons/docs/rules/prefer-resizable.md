# prefer-resizable

Prefer resizable Fluent icons over fixed-size ("sized") variants.

## Rule Details

`@fluentui/react-icons` (and `@fluentui/react-brand-icons`) ship each icon in two
shapes:

- **Resizable** — e.g. `SendRegular`, `AccessTimeFilled`. Rendered at `1em`, so
  they scale to any size via `fontSize` / CSS and let a bundler ship a single glyph
  that can be reused at multiple sizes.
- **Sized** — e.g. `Send24Regular`, `AccessTime24Filled`. Locked to a design pixel
  size; each size is a separate export and its hardcoded geometry ignores
  `fontSize`.

This rule flags imports (and namespace usages) of sized icons and offers a
suggestion to switch to the resizable equivalent.

## How sized icons are detected

Detection is data-driven, generated from `@fluentui/react-icons` `metadata.json`:

- A name is "sized" when it ends with a real two-digit Fluent size
  (`10, 12, 16, 20, 24, 28, 32, 48`) immediately before its variant suffix
  (`Filled` / `Regular` / `Color` / `Light`).
- Names whose trailing digits are part of a product name rather than a size
  (e.g. `Battery10Regular`, `Fps120Regular`, `Timer10Filled`) are excluded via a
  generated collision denylist, so they are never mis-flagged.

The generated data (`src/data/icon-sizes.generated.ts`) is verified to classify
every icon exactly as `metadata.json` does; regenerate it with
`npm run generate:data` when the icon set changes.

## Examples

### ❌ Incorrect

```tsx
import { Send24Regular } from '@fluentui/react-icons';
import { Send24Filled } from '@fluentui/react-brand-icons';
import * as Icons from '@fluentui/react-icons';

const a = <Send24Regular />;
const b = <Icons.Send24Regular />;
```

### ✅ Correct

```tsx
import { SendRegular } from '@fluentui/react-icons';
import * as Icons from '@fluentui/react-icons';

const a = <SendRegular fontSize={24} />;
const b = <Icons.SendRegular />;

// Product names that merely end in a size-shaped number are fine:
import { Battery10Regular, Fps120Regular } from '@fluentui/react-icons';
```

## Options

```jsonc
{
  "@fluentui/react-icons/prefer-resizable": [
    "warn",
    {
      // Module sources treated as Fluent icon packages (matched exactly or as a
      // subpath prefix, e.g. "@fluentui/react-icons/fonts/send").
      "sources": ["@fluentui/react-icons", "@fluentui/react-brand-icons"],
    },
  ],
}
```

## When Not To Use It

If you intentionally rely on a specific pixel size's optical tuning and do not want
to migrate those usages, disable the rule (or the specific lines). Note that
resizable icons are the 20px artwork made scalable, so swapping a sized icon may
change its optical rendering.

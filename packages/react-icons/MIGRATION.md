# Migration guide

## Breaking change: Pride Flag icons use Color

The following families have moved from `Filled` to `Color`:

| Family                                 | Previous resizable SVG export              | Replacement                               |
| -------------------------------------- | ------------------------------------------ | ----------------------------------------- |
| Flag Pride                             | `FlagPrideFilled`                          | `FlagPrideColor`                          |
| Flag Pride Progress                    | `FlagPrideProgressFilled`                  | `FlagPrideProgressColor`                  |
| Flag Pride Philadelphia                | `FlagPridePhiladelphiaFilled`              | `FlagPridePhiladelphiaColor`              |
| Flag Pride Intersex Inclusive Progress | `FlagPrideIntersexInclusiveProgressFilled` | `FlagPrideIntersexInclusiveProgressColor` |

This is a breaking change: the old Filled SVG exports are removed, not aliased. Other icon families are unchanged.

### Update React SVG imports

Replace `Filled` with `Color` in both resizable and sized (16, 20, 24, 28, 32, 48) SVG imports. Module paths remain unchanged.

Before:

```tsx
import { FlagPrideProgress24Filled } from '@fluentui/react-icons/svg/flag-pride-progress';
import { FlagPrideProgress24Filled as HeadlessFlag } from '@fluentui/react-icons/headless/svg/flag-pride-progress';
```

After:

```tsx
import { FlagPrideProgress24Color } from '@fluentui/react-icons/svg/flag-pride-progress';
import { FlagPrideProgress24Color as HeadlessFlag } from '@fluentui/react-icons/headless/svg/flag-pride-progress';
```

The root SVG entry points also export the new names, for example:

```tsx
import { FlagPrideColor } from '@fluentui/react-icons';
```

### Rendering and icon fonts

Both standard and headless SVG components now preserve the authored palette, including white regions and the Intersex flag's purple stroke. `primaryFill` no longer recolors this artwork.

Previously, Filled conversion discarded these colors, as shown in this [raw SVG versus React comparison](https://github.com/user-attachments/assets/b13090b3-7c37-449c-86bf-d10b85997beb).

Use SVG imports for these multicolor icons, not icon fonts, which cannot preserve the palette. Existing Filled font glyphs remain monochrome. If your application uses the `fluentIconFont` condition, use an explicit SVG entry point such as `@fluentui/react-icons/svg/flag-pride-progress` for the Color replacement.

### Update raw SVG filenames

For these four families, replace `_filled.svg` with `_color.svg` in raw SVG paths. For example, `flag_pride_progress_24_filled.svg` becomes `flag_pride_progress_24_color.svg`. The artwork's palette is preserved.

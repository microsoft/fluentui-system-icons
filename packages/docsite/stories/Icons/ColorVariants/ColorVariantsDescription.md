A handful of icons ship a `Color` variant (e.g. `CalendarColor`) that renders with multiple colors via SVG gradients, clip paths, and filters.

> **⚠️ Deprecated:** `Color` variants are **deprecated** and should not be used in new code. They remain available for backward compatibility, but we strongly recommend migrating to `Filled` or `Regular` variants instead.

## Why color variants are deprecated

### 1. High Contrast Mode (HCM) non-compliance

Color variants do not work in Windows High Contrast Mode, making them inaccessible for users who depend on high-contrast settings ([#951](https://github.com/microsoft/fluentui-system-icons/issues/951)).

**Workaround:** If you must keep color variants during migration, bundle them with their `Filled` variant and swap on a `forced-colors` media query. See the runnable [Keeping Color icons usable in High Contrast Mode](?path=/docs/icons-recipes--docs#keeping-color-icons-usable-in-high-contrast-mode) recipe.

### 2. SVG gradient ID collision

Color icons with gradients use non-scoped `id` attributes. When multiple instances of the same color icon exist on a page, hiding one with `display: none` removes the gradient definition from the global DOM namespace, which breaks all other instances referencing that ID ([#936](https://github.com/microsoft/fluentui-system-icons/issues/936)).

**Workarounds:**

- **Scoped IDs via `idPrefix`** (recommended): pass a unique `idPrefix` per rendered instance so each icon owns its gradient ids. See the runnable [Rendering the same Color icon multiple times](?path=/docs/icons-recipes--docs#rendering-the-same-color-icon-multiple-times) recipe.
- **SVG sprites**: Wrap the icon in a `<symbol>` and reference it via `<use>`, avoiding duplicate gradient IDs.
- **Absolute positioning off-screen**: Use `position: 'absolute', top: '-9999px'` instead of `display: 'none'`.
- **`visibility: 'hidden'`**: Hides the icon while keeping the gradient definition accessible (maintains layout space).

### 3. Dark theme contrast issues

Color variants have insufficient contrast ratios in dark themes, failing WCAG accessibility standards:

- **Non-text elements** (simple icons): Minimum 3:1 contrast ratio required ([WCAG 2.1 SC 1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
- **Text-like elements** (icons with letters/numbers or small details): Minimum 4.5:1 for normal text, 3:1 for large text ([WCAG 2.0 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))

Most color icons contain small visual details that could be treated as text-equivalent elements requiring 4.5:1 contrast, making them non-compliant in dark themes.

## Migration path

**1. Preferred — migrate away from `Color` variants.** Replace each `Color` icon with a `Filled` or `Regular` variant. If you need a multi-color look, layer monochrome variants instead of reaching for a `Color` icon — see the [Using multiple colors for single-color icons](?path=/docs/icons-recipes--docs#using-multiple-colors-for-single-color-icons) recipe.

**2. Only if you cannot migrate yet — keep `Color` variants safely.** Address both known pitfalls:

- **High Contrast Mode:** bundle the icon with its `Filled` variant and swap on a `forced-colors` media query — see [Keeping Color icons usable in High Contrast Mode](?path=/docs/icons-recipes--docs#keeping-color-icons-usable-in-high-contrast-mode).
- **Gradient ID collisions:** pass a unique `idPrefix` per rendered instance — see [Rendering the same Color icon multiple times](?path=/docs/icons-recipes--docs#rendering-the-same-color-icon-multiple-times).

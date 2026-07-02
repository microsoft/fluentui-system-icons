A handful of icons ship a `Color` variant (e.g. `CalendarColor`) that renders with multiple colors via SVG gradients, clip paths, and filters.

> **⚠️ Deprecated:** `Color` variants are **deprecated** and should not be used in new code. They remain available for backward compatibility, but we strongly recommend migrating to `Filled` or `Regular` variants instead.

## Why color variants are deprecated

### 1. High Contrast Mode (HCM) non-compliance

Color variants do not work in Windows High Contrast Mode, making them inaccessible for users who depend on high-contrast settings ([#951](https://github.com/microsoft/fluentui-system-icons/issues/951)).

**Workaround:** If you must keep color variants during migration, bundle them with `Filled` variants and switch using a `forced-colors` media query:

```tsx
import { makeStyles } from '@griffel/react';
import { bundleIcon, iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';
import { CodeBlock48Color, CodeBlock48Filled } from '@fluentui/react-icons';

const CodeBlock48ColorFixed = bundleIcon(CodeBlock48Filled, CodeBlock48Color);

const useStyles = makeStyles({
  icon: {
    [`& .${iconFilledClassName}`]: {
      display: 'none',
    },
    [`& .${iconRegularClassName}`]: {
      display: 'inline',
    },

    '@media (forced-colors: active)': {
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },
  },
});

function MyComponent() {
  const styles = useStyles();
  return <CodeBlock48ColorFixed className={styles.icon} />;
}
```

**Note:** This approach increases bundle size as both variants are included.

### 2. SVG gradient ID collision

Color icons with gradients use non-scoped `id` attributes. When multiple instances of the same color icon exist on a page, hiding one with `display: none` removes the gradient definition from the global DOM namespace, which breaks all other instances referencing that ID ([#936](https://github.com/microsoft/fluentui-system-icons/issues/936)).

**Workarounds:**

- **Scoped IDs via `idPrefix`** (recommended): see [Scoping gradient IDs with `idPrefix`](#scoping-gradient-ids-with-idprefix) below.
- **SVG sprites**: Wrap the icon in a `<symbol>` and reference it via `<use>`, avoiding duplicate gradient IDs.
- **Absolute positioning off-screen**: Use `position: 'absolute', top: '-9999px'` instead of `display: 'none'`.
- **`visibility: 'hidden'`**: Hides the icon while keeping the gradient definition accessible (maintains layout space).

### 3. Dark theme contrast issues

Color variants have insufficient contrast ratios in dark themes, failing WCAG accessibility standards:

- **Non-text elements** (simple icons): Minimum 3:1 contrast ratio required ([WCAG 2.1 SC 1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
- **Text-like elements** (icons with letters/numbers or small details): Minimum 4.5:1 for normal text, 3:1 for large text ([WCAG 2.0 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))

Most color icons contain small visual details that could be treated as text-equivalent elements requiring 4.5:1 contrast, making them non-compliant in dark themes.

## Scoping gradient IDs with `idPrefix`

`Color` variants render their gradients, clip paths, and filters using locally-defined SVG `id`s. Because SVG IDs live in the **global DOM namespace**, rendering the same color icon multiple times produces duplicate IDs — and hiding one instance with `display: none` can break the gradients of the others ([#936](https://github.com/microsoft/fluentui-system-icons/issues/936)).

Pass a unique **`idPrefix`** per rendered instance to scope every `id` and its `url(#…)` reference, eliminating the collision:

```tsx
<CalendarColor idPrefix="cal-a-" />
<CalendarColor idPrefix="cal-b-" />
```

The example below renders the same icon twice per column with the first instance hidden via `display: none`. **Without** `idPrefix` (left) the visible icon loses its gradients because both instances share the same IDs; **with** a unique `idPrefix` per instance (right) it renders correctly.

> **Notes**
>
> - `idPrefix` only applies to `Color` variants; mono-color icons ignore it.
> - **On React 18+, `React.useId()` is the recommended source** — it's stable across re-renders and SSR-safe:
>
>   ```tsx
>   const id = React.useId();
>   return <CalendarColor idPrefix={id} />;
>   ```
>
>   Use **one `useId()` per component instance**. If a component renders several color icons, append a discriminator so they don't collide with each other (e.g. ``idPrefix={`${id}-${i}`}``). The colons in `useId()` output are fine — `url(#…)` resolves via `getElementById`, not CSS selectors.
>
> - On React 16.8–17 (no `useId`), derive a **stable, unique** value from your data/key instead. Either way, avoid regenerating it on every render so the icon's memoized output stays cached.
> - For color-icon-heavy trees that re-render frequently, also consider wrapping icons in `React.memo` to skip renders when props are unchanged — it is complementary to the built-in `idPrefix` memoization.

## Migration path

Replace `Color` variants with `Filled` or `Regular` variants. If you need multi-color effects, use the layering technique described in the [Recipes](?path=/docs/icons-recipes--docs) page.

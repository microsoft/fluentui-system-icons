A handful of icons ship a `Color` variant (e.g. `CalendarColor`) that renders with multiple colors via SVG gradients, clip paths, and filters.

> **⚠️ Accessibility warning:** We strongly recommend avoiding `Color` variants. They are non‑compliant with Windows High Contrast Mode and can have insufficient contrast in dark themes. Prefer `Filled` or `Regular` variants. See the **User Guidance** page for details.

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

Rendering the same `Color` variant more than once can break its gradients because SVG `id`s live in the global DOM namespace. Click the button to hide the first instance with `display: none`: **without** `idPrefix` (left) the remaining visible icon loses its gradients — its shared `<defs>` were removed with the hidden instance; **with** a unique `idPrefix` per instance (right) each icon owns its ids, so it keeps rendering correctly.

Pass a unique **`idPrefix`** per rendered instance to scope every `id` and its `url(#…)` reference:

```tsx
<CalendarColor idPrefix="cal-a-" />
<CalendarColor idPrefix="cal-b-" />
```

**Notes**

- `idPrefix` only applies to `Color` variants; mono-color icons ignore it.
- **On React 18+, `React.useId()` is the recommended source** — stable across re-renders and SSR-safe:

  ```tsx
  const id = React.useId();
  return <CalendarColor idPrefix={id} />;
  ```

  Use **one `useId()` per component instance**. If a component renders several color icons, append a discriminator (e.g. ``idPrefix={`${id}-${i}`}``). The colons in `useId()` output are fine — `url(#…)` resolves via `getElementById`, not CSS selectors.

- On React 16.8–17 (no `useId`), derive a **stable, unique** value from your data/key instead. Avoid regenerating it on every render so the memoized output stays cached.
- For color-icon-heavy trees that re-render frequently, also consider wrapping icons in `React.memo` — complementary to the built-in `idPrefix` memoization.

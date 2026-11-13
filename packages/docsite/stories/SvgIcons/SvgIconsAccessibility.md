## Accessibility when recoloring

### Accessible names

Name icon-only buttons on the button itself and hide the icon with `aria-hidden="true"`. Visible button text already provides a name. Use `alt=""` for decorative images; give standalone meaningful icons an accessible name.

### Color and contrast

Do not communicate status with color alone: include text or a distinguishable shape. Recoloring does not change an icon's accessible name.

When an icon is needed to understand an active control or state, its essential shape needs at least [3:1 contrast against adjacent colors](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Text has separate contrast requirements. Check light/dark themes and interaction states.

### Forced colors and high contrast

Forced-colors mode uses the user's chosen palette. Inline SVG with `fill: currentColor` can follow the system-adjusted text color; external images do not inherit it.

Masks can disappear when their background paint is remapped. The coloring example applies `forced-color-adjust: preserve-parent-color` to the **mask only**, keeping its paint while its inherited color follows the parent's adjusted text color. This is not the ordinary recoloring mechanism; `currentColor` is.

Do not disable color adjustment on the entire control to preserve brand colors. Support for `preserve-parent-color` varies; use inline SVG as a fallback where necessary. Test real high-contrast modes as well as browser emulation.

See the [package accessibility guide](https://github.com/microsoft/fluentui-system-icons/blob/main/packages/svg-icons/README.md#accessibility-when-recoloring) for CSS and browser compatibility.

Uses the **headless** font icons, whose `@font-face` and `1em` box rules ship as a real stylesheet (extracted to a static `<link>` in the production build) rather than Griffel runtime CSS, so the browser performs real `font-display: block` loading.

While the webfont loads the glyph is invisible; without a reserved size the `<i>` collapses to 0 width and the following text sits left, then jumps right when the glyph paints — a layout shift. The `1em` box holds the space from first paint.

Both cases share one box and a dashed vertical guide at the reserved label position; the dashed icon outlines show the reserved box.

> **How to see it live:** open this story in the built Storybook, then in DevTools → Network disable cache (and throttle) and reload. Row 1 starts left of the guide and jumps onto it as the glyph paints; row 2 stays on it.

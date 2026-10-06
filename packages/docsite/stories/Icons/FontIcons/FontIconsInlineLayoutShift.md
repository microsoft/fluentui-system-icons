Font icons reserve a `1em × 1em` box, but their baseline can still shift inline text when the font loads. Add **`contain: layout`** directly to the icon to stabilize its baseline without a wrapper or clipping:

```tsx
import { SendRegular } from '@fluentui/react-icons/fonts/send';

<SendRegular aria-label="Send" style={{ contain: 'layout' }} />;
```

Keep the default `inline-block` display and `1em` dimensions. This opt-in works with both Griffel and headless font icons.

Use `layout` only, not `paint`, `content`, or `strict`, which can clip glyphs. On versions that set `overflow: hidden`, also override it with `overflow: 'visible'`.

Containment creates a stacking context and a containing block for positioned descendants. Normally portaled tooltips and popovers are unaffected.

**Support:** Chrome 52+, Edge 79+, Firefox 69+, Safari/iOS 15.4+ ([compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/contain#browser_compatibility)). Older browsers ignore it.

The demo compares default inline flow with layout containment. To watch font loading, open the **built Storybook**, disable cache, throttle the network, and reload. This addresses icon-font loading, not shifts from a separately loading text font.

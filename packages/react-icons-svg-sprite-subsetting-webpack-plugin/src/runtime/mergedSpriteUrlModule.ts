/**
 * Runtime module that replaces individual `.svg` sprite imports when the plugin
 * runs in `merged` mode (external, non-inline).
 *
 * At build time, {@link file://./MergedSpriteRuntimeModule.ts} injects bootstrap code that
 * stores the merged sprite's public URL in a well-known global
 * (`__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__`). This module reads that global
 * and re-exports it so that every icon component's `<use href="...">` points
 * at the single merged sprite asset instead of many individual SVG files.
 *
 * @see {@link file://./inlineSpriteUrlModule.ts} for the inline-injection counterpart that
 *   exports an empty string.
 */

declare const __webpack_require__: { g?: Record<string, unknown> };

const globalRef: Record<string, unknown> =
  (typeof __webpack_require__ !== 'undefined' && __webpack_require__.g) ||
  (typeof globalThis !== 'undefined' ? globalThis : {});

const url = (globalRef['__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__'] as string) ?? '';

export default url;

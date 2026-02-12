declare const __webpack_require__: { g?: Record<string, unknown> };

const globalRef: Record<string, unknown> =
  (typeof __webpack_require__ !== 'undefined' && __webpack_require__.g as Record<string, unknown>) ||
  (typeof globalThis !== 'undefined' ? (globalThis as Record<string, unknown>) : {});

const url = globalRef['__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__'];

export default typeof url === 'string' ? url : '';

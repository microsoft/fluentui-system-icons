import * as React from 'react';

/**
 * Applies the inline styles shared by both font-icon factories:
 * - maps `primaryFill` -> `color` (unless `currentColor`)
 * - applies an explicit `fontSize`
 *
 * Mutates `state.style` in place to match the existing factory behaviour.
 */
export const applyFontStyle = (
  state: { style?: React.CSSProperties },
  primaryFill: string | undefined,
  fontSize: number | string | undefined,
): void => {
  if (primaryFill && primaryFill.toLowerCase() !== 'currentcolor') {
    state.style = {
      ...state.style,
      color: primaryFill,
    };
  }

  if (fontSize) {
    state.style = {
      ...state.style,
      fontSize,
    };
  }
};

/**
 * Renders the `<i>` element body for a font icon. `state` must already carry
 * className/style/a11y; the glyph `codepoint` is the element's text content.
 */
export const renderFontBody = <TState extends object>(state: TState, codepoint: string): React.ReactElement =>
  React.createElement('i', state, codepoint);

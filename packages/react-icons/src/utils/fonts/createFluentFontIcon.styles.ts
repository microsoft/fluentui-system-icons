import { makeStyles, makeStaticStyles } from '@griffel/react';

import { FontFile } from './createFluentFontIcon.shared';

// #region @generated font-faces
import fontFilledWoff2 from './FluentSystemIcons-Filled.woff2';
import fontFilledWoff from './FluentSystemIcons-Filled.woff';
import fontFilledTtf from './FluentSystemIcons-Filled.ttf';

import fontRegularWoff2 from './FluentSystemIcons-Regular.woff2';
import fontRegularWoff from './FluentSystemIcons-Regular.woff';
import fontRegularTtf from './FluentSystemIcons-Regular.ttf';

import fontResizableWoff2 from './FluentSystemIcons-Resizable.woff2';
import fontResizableWoff from './FluentSystemIcons-Resizable.woff';
import fontResizableTtf from './FluentSystemIcons-Resizable.ttf';

import fontLightWoff2 from './FluentSystemIcons-Light.woff2';
import fontLightWoff from './FluentSystemIcons-Light.woff';
import fontLightTtf from './FluentSystemIcons-Light.ttf';

export const useStaticStyles = makeStaticStyles(`
@font-face {
    font-family: FluentSystemIconsFilled;
    font-display: "block";
    src:
    url(${JSON.stringify(fontFilledWoff2)}) format("woff2"),
    url(${JSON.stringify(fontFilledWoff)}) format("woff"),
    url(${JSON.stringify(fontFilledTtf)}) format("truetype");
}
@font-face {
    font-family: FluentSystemIconsRegular;
    font-display: "block";
    src:
    url(${JSON.stringify(fontRegularWoff2)}) format("woff2"),
    url(${JSON.stringify(fontRegularWoff)}) format("woff"),
    url(${JSON.stringify(fontRegularTtf)}) format("truetype");
}
@font-face {
    font-family: FluentSystemIcons;
    font-display: "block";
    src:
    url(${JSON.stringify(fontResizableWoff2)}) format("woff2"),
    url(${JSON.stringify(fontResizableWoff)}) format("woff"),
    url(${JSON.stringify(fontResizableTtf)}) format("truetype");
}
@font-face {
    font-family: FluentSystemIconsLight;
    font-display: "block";
    src:
    url(${JSON.stringify(fontLightWoff2)}) format("woff2"),
    url(${JSON.stringify(fontLightWoff)}) format("woff"),
    url(${JSON.stringify(fontLightTtf)}) format("truetype");
}
`);
// #endregion @generated font-faces

export const useRootStyles = makeStyles({
  root: {
    display: 'inline-block',
    // Reserve a 1em box up front (mirrors the resizable SVG's width/height="1em").
    // Without this the box is sized by the glyph advance, which is 0 until the
    // webfont loads (font-display: block + PUA codepoints have no fallback glyph),
    // causing layout shift on every font icon.
    width: '1em',
    height: '1em',
    // Pin the inline-block baseline to its bottom edge (like the resizable SVG, a
    // replaced element). By default an inline-block is baseline-aligned via its
    // glyph, whose baseline moves when the webfont's metrics swap in, growing the
    // line box and shifting inline text vertically. `overflow: hidden` makes the
    // baseline the bottom margin edge instead, which is font-independent and matches
    // where the loaded glyph already sits (no visible reposition).
    overflow: 'hidden',
    fontStyle: 'normal',
    lineHeight: '1em',
    color: 'currentColor',

    // Sometimes you need the font icon to have forced-color-adjust: none to not have a
    // backplate, which should generally follow the needs of the parent control.

    // But sometimes you need forced-color-adjust: auto, especially when teams have added
    // a non-high-contrast color style to the icon's styles that should be automatically
    // overridden in WHCM.

    // Rather than setting forced-color-adjust to 'none' or 'auto', we leave this value
    // default, inherited from the parent control.
  },
  // #region @generated font-families
  [FontFile.Filled]: {
    fontFamily: 'FluentSystemIconsFilled',
  },
  [FontFile.Regular]: {
    fontFamily: 'FluentSystemIconsRegular',
  },
  [FontFile.Resizable]: {
    fontFamily: 'FluentSystemIcons',
  },
  [FontFile.Light]: {
    fontFamily: 'FluentSystemIconsLight',
  },
  // #endregion @generated font-families
});

import * as React from 'react';
import { makeStyles, makeStaticStyles, mergeClasses } from "@griffel/react";
import { useIconState } from '../useIconState';
import fontFilledTtf from './FluentSystemIcons-Filled.ttf';
import fontFilledWoff from './FluentSystemIcons-Filled.woff';
import fontFilledWoff2 from './FluentSystemIcons-Filled.woff2';
import fontRegularTtf from './FluentSystemIcons-Regular.ttf';
import fontRegularWoff from './FluentSystemIcons-Regular.woff';
import fontRegularWoff2 from './FluentSystemIcons-Regular.woff2';
import fontOneSizeTtf from './FluentSystemIcons-Resizable.ttf';
import fontOneSizeWoff from './FluentSystemIcons-Resizable.woff';
import fontOneSizeWoff2 from './FluentSystemIcons-Resizable.woff2';
const FONT_FAMILY_MAP = {
  [0 /* Filled */]: 'FluentSystemIconsFilled',
  [1 /* Regular */]: 'FluentSystemIconsRegular',
  [2 /* Resizable */]: 'FluentSystemIcons'
};
const useStaticStyles = makeStaticStyles(`
@font-face {
    font-family: ${FONT_FAMILY_MAP[0 /* Filled */]};
    src: url(${JSON.stringify(fontFilledWoff2)}) format("woff2"),
    url(${JSON.stringify(fontFilledWoff)}) format("woff"),
    url(${JSON.stringify(fontFilledTtf)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[1 /* Regular */]};
    src: url(${JSON.stringify(fontRegularWoff2)}) format("woff2"),
    url(${JSON.stringify(fontRegularWoff)}) format("woff"),
    url(${JSON.stringify(fontRegularTtf)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[2 /* Resizable */]};
    src: url(${JSON.stringify(fontOneSizeWoff2)}) format("woff2"),
    url(${JSON.stringify(fontOneSizeWoff)}) format("woff"),
    url(${JSON.stringify(fontOneSizeTtf)}) format("truetype");
}
`);
const useRootStyles = makeStyles({
  root: {
    display: 'inline-block',
    fontStyle: 'normal',
    lineHeight: '1em',
    "@media (forced-colors: active)": {
      forcedColorAdjust: 'auto'
    }
  },
  [0 /* Filled */]: {
    fontFamily: 'FluentSystemIconsFilled'
  },
  [1 /* Regular */]: {
    fontFamily: 'FluentSystemIconsRegular'
  },
  [2 /* Resizable */]: {
    fontFamily: 'FluentSystemIcons'
  }
});
export function createFluentFontIcon(displayName, codepoint, font, fontSize) {
  const Component = props => {
    useStaticStyles();
    const styles = useRootStyles();
    const className = mergeClasses(styles.root, styles[font], props.className);
    const state = useIconState(Object.assign(Object.assign({}, props), {
      className
    }));
    // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
    if (props.primaryFill) {
      state.style = Object.assign(Object.assign({}, state.style), {
        color: props.primaryFill
      });
    }
    if (fontSize) {
      state.style = Object.assign(Object.assign({}, state.style), {
        fontSize
      });
    }
    return /*#__PURE__*/React.createElement("i", state, codepoint);
  };
  Component.displayName = displayName;
  Component.codepoint = codepoint;
  return Component;
}
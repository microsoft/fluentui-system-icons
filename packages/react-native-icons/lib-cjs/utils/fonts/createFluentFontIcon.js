"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFluentFontIcon = void 0;

const tslib_1 = require("tslib");

const React = tslib_1.__importStar(require("react"));

const react_1 = require("@griffel/react");

const useIconState_1 = require("../useIconState");

const FluentSystemIcons_Filled_ttf_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Filled.ttf"));

const FluentSystemIcons_Filled_woff_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Filled.woff"));

const FluentSystemIcons_Filled_woff2_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Filled.woff2"));

const FluentSystemIcons_Regular_ttf_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Regular.ttf"));

const FluentSystemIcons_Regular_woff_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Regular.woff"));

const FluentSystemIcons_Regular_woff2_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Regular.woff2"));

const FluentSystemIcons_Resizable_ttf_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Resizable.ttf"));

const FluentSystemIcons_Resizable_woff_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Resizable.woff"));

const FluentSystemIcons_Resizable_woff2_1 = tslib_1.__importDefault(require("./FluentSystemIcons-Resizable.woff2"));

const FONT_FAMILY_MAP = {
  [0
  /* Filled */
  ]: 'FluentSystemIconsFilled',
  [1
  /* Regular */
  ]: 'FluentSystemIconsRegular',
  [2
  /* Resizable */
  ]: 'FluentSystemIcons'
};
const useStaticStyles = react_1.makeStaticStyles(`
@font-face {
    font-family: ${FONT_FAMILY_MAP[0
/* Filled */
]};
    src: url(${JSON.stringify(FluentSystemIcons_Filled_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Filled_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Filled_ttf_1.default)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[1
/* Regular */
]};
    src: url(${JSON.stringify(FluentSystemIcons_Regular_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Regular_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Regular_ttf_1.default)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[2
/* Resizable */
]};
    src: url(${JSON.stringify(FluentSystemIcons_Resizable_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Resizable_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Resizable_ttf_1.default)}) format("truetype");
}
`);
const useRootStyles = react_1.makeStyles({
  root: {
    display: 'inline-block',
    fontStyle: 'normal',
    lineHeight: '1em',
    "@media (forced-colors: active)": {
      forcedColorAdjust: 'auto'
    }
  },
  [0
  /* Filled */
  ]: {
    fontFamily: 'FluentSystemIconsFilled'
  },
  [1
  /* Regular */
  ]: {
    fontFamily: 'FluentSystemIconsRegular'
  },
  [2
  /* Resizable */
  ]: {
    fontFamily: 'FluentSystemIcons'
  }
});

function createFluentFontIcon(displayName, codepoint, font, fontSize) {
  const Component = props => {
    useStaticStyles();
    const styles = useRootStyles();
    const className = react_1.mergeClasses(styles.root, styles[font], props.className);
    const state = useIconState_1.useIconState(Object.assign(Object.assign({}, props), {
      className
    })); // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`

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

exports.createFluentFontIcon = createFluentFontIcon;
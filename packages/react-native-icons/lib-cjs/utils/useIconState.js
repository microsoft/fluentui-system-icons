"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIconState = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@griffel/react");
const useRootStyles = react_1.makeStyles({
  root: {
    display: 'inline',
    lineHeight: 0,
    "@media (forced-colors: active)": {
      forcedColorAdjust: 'auto'
    }
  }
});
const useIconState = props => {
  const {
      title,
      primaryFill = "currentColor"
    } = props,
    rest = tslib_1.__rest(props, ["title", "primaryFill"]);
  const state = Object.assign(Object.assign({}, rest), {
    title: undefined,
    fill: primaryFill
  });
  const styles = useRootStyles();
  state.className = react_1.mergeClasses(styles.root, state.className);
  if (title) {
    state['aria-label'] = title;
  }
  if (!state['aria-label'] && !state['aria-labelledby']) {
    state['aria-hidden'] = true;
  } else {
    state['role'] = 'img';
  }
  return state;
};
exports.useIconState = useIconState;
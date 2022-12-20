"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIconState = void 0;

const tslib_1 = require("tslib");

const react_1 = require("@griffel/react");

const useRootStyles = react_1.__styles({
  "root": {
    "mc9l5x": "f1w7gpdv",
    "Bg96gwp": "fez10in",
    "ycbfsm": "fg4l7m0"
  }
}, {
  "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}"],
  "t": ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
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
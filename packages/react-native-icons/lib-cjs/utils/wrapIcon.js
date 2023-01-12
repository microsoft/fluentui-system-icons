"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const useIconState_1 = require("./useIconState");
const wrapIcon = (Icon, displayName) => {
  const WrappedIcon = props => {
    const state = useIconState_1.useIconState(props);
    return /*#__PURE__*/React.createElement(Icon, state);
  };
  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};
exports.default = wrapIcon;
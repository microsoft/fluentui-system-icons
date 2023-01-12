"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = require("tslib");

const React = tslib_1.__importStar(require("react"));

const constants_1 = require("./constants");

const react_1 = require("@griffel/react");

const useBundledIconStyles = react_1.makeStyles({
  root: {
    display: "none"
  },
  visible: {
    display: "inline"
  }
});

const bundleIcon = (FilledIcon, RegularIcon) => {
  const Component = props => {
    const {
      className,
      primaryFill = 'currentColor',
      filled
    } = props,
          rest = tslib_1.__rest(props, ["className", "primaryFill", "filled"]);

    const styles = useBundledIconStyles();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilledIcon, _extends({}, rest, {
      className: react_1.mergeClasses(styles.root, filled && styles.visible, constants_1.iconFilledClassName, className),
      fill: primaryFill
    })), /*#__PURE__*/React.createElement(RegularIcon, _extends({}, rest, {
      className: react_1.mergeClasses(styles.root, !filled && styles.visible, constants_1.iconRegularClassName, className),
      fill: primaryFill
    })));
  };

  Component.displayName = "CompoundIcon";
  return Component;
};

exports.default = bundleIcon;
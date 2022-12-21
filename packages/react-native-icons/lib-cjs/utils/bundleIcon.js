"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = require("tslib");

const React = tslib_1.__importStar(require("react"));

const constants_1 = require("./constants");

const react_1 = require("@griffel/react");

const useBundledIconStyles = react_1.__styles({
  "root": {
    "mc9l5x": "fjseox"
  },
  "visible": {
    "mc9l5x": "f1w7gpdv"
  }
}, {
  "d": [".fjseox{display:none;}", ".f1w7gpdv{display:inline;}"]
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
    return React.createElement(React.Fragment, null, React.createElement(FilledIcon, Object.assign({}, rest, {
      className: react_1.mergeClasses(styles.root, filled && styles.visible, constants_1.iconFilledClassName, className),
      fill: primaryFill
    })), React.createElement(RegularIcon, Object.assign({}, rest, {
      className: react_1.mergeClasses(styles.root, !filled && styles.visible, constants_1.iconRegularClassName, className),
      fill: primaryFill
    })));
  };

  Component.displayName = "CompoundIcon";
  return Component;
};

exports.default = bundleIcon;
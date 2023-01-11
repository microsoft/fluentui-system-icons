function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { __rest } from "tslib";
import * as React from "react";
import { iconFilledClassName, iconRegularClassName } from "./constants";
import { makeStyles, mergeClasses } from "@griffel/react";
const useBundledIconStyles = makeStyles({
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
          rest = __rest(props, ["className", "primaryFill", "filled"]);

    const styles = useBundledIconStyles();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilledIcon, _extends({}, rest, {
      className: mergeClasses(styles.root, filled && styles.visible, iconFilledClassName, className),
      fill: primaryFill
    })), /*#__PURE__*/React.createElement(RegularIcon, _extends({}, rest, {
      className: mergeClasses(styles.root, !filled && styles.visible, iconRegularClassName, className),
      fill: primaryFill
    })));
  };

  Component.displayName = "CompoundIcon";
  return Component;
};

export default bundleIcon;
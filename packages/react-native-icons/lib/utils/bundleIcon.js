import { __rest } from "tslib";
import * as React from "react";
import { iconFilledClassName, iconRegularClassName } from "./constants";
import { __styles, mergeClasses } from "@griffel/react";

const useBundledIconStyles = __styles({
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
          rest = __rest(props, ["className", "primaryFill", "filled"]);

    const styles = useBundledIconStyles();
    return React.createElement(React.Fragment, null, React.createElement(FilledIcon, Object.assign({}, rest, {
      className: mergeClasses(styles.root, filled && styles.visible, iconFilledClassName, className),
      fill: primaryFill
    })), React.createElement(RegularIcon, Object.assign({}, rest, {
      className: mergeClasses(styles.root, !filled && styles.visible, iconRegularClassName, className),
      fill: primaryFill
    })));
  };

  Component.displayName = "CompoundIcon";
  return Component;
};

export default bundleIcon;
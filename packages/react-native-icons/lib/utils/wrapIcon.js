import * as React from "react";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon, displayName) => {
  const WrappedIcon = props => {
    const state = useIconState(props);
    return /*#__PURE__*/React.createElement(Icon, state);
  };

  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};

export default wrapIcon;
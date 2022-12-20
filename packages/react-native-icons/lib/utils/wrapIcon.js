import * as React from "react";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon, displayName) => {
  const WrappedIcon = props => {
    const state = useIconState(props);
    return React.createElement(Icon, Object.assign({}, state));
  };

  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};

export default wrapIcon;
import { __rest } from "tslib";
import { makeStyles, mergeClasses } from "@griffel/react";
const useRootStyles = makeStyles({
  root: {
    display: 'inline',
    lineHeight: 0,
    "@media (forced-colors: active)": {
      forcedColorAdjust: 'auto'
    }
  }
});
export const useIconState = props => {
  const {
      title,
      primaryFill = "currentColor"
    } = props,
    rest = __rest(props, ["title", "primaryFill"]);
  const state = Object.assign(Object.assign({}, rest), {
    title: undefined,
    fill: primaryFill
  });
  const styles = useRootStyles();
  state.className = mergeClasses(styles.root, state.className);
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
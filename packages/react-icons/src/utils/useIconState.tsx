import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@fluentui/react-make-styles";

const useRootStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media screen and (-ms-high-contrast: black-on-white)": {fill: 'windowtext'}
    }
});

export const useIconState = (props: FluentIconsProps): FluentIconsProps => {
    const { title, primaryFill="currentColor" } = props;
    const state = {
      ...props,
      title: undefined,
      fill: primaryFill
    };
  
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

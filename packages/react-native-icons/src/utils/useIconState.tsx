import { FluentReactNativeIconsProps } from "./FluentReactNativeIconsProps.types";

export const useIconState = (props: FluentReactNativeIconsProps): Omit<FluentReactNativeIconsProps, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentReactNativeIconsProps, 'primaryFill'>;
  
    // TODO add here styles for RN
    //const styles = useRootStyles();
    //state.className = mergeClasses(styles.root, state.className);
  
    if (title) {
      state['acessibilityLabel'] = title;
    }
  
    if (!state['acessibilityLabel'] && !state['accessibilityLabelledBy']) {
      state['accessibilityHidden'] = true;
    } else {
      state['accessibilityRole'] = 'image';
    }
  
    return state;
};

import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";

const useRootStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media (forced-colors: active)": {
          forcedColorAdjust: 'auto',
        }
    }
});

export const useIconState = <TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>>(props: FluentIconsProps<TBaseAttributes>): FluentIconsProps<TBaseAttributes> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
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
  
    return state as unknown as FluentIconsProps<TBaseAttributes>;
};

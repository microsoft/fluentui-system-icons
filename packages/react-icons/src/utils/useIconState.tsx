import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";
import { useIconContext } from "../contexts";

const useRootStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media (forced-colors: active)": {
          forcedColorAdjust: 'auto',
        }
    },
    flipped: {
      transform: 'scaleX(-1)'
    }
});

export const useIconState = <TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>>(props: FluentIconsProps<TBaseAttributes>, shouldAutoFlip: boolean): Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'>;
  
    const iconContext = useIconContext();
    const styles = useRootStyles();
  
    if(shouldAutoFlip) {
      state.className = mergeClasses(styles.root, iconContext.textDirection === 'rtl' && styles.flipped, state.className);
    } else {
      state.className = mergeClasses(styles.root, state.className);
    }

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

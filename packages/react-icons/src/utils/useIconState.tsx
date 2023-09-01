import { useIconContext } from "../contexts";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";

const useRootStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media (forced-colors: active)": {
          forcedColorAdjust: 'auto',
        }
    },
    rtl : {
      transform: 'scaleX(-1)'
    }
});

export type UseIconStateOptions = {
  flipInRtl?: boolean;
}

export const useIconState = <TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>>(props: FluentIconsProps<TBaseAttributes>, options?: UseIconStateOptions): Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'>;
  
    const styles = useRootStyles();
    const iconContext = useIconContext();
    
    state.className = mergeClasses(
      styles.root, 
      options?.flipInRtl && iconContext?.textDirection === 'rtl' && styles.rtl, 
      state.className
    );

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

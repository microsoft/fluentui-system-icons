import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";
import { useTextDirection } from '@griffel/react/TextDirectionContext'

const useRootStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media (forced-colors: active)": {
          forcedColorAdjust: 'auto',
        }
    },
    rtl: {
      transform: 'scaleX(-1)'
    }
});

export const useIconState = <TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>>(props: FluentIconsProps<TBaseAttributes>): Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const dir = useTextDirection();
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'>;
  
    const styles = useRootStyles();
  
    state.className = mergeClasses(styles.root, dir === 'rtl' && styles.rtl, state.className);
  
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

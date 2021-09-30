import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.93 1.65c-.18.3-.29.64-.3.88-.02.43.04.85.3 1.16.28.33.68.44 1.07.44.4 0 .8-.12 1.07-.45.26-.32.33-.73.3-1.15a2.06 2.06 0 00-.3-.87C6.87 1.36 6.53 1 6 1s-.88.36-1.07.65zM3.5 5C2.67 5 2 5.67 2 6.5l1.87 1.46c.08.07.2.07.3 0l1.1-.78c.44-.31 1.02-.31 1.46 0l1.1.79c.1.06.22.06.3 0L10 6.5V6.5C10 5.67 9.33 5 8.5 5h-5zm5.25 3.75L10 7.77V10h.5a.5.5 0 010 1h-9a.5.5 0 010-1H2V7.77l1.25.98c.44.34 1.05.35 1.5.03L5.85 8c.1-.06.2-.06.3 0l1.1.8c.45.31 1.06.3 1.5-.04z" fill={primaryFill} /></svg>;
}

const FoodCake12Filled = wrapIcon(rawSvg({}), 'FoodCake12Filled');
export default FoodCake12Filled;
      
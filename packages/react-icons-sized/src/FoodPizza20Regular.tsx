import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9a.75.75 0 100-1.5.75.75 0 000 1.5zm3.72 1.26a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5zM4 3.96c0-1.1.9-2.03 2.03-1.96 4.45.28 8.35 1.77 11.4 4.7.87.82.7 2.17-.2 2.86-1.24.95-3.12 2.4-4.23 3.2v1.74c0 .72-.55 1.5-1.5 1.5-.18 0-.34-.03-.5-.08v.09c0 .7-.55 1.49-1.5 1.49-.75 0-1.25-.5-1.42-1.05L6.4 17.7A1.5 1.5 0 014 16.5V3.96zm7 10.54c0 .26.2.5.5.5s.5-.24.5-.5v-2a.5.5 0 01.21-.4c.78-.56 2.1-1.57 3.28-2.47A15.43 15.43 0 005 5.51V16.5c0 .41.47.64.8.4l2.4-1.8a.5.5 0 01.8.4v.5c0 .25.2.5.5.5a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0zm5.62-5.73c.46-.36.5-1 .12-1.36-2.86-2.72-6.52-4.15-10.77-4.4a.93.93 0 00-.97.95v.55c4.33.04 8.4 1.7 11.3 4.5l.32-.24z" fill={primaryFill} /></svg>;
}

const FoodPizza20Regular = wrapIcon(rawSvg({}), 'FoodPizza20Regular');
export default FoodPizza20Regular;
      
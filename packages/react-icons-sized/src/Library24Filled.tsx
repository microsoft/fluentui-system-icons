import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3C6.33 3 7 3.67 7 4.5v15c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 19.5v-15C2 3.67 2.67 3 3.5 3h2zm6 0c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 018 19.5v-15C8 3.67 8.67 3 9.5 3h2zm7.28 3.12L22 18.64c.21.8-.27 1.62-1.07 1.83l-1.88.48a1.5 1.5 0 01-1.83-1.08L14 7.35a1.5 1.5 0 011.08-1.82l1.87-.49c.8-.2 1.63.28 1.83 1.08z" fill={primaryFill} /></svg>;
}

const Library24Filled = wrapIcon(rawSvg({}), 'Library24Filled');
export default Library24Filled;
      
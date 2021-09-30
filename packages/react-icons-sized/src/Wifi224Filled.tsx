import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.96 16.44a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12zm-2.6-2.74a5.23 5.23 0 018.5 1.62 1 1 0 11-1.83.8 3.23 3.23 0 00-5.93-.01 1 1 0 11-1.83-.8c.26-.6.63-1.15 1.09-1.61zm-2.05-3a8.13 8.13 0 0113 2.1 1 1 0 01-1.78.9 6.13 6.13 0 00-10.94-.02 1 1 0 11-1.78-.9c.38-.76.88-1.46 1.5-2.07z" fill={primaryFill} /></svg>;
}

const Wifi224Filled = wrapIcon(rawSvg({}), 'Wifi224Filled');
export default Wifi224Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 10.7c.6.6 1.12 1.33 1.5 2.1a1 1 0 01-1.77.9 6.13 6.13 0 00-10.94-.02 1 1 0 01-1.78-.9 8.13 8.13 0 0113-2.07zm-2.05 3c.47.46.84 1.02 1.1 1.62a1 1 0 11-1.83.8 3.23 3.23 0 00-5.93-.01 1 1 0 11-1.83-.8 5.23 5.23 0 018.49-1.61zm4.69-5.4c.5.5.99 1.09 1.4 1.69a1 1 0 01-1.64 1.14 9.92 9.92 0 00-16.36 0 1 1 0 01-1.64-1.15A11.92 11.92 0 0120.42 8.3zm-7.36 8.14a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12z" fill={primaryFill} /></svg>;
}

const Wifi124Filled = wrapIcon(rawSvg({}), 'Wifi124Filled');
export default Wifi124Filled;
      
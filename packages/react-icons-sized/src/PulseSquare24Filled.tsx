import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3C19.99 3 21 4 21 5.25v13.5C21 20 20 21 18.75 21H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h13.5zM9.8 7.95L8.26 11.5H6.75a.75.75 0 000 1.5h2c.3 0 .56-.18.68-.45l1.04-2.36 2.33 5.83a.75.75 0 001.37.06L15.71 13h1.54a.75.75 0 100-1.5h-2a.75.75 0 00-.67.41l-1 2-2.39-5.94a.75.75 0 00-1.38-.02z" fill={primaryFill} /></svg>;
}

const PulseSquare24Filled = wrapIcon(rawSvg({}), 'PulseSquare24Filled');
export default PulseSquare24Filled;
      
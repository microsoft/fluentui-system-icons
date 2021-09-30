import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.7 2.3a1 1 0 10-1.4 1.4L18.59 5h-5.6a3 3 0 00-3 3v9a1 1 0 01-1 1H7.84a3 3 0 100 2H9a3 3 0 003-3V8a1 1 0 011-1h5.58L17.3 8.29A1 1 0 1018.7 9.7l3.01-3a1 1 0 000-1.41l-3-3zM14 16a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4zm9 1.5a.5.5 0 00-1 0v3c0 .83-.67 1.5-1.5 1.5h-4a.5.5 0 000 1h4a2.5 2.5 0 002.5-2.5v-3z" fill={primaryFill} /></svg>;
}

const ArrowRoutingRectangleMultiple24Filled = wrapIcon(rawSvg({}), 'ArrowRoutingRectangleMultiple24Filled');
export default ArrowRoutingRectangleMultiple24Filled;
      
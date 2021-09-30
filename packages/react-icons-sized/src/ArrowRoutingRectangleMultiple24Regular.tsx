import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.78 2.22a.75.75 0 10-1.06 1.06L19.44 5h-6.19a2.75 2.75 0 00-2.75 2.75v9.5c0 .69-.56 1.25-1.25 1.25h-1.3a3 3 0 10-.12 1.5h1.42A2.75 2.75 0 0012 17.25v-9.5c0-.69.56-1.25 1.25-1.25h6.19l-1.72 1.72a.75.75 0 001.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3zM3.5 19a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM14 16a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4zm9 1.5a.5.5 0 00-1 0v3c0 .83-.67 1.5-1.5 1.5h-4a.5.5 0 000 1h4a2.5 2.5 0 002.5-2.5v-3z" fill={primaryFill} /></svg>;
}

const ArrowRoutingRectangleMultiple24Regular = wrapIcon(rawSvg({}), 'ArrowRoutingRectangleMultiple24Regular');
export default ArrowRoutingRectangleMultiple24Regular;
      
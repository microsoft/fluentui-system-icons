import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3a2 2 0 014 0h1.5c.83 0 1.5.67 1.5 1.5V7h-1a1 1 0 000 2h1v2.5c0 .83-.67 1.5-1.5 1.5H11a2 2 0 01-4 0H5.5A1.5 1.5 0 014 11.5V10a2 2 0 010-4V4.5C4 3.67 4.67 3 5.5 3H7zm2-1a1 1 0 00-1 1v1H5.5a.5.5 0 00-.5.5V7H4a1 1 0 000 2h1v2.5c0 .28.22.5.5.5H8v1a1 1 0 002 0v-1h2.5a.5.5 0 00.5-.5V10a2 2 0 010-4V4.5a.5.5 0 00-.5-.5H10V3a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const Extension16Regular = wrapIcon(rawSvg({}), 'Extension16Regular');
export default Extension16Regular;
      
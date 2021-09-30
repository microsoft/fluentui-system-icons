import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1a2 2 0 00-2 2H5.5C4.67 3 4 3.67 4 4.5V6a2 2 0 000 4v1.5c0 .83.67 1.5 1.5 1.5H7a2 2 0 004 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-1a1 1 0 110-2h1V4.5c0-.83-.67-1.5-1.5-1.5H11a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
}

const Extension16Filled = wrapIcon(rawSvg({}), 'Extension16Filled');
export default Extension16Filled;
      
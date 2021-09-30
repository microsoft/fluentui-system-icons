import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 8a4.5 4.5 0 017.85-3h-1.1a.75.75 0 000 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 00-1.5 0v1.28A5.99 5.99 0 002 8a6 6 0 0012 0 .75.75 0 00-1.5 0 4.5 4.5 0 11-9 0z" fill={primaryFill} /></svg>;
}

const ArrowClockwise16Filled = wrapIcon(rawSvg({}), 'ArrowClockwise16Filled');
export default ArrowClockwise16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.97 6.45C9 6.2 9.2 6 9.45 6c.3 0 .55.25.51.54A4 4 0 119 3.35V2.5a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.74A3 3 0 003 6a3 3 0 005.97.45z" fill={primaryFill} /></svg>;
}

const ArrowClockwise12Regular = wrapIcon(rawSvg({}), 'ArrowClockwise12Regular');
export default ArrowClockwise12Regular;
      
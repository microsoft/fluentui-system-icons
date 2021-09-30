import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.48 2a.75.75 0 000 1.5h2.96L3.5 11.44V8.48a.75.75 0 00-1.5 0v4.67c0 .47.38.85.85.85h4.67a.75.75 0 000-1.5H4.56l7.94-7.94v2.96a.75.75 0 001.5 0V2.85a.85.85 0 00-.85-.85H8.48z" fill={primaryFill} /></svg>;
}

const ArrowMaximize16Filled = wrapIcon(rawSvg({}), 'ArrowMaximize16Filled');
export default ArrowMaximize16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.66 7a9 9 0 103.3 6.1 1 1 0 011.99-.2A11 11 0 1121 5.51V4a1 1 0 112 0v4.03A1 1 0 0122 9h-4a1 1 0 110-2h1.66z" fill={primaryFill} /></svg>;
}

const ArrowClockwise28Filled = wrapIcon(rawSvg({}), 'ArrowClockwise28Filled');
export default ArrowClockwise28Filled;
      
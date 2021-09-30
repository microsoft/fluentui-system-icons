import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.34 7a9 9 0 11-3.3 6.1 1 1 0 00-1.99-.2A11 11 0 107 5.51V4a1 1 0 00-2 0v3.99A1 1 0 006 9h4a1 1 0 100-2H8.34z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise28Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise28Filled');
export default ArrowCounterclockwise28Filled;
      
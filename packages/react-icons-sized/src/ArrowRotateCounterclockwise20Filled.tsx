import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3.5a6.5 6.5 0 016.5 6.5.75.75 0 001.5 0 8 8 0 10-12.66 6.5H4.25a.75.75 0 000 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 00-1.5 0v1.23A6.5 6.5 0 0110 3.5z" fill={primaryFill} /><path d="M7.5 10a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM9 10a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const ArrowRotateCounterclockwise20Filled = wrapIcon(rawSvg({}), 'ArrowRotateCounterclockwise20Filled');
export default ArrowRotateCounterclockwise20Filled;
      
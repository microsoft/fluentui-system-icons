import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3.5A6.5 6.5 0 003.5 10 .75.75 0 012 10a8 8 0 1112.66 6.5h1.09a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v1.23A6.5 6.5 0 0010 3.5z" fill={primaryFill} /><path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM11 10a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ArrowRotateClockwise20Filled = wrapIcon(rawSvg({}), 'ArrowRotateClockwise20Filled');
export default ArrowRotateClockwise20Filled;
      
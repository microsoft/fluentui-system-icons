import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.25A4.75 4.75 0 003.25 8a.75.75 0 01-1.5 0 6.25 6.25 0 1110.59 4.5h.91a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 011.5 0v.46A4.75 4.75 0 008 3.25zM5.75 8a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM8 7.25a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const ArrowRotateClockwise16Filled = wrapIcon(rawSvg({}), 'ArrowRotateClockwise16Filled');
export default ArrowRotateClockwise16Filled;
      
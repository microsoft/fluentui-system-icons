import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a5 5 0 00-5 5 .5.5 0 01-1 0 6 6 0 119.97 4.5H13a.5.5 0 010 1h-2.5a.5.5 0 01-.5-.5v-.09-2.41a.5.5 0 011 0V12a5 5 0 00-3-9zM6 8a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const ArrowRotateClockwise16Regular = wrapIcon(rawSvg({}), 'ArrowRotateClockwise16Regular');
export default ArrowRotateClockwise16Regular;
      
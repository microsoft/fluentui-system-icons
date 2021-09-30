import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 2A.75.75 0 013 2v.65a4.5 4.5 0 11-1.42 4.2c-.09-.46.3-.85.78-.85.35 0 .63.3.7.64A3 3 0 104.34 3.5h.42a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75V2z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise12Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise12Filled');
export default ArrowCounterclockwise12Filled;
      
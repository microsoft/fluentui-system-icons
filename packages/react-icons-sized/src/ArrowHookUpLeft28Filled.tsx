import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.22 19.98A7.06 7.06 0 0116 22H9a1 1 0 110-2h7c1.76 0 2.99-.6 3.78-1.41A4.42 4.42 0 0021 15.5c0-1.14-.41-2.26-1.22-3.09A5.07 5.07 0 0016 11H8.41l3.3 3.3a1 1 0 11-1.42 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 111.42 1.4L8.4 9H16c2.24 0 4.01.78 5.22 2.02A6.42 6.42 0 0123 15.5c0 1.61-.59 3.24-1.78 4.48z" fill={primaryFill} /></svg>;
}

const ArrowHookUpLeft28Filled = wrapIcon(rawSvg({}), 'ArrowHookUpLeft28Filled');
export default ArrowHookUpLeft28Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 19.98A7.06 7.06 0 0012 22h7a1 1 0 100-2h-7c-1.76 0-2.99-.6-3.78-1.41A4.42 4.42 0 017 15.5c0-1.14.41-2.26 1.22-3.09A5.07 5.07 0 0112 11h7.59l-3.3 3.3a1 1 0 101.42 1.4l5-5a1 1 0 000-1.4l-5-5a1 1 0 10-1.42 1.4L19.6 9H12c-2.24 0-4.01.78-5.22 2.02A6.42 6.42 0 005 15.5c0 1.61.59 3.24 1.78 4.48z" fill={primaryFill} /></svg>;
}

const ArrowHookUpRight28Filled = wrapIcon(rawSvg({}), 'ArrowHookUpRight28Filled');
export default ArrowHookUpRight28Filled;
      
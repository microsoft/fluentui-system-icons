import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.22 8.02A7.06 7.06 0 0016 6H9a1 1 0 100 2h7c1.76 0 2.99.6 3.78 1.41.8.83 1.22 1.95 1.22 3.09s-.41 2.26-1.22 3.09A5.07 5.07 0 0116 17H8.41l3.3-3.3a1 1 0 10-1.42-1.4l-5 5a1 1 0 000 1.4l5 5a1 1 0 001.42-1.4L8.4 19H16c2.24 0 4.01-.78 5.22-2.02A6.42 6.42 0 0023 12.5c0-1.61-.59-3.24-1.78-4.48z" fill={primaryFill} /></svg>;
}

const ArrowHookDownLeft28Filled = wrapIcon(rawSvg({}), 'ArrowHookDownLeft28Filled');
export default ArrowHookDownLeft28Filled;
      
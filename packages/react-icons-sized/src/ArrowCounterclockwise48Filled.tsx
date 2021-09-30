import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 39A15 15 0 019.07 22.57C9.14 21.75 8.53 21 7.7 21c-.84 0-1.57.61-1.64 1.45a18 18 0 105.68-11.64V8.25a1.5 1.5 0 00-3 0v6.5c0 .83.67 1.5 1.5 1.5h6.5a1.5 1.5 0 000-3h-3.21A15 15 0 1124 39z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise48Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise48Filled');
export default ArrowCounterclockwise48Filled;
      
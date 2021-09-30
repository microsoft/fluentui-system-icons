import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 39a15 15 0 0014.93-16.43c-.07-.82.54-1.57 1.36-1.57.84 0 1.57.61 1.64 1.45a18 18 0 11-5.68-11.64V8.25a1.5 1.5 0 013 0v6.5c0 .83-.67 1.5-1.5 1.5h-6.5a1.5 1.5 0 010-3h3.21A15 15 0 1024 39z" fill={primaryFill} /></svg>;
}

const ArrowClockwise48Filled = wrapIcon(rawSvg({}), 'ArrowClockwise48Filled');
export default ArrowClockwise48Filled;
      
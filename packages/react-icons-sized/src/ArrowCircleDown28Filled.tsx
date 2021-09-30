import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 100 24 12 12 0 000-24zM8.97 14.22c.3-.3.77-.3 1.06 0l3.22 3.22V8.75a.75.75 0 011.5 0v8.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0l-4.5-4.5a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown28Filled = wrapIcon(rawSvg({}), 'ArrowCircleDown28Filled');
export default ArrowCircleDown28Filled;
      
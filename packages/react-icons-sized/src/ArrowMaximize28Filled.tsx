import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3H24a1 1 0 011 .88v7.62a1 1 0 01-2 .12V6.4L6.41 23h5.09a1 1 0 011 .88V24a1 1 0 01-.88 1H4a1 1 0 01-1-.88V16.5a1 1 0 012-.12v5.21L21.59 5H16.5a1 1 0 01-1-.88V4a1 1 0 01.88-1H24h-7.5z" fill={primaryFill} /></svg>;
}

const ArrowMaximize28Filled = wrapIcon(rawSvg({}), 'ArrowMaximize28Filled');
export default ArrowMaximize28Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.5a.5.5 0 011 0v.85A3.99 3.99 0 0110 6a4 4 0 01-7.96.54c-.04-.3.2-.54.5-.54.26 0 .46.2.5.45A3 3 0 103.75 4h.74a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise12Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwise12Regular');
export default ArrowCounterclockwise12Regular;
      
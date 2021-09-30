import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 3.3a1 1 0 010 1.4L5.42 8H17.5A10.5 10.5 0 117 18.5a1 1 0 112 0 8.5 8.5 0 108.5-8.5H5.41l3.3 3.3a1 1 0 11-1.42 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.42 0z" fill={primaryFill} /></svg>;
}

const ArrowReset32Regular = wrapIcon(rawSvg({}), 'ArrowReset32Regular');
export default ArrowReset32Regular;
      
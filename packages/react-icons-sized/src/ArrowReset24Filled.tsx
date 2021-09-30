import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 2.54a1 1 0 010 1.42L5.42 5.75h7.84a8 8 0 11-8 8 1 1 0 112 0 6 6 0 106-6H5.41l1.8 1.8a1 1 0 01-1.42 1.4l-3.5-3.5a1 1 0 010-1.4l3.5-3.5a1 1 0 011.42 0z" fill={primaryFill} /></svg>;
}

const ArrowReset24Filled = wrapIcon(rawSvg({}), 'ArrowReset24Filled');
export default ArrowReset24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30 16a14 14 0 10-28 0 14 14 0 0028 0zM16.7 9.3a1 1 0 010 1.4L12.42 15H22a1 1 0 110 2h-9.59l4.3 4.3a1 1 0 01-1.42 1.4l-6-6a1 1 0 010-1.4l6-6a1 1 0 011.42 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft32Filled = wrapIcon(rawSvg({}), 'ArrowCircleLeft32Filled');
export default ArrowCircleLeft32Filled;
      
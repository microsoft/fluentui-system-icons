import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.1 3.65a.5.5 0 000 .7L7.24 5.5H3.5a.5.5 0 000 1h3.74L6.1 7.65a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7 0zM11 6A5 5 0 101 6a5 5 0 0010 0zM6 2a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight12Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight12Regular');
export default ArrowCircleRight12Regular;
      
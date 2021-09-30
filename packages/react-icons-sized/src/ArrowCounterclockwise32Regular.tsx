import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 16a11 11 0 103.45-8H11a1 1 0 110 2H6a1 1 0 01-1-1V4.5a1 1 0 012 0v2.12a13 13 0 11-3.95 8.22A.94.94 0 014 14c.61 0 1.08.56 1.03 1.17-.02.28-.03.55-.03.83z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise32Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwise32Regular');
export default ArrowCounterclockwise32Regular;
      
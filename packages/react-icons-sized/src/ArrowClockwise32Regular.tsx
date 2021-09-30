import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 16a11 11 0 11-3.45-8H21a1 1 0 100 2h5a1 1 0 001-1V4.5a1 1 0 10-2 0v2.12a13 13 0 103.95 8.22A.94.94 0 0028 14c-.61 0-1.08.56-1.03 1.17.02.28.03.55.03.83z" fill={primaryFill} /></svg>;
}

const ArrowClockwise32Regular = wrapIcon(rawSvg({}), 'ArrowClockwise32Regular');
export default ArrowClockwise32Regular;
      
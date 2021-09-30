import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 16a11 11 0 0118.55-8h-2.3a1.25 1.25 0 100 2.5h4.5c.69 0 1.25-.56 1.25-1.25v-4.5a1.25 1.25 0 10-2.5 0v.76a13.5 13.5 0 104.97 9.66A1.27 1.27 0 0028.18 14c-.7 0-1.24.64-1.2 1.35L27 16a11 11 0 01-22 0z" fill={primaryFill} /></svg>;
}

const ArrowClockwise32Filled = wrapIcon(rawSvg({}), 'ArrowClockwise32Filled');
export default ArrowClockwise32Filled;
      
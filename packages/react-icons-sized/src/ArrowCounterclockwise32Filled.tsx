import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 16A11 11 0 008.45 8h2.3a1.25 1.25 0 110 2.5h-4.5C5.56 10.5 5 9.94 5 9.25v-4.5a1.25 1.25 0 112.5 0v.76a13.5 13.5 0 11-4.97 9.66c.04-.68.62-1.17 1.29-1.17.7 0 1.24.64 1.2 1.35L5 16a11 11 0 0022 0z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise32Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise32Filled');
export default ArrowCounterclockwise32Filled;
      
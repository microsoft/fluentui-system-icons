import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.81 6.81A1.5 1.5 0 0011.7 4.7l-7.5 7.5a1.5 1.5 0 000 2.12l7.5 7.5a1.5 1.5 0 002.12-2.12l-4.94-4.94H26.5A12.75 12.75 0 1113.75 27.5a1.5 1.5 0 00-3 0A15.75 15.75 0 1026.5 11.75H8.87l4.94-4.94z" fill={primaryFill} /></svg>;
}

const ArrowReset48Filled = wrapIcon(rawSvg({}), 'ArrowReset48Filled');
export default ArrowReset48Filled;
      
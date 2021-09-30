import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.63 6.63a1.25 1.25 0 00-1.76-1.76l-7.5 7.5a1.25 1.25 0 000 1.76l7.5 7.5a1.25 1.25 0 001.76-1.76L8.27 14.5H26.5a13 13 0 11-13 13 1.25 1.25 0 10-2.5 0A15.5 15.5 0 1026.5 12H8.27l5.36-5.37z" fill={primaryFill} /></svg>;
}

const ArrowReset48Regular = wrapIcon(rawSvg({}), 'ArrowReset48Regular');
export default ArrowReset48Regular;
      
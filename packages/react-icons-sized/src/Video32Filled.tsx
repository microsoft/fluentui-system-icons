import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 10A4.5 4.5 0 0016 5.5H6.5A4.5 4.5 0 002 10v12a4.5 4.5 0 004.5 4.5H16a4.5 4.5 0 004.5-4.5V10zm1.5 9.8l5.01 3.76c1.23.92 2.99.05 2.99-1.5V9.94a1.87 1.87 0 00-2.99-1.49L22 12.2v7.6z" fill={primaryFill} /></svg>;
}

const Video32Filled = wrapIcon(rawSvg({}), 'Video32Filled');
export default Video32Filled;
      
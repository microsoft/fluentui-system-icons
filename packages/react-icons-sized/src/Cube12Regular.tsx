import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.03 4.84a.5.5 0 01.63-.31L6 4.97l1.34-.44a.5.5 0 11.32.94l-1.16.39V7a.5.5 0 01-1 0V5.86l-1.16-.39a.5.5 0 01-.31-.63zm1.54-2.77c.28-.09.58-.09.86 0l2.85.84a1 1 0 01.72.96v4.26a1 1 0 01-.72.96l-2.85.84a1.5 1.5 0 01-.86 0L2.72 9.1A1 1 0 012 8.13V3.87c0-.44.29-.83.7-.95l2.87-.85zm.57.95a.5.5 0 00-.28 0L3 3.87v4.26l2.86.85c.1.02.19.02.28 0L9 8.13V3.87l-2.86-.85z" fill={primaryFill} /></svg>;
}

const Cube12Regular = wrapIcon(rawSvg({}), 'Cube12Regular');
export default Cube12Regular;
      
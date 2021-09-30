import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.57 2.57a8.71 8.71 0 001.05 11.03l1.1 1.1 3.5 3.39c.87.84 2.25.84 3.12 0a656.5 656.5 0 003.41-3.31l.01-.02 3.74 3.74a.75.75 0 001.06-1.06L3.28 2.22zm12.64 14.76l-3.4 3.31a.75.75 0 01-1.04 0l-3.09-3-1.49-1.47a7.21 7.21 0 01-1.03-8.89l3.24 3.24a3 3 0 003.72 3.72l3.1 3.1z" fill={primaryFill} /><path d="M11.27 8.09l3.64 3.64a3 3 0 00-3.64-3.64z" fill={primaryFill} /><path d="M17.1 5.63a7.21 7.21 0 01.86 9.15l1.08 1.08A8.7 8.7 0 006.87 3.69l1.08 1.07a7.21 7.21 0 019.15.87z" fill={primaryFill} /></svg>;
}

const LocationOff24Regular = wrapIcon(rawSvg({}), 'LocationOff24Regular');
export default LocationOff24Regular;
      
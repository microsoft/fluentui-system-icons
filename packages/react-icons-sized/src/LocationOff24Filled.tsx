import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.57 2.57a8.71 8.71 0 001.05 11.03l1.1 1.1 3.5 3.39c.87.84 2.25.84 3.12 0a656.5 656.5 0 003.41-3.31l.01-.02 3.74 3.74a.75.75 0 001.06-1.06L3.28 2.22zm9.13 11.25a2.51 2.51 0 01-2.88-2.88l2.88 2.88z" fill={primaryFill} /><path d="M14.5 11c0 .1 0 .2-.02.3l4.56 4.56A8.7 8.7 0 006.87 3.69l4.83 4.83.3-.02a2.5 2.5 0 012.5 2.5z" fill={primaryFill} /></svg>;
}

const LocationOff24Filled = wrapIcon(rawSvg({}), 'LocationOff24Filled');
export default LocationOff24Filled;
      
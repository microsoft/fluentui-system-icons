import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.5a1 1 0 00-1 1V9c0 1.74.61 3.26 1.71 4.34.87.86 2.01 1.4 3.29 1.59v.82a6.25 6.25 0 1012.5 0v-.66a3.25 3.25 0 10-2 0v.66a4.25 4.25 0 11-8.5 0v-.82a5.82 5.82 0 003.29-1.6A5.97 5.97 0 0014 9V3.5a1 1 0 00-1-1h-2a1 1 0 100 2h1V9c0 1.26-.44 2.24-1.11 2.91A4.02 4.02 0 018 13c-1.22 0-2.2-.42-2.89-1.09A3.98 3.98 0 014 9V4.5h1a1 1 0 000-2H3zm15.5 8.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Stethoscope24Filled = wrapIcon(rawSvg({}), 'Stethoscope24Filled');
export default Stethoscope24Filled;
      
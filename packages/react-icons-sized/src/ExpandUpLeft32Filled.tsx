import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 102 0V6.41l7.3 7.3a1 1 0 001.4-1.42L6.42 5H13a1 1 0 001-1zm10.5 1A2.5 2.5 0 0127 7.5V16h-7.23A3.77 3.77 0 0016 19.77V27H7.5A2.5 2.5 0 015 24.5V19a1 1 0 10-2 0v5.5A4.5 4.5 0 007.5 29h17a4.5 4.5 0 004.5-4.5v-17A4.5 4.5 0 0024.5 3H19a1 1 0 100 2h5.5z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft32Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft32Filled');
export default ExpandUpLeft32Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7.5A2.5 2.5 0 017.5 5H13a1 1 0 100-2H7.5A4.5 4.5 0 003 7.5v17A4.5 4.5 0 007.5 29h17a4.5 4.5 0 004.5-4.5V19a1 1 0 10-2 0v5.5a2.5 2.5 0 01-2.5 2.5H16v-7.23A3.77 3.77 0 0012.23 16H5V7.5zM5 18h7.23c.98 0 1.77.8 1.77 1.77V27H7.5A2.5 2.5 0 015 24.5V18zM18 4a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 11-2 0V6.41l-7.3 7.3a1 1 0 01-1.4-1.42L25.58 5H19a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const ExpandUpRight32Regular = wrapIcon(rawSvg({}), 'ExpandUpRight32Regular');
export default ExpandUpRight32Regular;
      
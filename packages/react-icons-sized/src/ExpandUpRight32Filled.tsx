import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 5A2.5 2.5 0 005 7.5V16h7.23A3.77 3.77 0 0116 19.77V27h8.5a2.5 2.5 0 002.5-2.5V19a1 1 0 112 0v5.5a4.5 4.5 0 01-4.5 4.5h-17A4.5 4.5 0 013 24.5v-17A4.5 4.5 0 017.5 3H13a1 1 0 110 2H7.5zM18 4a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 11-2 0V6.41l-7.3 7.3a1 1 0 01-1.4-1.42L25.58 5H19a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const ExpandUpRight32Filled = wrapIcon(rawSvg({}), 'ExpandUpRight32Filled');
export default ExpandUpRight32Filled;
      
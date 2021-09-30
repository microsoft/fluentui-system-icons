import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 102 0V6.41l7.3 7.3a1 1 0 001.4-1.42L6.42 5H13a1 1 0 001-1zm13 3.5A2.5 2.5 0 0024.5 5H19a1 1 0 110-2h5.5A4.5 4.5 0 0129 7.5v17a4.5 4.5 0 01-4.5 4.5h-17A4.5 4.5 0 013 24.5V19a1 1 0 112 0v5.5A2.5 2.5 0 007.5 27H16v-7.23A3.77 3.77 0 0119.77 16H27V7.5zM27 18h-7.23c-.98 0-1.77.8-1.77 1.77V27h6.5a2.5 2.5 0 002.5-2.5V18z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft32Regular = wrapIcon(rawSvg({}), 'ExpandUpLeft32Regular');
export default ExpandUpLeft32Regular;
      
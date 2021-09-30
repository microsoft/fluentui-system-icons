import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 5A3.5 3.5 0 005 8.5v15A3.5 3.5 0 008.5 27h15a3.5 3.5 0 003.5-3.5V19a1 1 0 112 0v4.5a5.5 5.5 0 01-5.5 5.5h-15A5.5 5.5 0 013 23.5v-15A5.5 5.5 0 018.5 3H13a1 1 0 110 2H8.5zM18 4a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 11-2 0V6.41l-7.3 7.3a1 1 0 01-1.4-1.42L25.58 5H19a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const Open32Regular = wrapIcon(rawSvg({}), 'Open32Regular');
export default Open32Regular;
      
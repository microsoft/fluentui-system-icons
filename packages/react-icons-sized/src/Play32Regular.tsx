import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.24 6.2A1.5 1.5 0 009 7.5v17a1.5 1.5 0 002.24 1.3l15-8.5a1.5 1.5 0 000-2.6l-15-8.5zM7 7.5a3.5 3.5 0 015.22-3.04l15 8.5a3.5 3.5 0 010 6.09l-15 8.5A3.5 3.5 0 017 24.5v-17z" fill={primaryFill} /></svg>;
}

const Play32Regular = wrapIcon(rawSvg({}), 'Play32Regular');
export default Play32Regular;
      
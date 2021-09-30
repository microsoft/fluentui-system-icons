import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12.5a1 1 0 011 .89V21a1 1 0 01-2 .12v-5.21l-5.8 5.8a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 5.8-5.79h-5.1a1 1 0 01-.11-1.99h7.62zm3-10.5a1 1 0 011 .88V8.1l5.8-5.8a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-5.8 5.8h5.1a1 1 0 01.1 1.99H13.5a1 1 0 01-1-.88V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const ArrowMinimize24Filled = wrapIcon(rawSvg({}), 'ArrowMinimize24Filled');
export default ArrowMinimize24Filled;
      
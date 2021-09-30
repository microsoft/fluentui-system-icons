import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.88 4.01H12a1 1 0 011 .88v11.7l2.3-2.3a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-4 4a1 1 0 01-1.32.08l-.1-.08-4-4a1 1 0 011.32-1.5l.1.08L11 16.6V5a1 1 0 01.88-.99H12h-.12z" fill={primaryFill} /></svg>;
}

const ArrowSortDown24Filled = wrapIcon(rawSvg({}), 'ArrowSortDown24Filled');
export default ArrowSortDown24Filled;
      
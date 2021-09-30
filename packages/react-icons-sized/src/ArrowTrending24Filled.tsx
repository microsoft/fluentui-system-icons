import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 5.5h7a1 1 0 011 .88v7.12a1 1 0 01-2 .12V8.9l-7.3 7.3a1 1 0 01-1.31.08l-.1-.08L9 13.9l-5.28 5.3a1 1 0 01-1.5-1.32l.08-.1 6-6a1 1 0 011.32-.08l.1.08L12 14.1l6.58-6.59H14a1 1 0 01-.99-.88V6.5a1 1 0 01.88-1H21h-7z" fill={primaryFill} /></svg>;
}

const ArrowTrending24Filled = wrapIcon(rawSvg({}), 'ArrowTrending24Filled');
export default ArrowTrending24Filled;
      
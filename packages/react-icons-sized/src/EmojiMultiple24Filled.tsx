import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8.5a6.5 6.5 0 004.94 6.31 8 8 0 011.72-4.8 2 2 0 00-1.68.69.75.75 0 01-1.14-.97 3.5 3.5 0 014.02-.95 8 8 0 014.95-1.84A6.5 6.5 0 002 8.5zm5.5-2a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zM22 15a7 7 0 11-14 0 7 7 0 0114 0zm-8.5-1.5a1 1 0 10-2 0 1 1 0 002 0zm4.47 3.22a.63.63 0 00-.88.07 2.75 2.75 0 01-4.18 0 .62.62 0 10-.95.82 4 4 0 006.08-.01.62.62 0 00-.07-.88zm-.47-2.22a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const EmojiMultiple24Filled = wrapIcon(rawSvg({}), 'EmojiMultiple24Filled');
export default EmojiMultiple24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.67 14.92a1 1 0 011.41 1.42L6.41 19H8a1 1 0 011 .89V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 112 0v1.6l2.67-2.68zM16 21a1 1 0 110-2h1.59l-2.67-2.66a1 1 0 01-.08-1.32l.08-.1a1 1 0 011.42 0L19 17.6V16a1 1 0 01.89-.99H20a1 1 0 011 1v4a1 1 0 01-1 1h-4zM8 3a1 1 0 010 2H6.42l2.66 2.67a1 1 0 01.09 1.32l-.09.1a1 1 0 01-1.41 0L5 6.4V8a1 1 0 01-.88 1H4a1 1 0 01-1-1V4a1 1 0 011-1h4zm12 0a1 1 0 011 1v4a1 1 0 11-2 0V6.41l-2.66 2.67a1 1 0 01-1.32.09l-.1-.09a1 1 0 010-1.41L17.6 5H16a1 1 0 01-.99-.88V4a1 1 0 011-1h4z" fill={primaryFill} /></svg>;
}

const ArrowExpand24Filled = wrapIcon(rawSvg({}), 'ArrowExpand24Filled');
export default ArrowExpand24Filled;
      
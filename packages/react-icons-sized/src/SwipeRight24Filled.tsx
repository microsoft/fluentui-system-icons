import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a1 1 0 001 1h11.59l-1.3 1.3a1 1 0 00-.08 1.31l.08.1a1 1 0 001.32.08l.1-.08 3-3a1 1 0 00.08-1.32l-.08-.1-3-3a1 1 0 00-1.5 1.32l.08.1L18.6 11H7a1 1 0 00-1 1zm-4 0a5 5 0 009.58 2h-1.7a3.5 3.5 0 110-4h1.7A5 5 0 002 12z" fill={primaryFill} /></svg>;
}

const SwipeRight24Filled = wrapIcon(rawSvg({}), 'SwipeRight24Filled');
export default SwipeRight24Filled;
      
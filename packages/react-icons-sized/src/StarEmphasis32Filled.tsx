import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.39 4.2a1.8 1.8 0 013.23 0l3.04 6.17 6.8.99a1.8 1.8 0 011 3.07l-4.92 4.8L24.7 26a1.8 1.8 0 01-2.61 1.9L16 24.7l-6.08 3.2A1.8 1.8 0 017.3 26l1.16-6.78-4.92-4.8a1.8 1.8 0 011-3.06l6.8-1 3.04-6.16zm10.9 5.38a1 1 0 010-1.42l3-3a1 1 0 111.42 1.42l-3 3a1 1 0 01-1.42 0zm-23 13.58a1 1 0 101.42 1.42l3-3a1 1 0 10-1.42-1.42l-3 3zm0-18a1 1 0 011.42 0l3 3a1 1 0 01-1.42 1.42l-3-3a1 1 0 010-1.42zm24.42 15a1 1 0 00-1.42 1.42l3 3a1 1 0 001.42-1.42l-3-3z" fill={primaryFill} /></svg>;
}

const StarEmphasis32Filled = wrapIcon(rawSvg({}), 'StarEmphasis32Filled');
export default StarEmphasis32Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.46 6.46a1 1 0 01-1.42 0L13 5.4v2.84a1 1 0 11-2 0V5.41L9.96 6.46a1 1 0 01-1.42-1.42L11.3 2.3a1 1 0 011.42 0l2.75 2.75a1 1 0 010 1.42z" fill={primaryFill} /><path d="M6.46 14.04a1 1 0 11-1.42 1.42L2.3 12.7a1 1 0 010-1.42l2.75-2.75a1 1 0 011.42 1.42L5.4 11h2.84a1 1 0 110 2H5.41l1.05 1.04z" fill={primaryFill} /><path d="M18.96 15.46a1 1 0 01-1.42-1.42L18.6 13h-2.84a1 1 0 110-2h2.84l-1.05-1.04a1 1 0 011.42-1.42l2.75 2.75a1 1 0 010 1.42l-2.75 2.75z" fill={primaryFill} /><path d="M11 18.59v-2.84a1 1 0 112 0v2.84l1.04-1.05a1 1 0 011.42 1.42L12.7 21.7a1 1 0 01-1.42 0l-2.75-2.75a1 1 0 111.42-1.42L11 18.6z" fill={primaryFill} /></svg>;
}

const ArrowMove24Filled = wrapIcon(rawSvg({}), 'ArrowMove24Filled');
export default ArrowMove24Filled;
      
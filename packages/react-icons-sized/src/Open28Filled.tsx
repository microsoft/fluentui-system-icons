import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2v-4.5a1 1 0 112 0V21a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h4.5a1 1 0 110 2H7zm8.5-1a1 1 0 011-1H24a1 1 0 011 1v7.5a1 1 0 11-2 0V6.41l-5.8 5.8a1 1 0 11-1.4-1.42L21.58 5H16.5a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const Open28Filled = wrapIcon(rawSvg({}), 'Open28Filled');
export default Open28Filled;
      
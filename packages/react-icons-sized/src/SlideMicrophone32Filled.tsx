import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 4A4.5 4.5 0 002 8.5v15A4.5 4.5 0 006.5 28h12.25A8.01 8.01 0 0117 23a2.75 2.75 0 013-2.74V19a5 5 0 0110 0V8.5A4.5 4.5 0 0025.5 4h-19zM8 10a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 9h6a1 1 0 110 2H9a1 1 0 110-2zm-1-4a1 1 0 011-1h9a1 1 0 110 2H9a1 1 0 01-1-1zm12.53 12A6.02 6.02 0 0119 23a.75.75 0 011.5 0 4.48 4.48 0 004.1 4.48h.02a4.56 4.56 0 001.13-.04h.02A4.47 4.47 0 0029.5 23a.75.75 0 111.5 0 5.97 5.97 0 01-5 5.92v1.33a.75.75 0 01-1.5 0v-1.27A5.97 5.97 0 0120.53 27zM22 19a3 3 0 116 0v4a3 3 0 11-6 0v-4z" fill={primaryFill} /></svg>;
}

const SlideMicrophone32Filled = wrapIcon(rawSvg({}), 'SlideMicrophone32Filled');
export default SlideMicrophone32Filled;
      
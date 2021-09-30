import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 4A4.5 4.5 0 002 8.5v15A4.5 4.5 0 006.5 28h12.25a8 8 0 01-1.17-2H6.5A2.5 2.5 0 014 23.5v-15A2.5 2.5 0 016.5 6h19A2.5 2.5 0 0128 8.5V15a5 5 0 012 4V8.5A4.5 4.5 0 0025.5 4h-19zm13.3 22a6.02 6.02 0 004.7 2.98v1.27a.75.75 0 001.5 0v-1.33A5.97 5.97 0 0031 23a.75.75 0 00-1.5 0 4.51 4.51 0 01-3.73 4.43h-.02a4.53 4.53 0 01-1.13.05h-.01A4.47 4.47 0 0120.5 23a.75.75 0 00-1.5 0c0 1.1.3 2.12.8 3zM25 16a3 3 0 00-3 3v4a3 3 0 106 0v-4a3 3 0 00-3-3zM9 9a1 1 0 000 2h6a1 1 0 100-2H9zM8 20a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1-6a1 1 0 100 2h9a1 1 0 100-2H9z" fill={primaryFill} /></svg>;
}

const SlideMicrophone32Regular = wrapIcon(rawSvg({}), 'SlideMicrophone32Regular');
export default SlideMicrophone32Regular;
      
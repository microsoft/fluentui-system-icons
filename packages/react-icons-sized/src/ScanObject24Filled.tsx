import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.25c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3zm17 0c0-.97-.78-1.75-1.75-1.75h-3a.75.75 0 010-1.5h3C20.55 2 22 3.46 22 5.25v3a.75.75 0 01-1.5 0v-3zM5.25 20.5c-.97 0-1.75-.78-1.75-1.75v-3a.75.75 0 00-1.5 0v3C2 20.55 3.46 22 5.25 22h3a.75.75 0 000-1.5h-3zm15.25-1.75c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3a.75.75 0 00-1.5 0v3zM13.82 8.23a2.25 2.25 0 00-3.64 0l-3.05 4.2A2.25 2.25 0 008.95 16h6.1c1.84 0 2.9-2.09 1.82-3.57l-3.05-4.2z" fill={primaryFill} /></svg>;
}

const ScanObject24Filled = wrapIcon(rawSvg({}), 'ScanObject24Filled');
export default ScanObject24Filled;
      
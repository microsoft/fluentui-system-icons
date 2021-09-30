import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3.5c-.97 0-1.75.78-1.75 1.75v3a.75.75 0 01-1.5 0v-3C2 3.45 3.46 2 5.25 2h3a.75.75 0 010 1.5h-3zm13.5 0c.97 0 1.75.78 1.75 1.75v3a.75.75 0 001.5 0v-3C22 3.45 20.54 2 18.75 2h-3a.75.75 0 000 1.5h3zM3.5 18.75c0 .97.78 1.75 1.75 1.75h3a.75.75 0 010 1.5h-3A3.25 3.25 0 012 18.75v-3a.75.75 0 011.5 0v3zm15.25 1.75c.97 0 1.75-.78 1.75-1.75v-3a.75.75 0 011.5 0v3c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 010-1.5h3zM13.82 8.23a2.25 2.25 0 00-3.64 0l-3.05 4.2A2.25 2.25 0 008.95 16h6.1c1.84 0 2.9-2.09 1.82-3.57l-3.05-4.2zm-2.43.88a.75.75 0 011.22 0l3.05 4.2c.36.5 0 1.19-.6 1.19H8.94a.75.75 0 01-.61-1.2l3.05-4.2z" fill={primaryFill} /></svg>;
}

const ScanObject24Regular = wrapIcon(rawSvg({}), 'ScanObject24Regular');
export default ScanObject24Regular;
      
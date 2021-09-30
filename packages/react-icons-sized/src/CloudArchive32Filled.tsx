import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 7.74A7.64 7.64 0 0116 5c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.85 5.85 0 0129.62 16H17a2 2 0 00-2 2v2a2 2 0 001 1.73V24H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 18c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3zM16 18a1 1 0 011-1h13a1 1 0 011 1v2a1 1 0 01-1 1H17a1 1 0 01-1-1v-2zm13.85 4H17v5.85a3 3 0 003 3h6.85a3 3 0 003-3V22zm-8.35 2h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudArchive32Filled = wrapIcon(rawSvg({}), 'CloudArchive32Filled');
export default CloudArchive32Filled;
      
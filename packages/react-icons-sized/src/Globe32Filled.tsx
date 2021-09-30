import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 16c0-1.4.08-2.73.22-4h9.56a35.48 35.48 0 010 8h-9.56c-.14-1.27-.22-2.6-.22-4zm-1.79 4a37.62 37.62 0 010-8H2.58a14 14 0 000 8h6.63zm-5.86 2h6.13c.32 1.86.78 3.55 1.35 4.98.37.92.8 1.76 1.27 2.47A14.04 14.04 0 013.35 22zm8.16 0h8.98c-.3 1.6-.7 3.03-1.18 4.24a9.26 9.26 0 01-1.7 2.9c-.6.63-1.15.86-1.61.86-.46 0-1-.23-1.6-.87a9.26 9.26 0 01-1.71-2.9c-.49-1.2-.89-2.63-1.18-4.23zm11 0a24.56 24.56 0 01-1.34 4.98c-.37.92-.8 1.76-1.27 2.47A14.04 14.04 0 0028.65 22h-6.13zm6.91-2a14 14 0 000-8h-6.63a37.61 37.61 0 010 8h6.63zM19.32 5.76c.48 1.2.88 2.64 1.17 4.24H11.5c.3-1.6.7-3.03 1.18-4.24a9.26 9.26 0 011.7-2.9C15 2.24 15.53 2 16 2H16c.47 0 1.01.23 1.6.87.61.63 1.2 1.6 1.71 2.9zm3.2 4.24h6.13a14.04 14.04 0 00-8.75-7.45c.48.71.9 1.55 1.27 2.47A24.56 24.56 0 0122.52 10zM3.35 10h6.13c.32-1.86.78-3.55 1.35-4.98.37-.92.8-1.76 1.27-2.47A14.04 14.04 0 003.35 10z" fill={primaryFill} /></svg>;
}

const Globe32Filled = wrapIcon(rawSvg({}), 'Globe32Filled');
export default Globe32Filled;
      
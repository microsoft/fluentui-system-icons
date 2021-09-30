import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3A7.64 7.64 0 0116 6zm-3 6a1 1 0 100 2h6a1 1 0 100-2h-6zm-7 7a1 1 0 001 1h6a1 1 0 100-2H7a1 1 0 00-1 1zm13-1a1 1 0 100 2h6a1 1 0 100-2h-6z" fill={primaryFill} /></svg>;
}

const CloudWords32Filled = wrapIcon(rawSvg({}), 'CloudWords32Filled');
export default CloudWords32Filled;
      
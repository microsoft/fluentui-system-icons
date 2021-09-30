import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 12a1 1 0 100 2h6a1 1 0 100-2h-6zm-7 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm13-1a1 1 0 100 2h6a1 1 0 100-2h-6zM16 6a7.64 7.64 0 00-6.15 2.74 8.4 8.4 0 00-1.8 4.3C3.94 13.48 2 16.65 2 19a5.9 5.9 0 001.37 3.9C4.48 24.19 6.3 25 9 25h14c2.15 0 3.92-.52 5.16-1.6A5.61 5.61 0 0030 19c0-1.89-.94-3.41-2.26-4.44a7.73 7.73 0 00-3.78-1.5 7.46 7.46 0 00-2.7-5.2A8.46 8.46 0 0016 6zm-6 8c0-1.3.44-2.82 1.4-4 .93-1.13 2.4-2 4.6-2 1.3 0 2.82.44 4 1.4 1.13.93 2 2.4 2 4.6a1 1 0 001 1c1.3 0 2.58.42 3.51 1.15A3.55 3.55 0 0128 19c0 1.3-.42 2.25-1.16 2.89-.76.66-1.99 1.11-3.84 1.11H9c-2.3 0-3.48-.68-4.12-1.4A3.91 3.91 0 014 19c0-1.47 1.38-4 5-4a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const CloudWords32Regular = wrapIcon(rawSvg({}), 'CloudWords32Regular');
export default CloudWords32Regular;
      
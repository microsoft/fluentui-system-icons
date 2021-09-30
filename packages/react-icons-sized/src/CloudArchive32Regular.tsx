import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.4 9a6.46 6.46 0 00-1.4 4 1 1 0 01-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 21.31 6.7 22 9 22h7v2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 18c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3A7.64 7.64 0 0116 5c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.85 5.85 0 0129.62 16h-2.27c-.23-.31-.5-.6-.84-.85A5.85 5.85 0 0023 14a1 1 0 01-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0016 7c-2.2 0-3.67.87-4.6 2zm4.6 9a1 1 0 011-1h13a1 1 0 011 1v2a1 1 0 01-1 1H17a1 1 0 01-1-1v-2zm13.85 4H17v5.85a3 3 0 003 3h6.85a3 3 0 003-3V22zm-8.35 2h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudArchive32Regular = wrapIcon(rawSvg({}), 'CloudArchive32Regular');
export default CloudArchive32Regular;
      
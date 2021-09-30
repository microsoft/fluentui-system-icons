import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 15a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M16 14a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10.75 15.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v13.5c0 .41-.34.75-.75.75H18.5v.75c0 .97-.78 1.75-1.75 1.75h-1.5c-.97 0-1.75-.78-1.75-1.75v-.75h-3v.75c0 .97-.78 1.75-1.75 1.75h-1.5c-.97 0-1.75-.78-1.75-1.75v-.75H3.75a.75.75 0 01-.75-.75V5.25zm6 15v-.75H7v.75c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25zM7 18h10v-6H7v6zm8 1.5v.75c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-.75h-2zm4.5-1.5V5.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75V18h1v-6.75c0-.05 0-.1.02-.16l.74-3.33A2.25 2.25 0 018.46 6h7.09c1.05 0 1.96.73 2.2 1.76l.73 3.33.02.16V18h1zM8.45 7.5a.75.75 0 00-.73.59l-.54 2.41h9.64l-.54-2.41a.75.75 0 00-.73-.59h-7.1z" fill={primaryFill} /></svg>;
}

const VehicleTruck24Regular = wrapIcon(rawSvg({}), 'VehicleTruck24Regular');
export default VehicleTruck24Regular;
      
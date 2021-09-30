import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L4.14 5.2A3.25 3.25 0 002 8.25v9.5C2 19.55 3.46 21 5.25 21h13.5c.36 0 .7-.06 1.02-.16l.95.94a.75.75 0 001.06-1.06L3.28 2.22zM18.44 19.5H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75h.19l3.11 3.11a4.5 4.5 0 006.34 6.34l3.55 3.55zm-8.82-8.82l4.2 4.2a3 3 0 01-4.2-4.2z" fill={primaryFill} /><path d="M11.24 8.06L12.8 9.6a3 3 0 012.1 2.11l1.55 1.55a4.5 4.5 0 00-5.2-5.2z" fill={primaryFill} /><path d="M20.5 8.25v9.07l1.36 1.36c.1-.3.14-.6.14-.93v-9.5C22 6.45 20.54 5 18.75 5h-2.07l-.82-1.39a2.25 2.25 0 00-1.94-1.1h-3.8c-.78 0-1.5.4-1.91 1.07l-.56.9 1.1 1.08.73-1.2.07-.09a.75.75 0 01.57-.27h3.8c.27 0 .52.14.65.37l1.03 1.76c.14.23.38.37.65.37h2.5c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /></svg>;
}

const CameraOff24Regular = wrapIcon(rawSvg({}), 'CameraOff24Regular');
export default CameraOff24Regular;
      
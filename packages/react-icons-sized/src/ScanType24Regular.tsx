import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3.5c-.97 0-1.75.78-1.75 1.75v3a.75.75 0 01-1.5 0v-3C2 3.45 3.46 2 5.25 2h3a.75.75 0 010 1.5h-3zm0 17c-.97 0-1.75-.78-1.75-1.75v-3a.75.75 0 00-1.5 0v3C2 20.55 3.46 22 5.25 22h3a.75.75 0 000-1.5h-3zM20.5 5.25c0-.97-.78-1.75-1.75-1.75h-3a.75.75 0 010-1.5h3C20.55 2 22 3.46 22 5.25v3a.75.75 0 01-1.5 0v-3zM18.75 20.5c.97 0 1.75-.78 1.75-1.75v-3a.75.75 0 011.5 0v3c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 010-1.5h3zM7.75 6a.75.75 0 00-.75.75V8a.75.75 0 001.5 0v-.5h2.75v9h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-9h2.75V8A.75.75 0 0017 8V6.75a.75.75 0 00-.75-.75h-8.5z" fill={primaryFill} /></svg>;
}

const ScanType24Regular = wrapIcon(rawSvg({}), 'ScanType24Regular');
export default ScanType24Regular;
      
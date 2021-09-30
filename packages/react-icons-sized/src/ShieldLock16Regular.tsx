import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4c.28 0 .5.22.5.5v.9c-.3-.17-.64-.3-1-.36v-.06a6.64 6.64 0 01-4-1.8 6.65 6.65 0 01-4 1.8V7.5c0 1.43.36 2.57 1.02 3.45A5.54 5.54 0 007 12.55v1.1A6.24 6.24 0 013 7.5v-3c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM9.5 8v1H9a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5V8a2 2 0 10-4 0zm1 1V8a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const ShieldLock16Regular = wrapIcon(rawSvg({}), 'ShieldLock16Regular');
export default ShieldLock16Regular;
      
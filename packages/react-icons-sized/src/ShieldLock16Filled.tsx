import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 2.15a.5.5 0 00-.7 0A5.72 5.72 0 013.5 4a.5.5 0 00-.5.5v3c0 2.92 1.35 5 4 6.15V10a2 2 0 011.5-1.94V8A3 3 0 0113 5.4v-.9a.5.5 0 00-.5-.5c-1.53 0-2.9-.61-4.15-1.85zM9.5 9V8a2 2 0 114 0v1h.5a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h.5zm1-1v1h2V8a1 1 0 10-2 0zm1.75 4a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const ShieldLock16Filled = wrapIcon(rawSvg({}), 'ShieldLock16Filled');
export default ShieldLock16Filled;
      
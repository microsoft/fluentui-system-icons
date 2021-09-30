import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 2a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V8h-3a1 1 0 110-2h3V3a1 1 0 011-1zM6 3a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-6a3 3 0 00-3-3h-7V6a3 3 0 00-3-3H6zm7 10H5V6a1 1 0 011-1h6a1 1 0 011 1v7zm2 10v-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7zm-2 0H6a1 1 0 01-1-1v-7h8v8z" fill={primaryFill} /></svg>;
}

const AppsAddIn28Filled = wrapIcon(rawSvg({}), 'AppsAddIn28Filled');
export default AppsAddIn28Filled;
      
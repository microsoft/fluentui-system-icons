import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.22 6.28l-3-3a.75.75 0 011.06-1.06l18.5 18.5a.75.75 0 11-1.06 1.06l-3.28-3.28H15a3 3 0 01-6 .18v-.18H4.27a1.25 1.25 0 01-1.14-1.75L4.5 13.6V9.5c0-1.15.26-2.24.72-3.21zM15.94 17L6.36 7.43A6.02 6.02 0 006 9.5v4.4L4.66 17h11.28zm-2.44 1.5h-3a1.5 1.5 0 003 .15v-.15z" fill={primaryFill} /><path d="M18 13.9l.7 1.63 2.2 2.18a1.25 1.25 0 00-.02-.96l-1.38-3.16V9.25A7.5 7.5 0 007.04 3.86l1.07 1.06A5.99 5.99 0 0118 9.28V13.91z" fill={primaryFill} /></svg>;
}

const AlertOff24Regular = wrapIcon(rawSvg({}), 'AlertOff24Regular');
export default AlertOff24Regular;
      
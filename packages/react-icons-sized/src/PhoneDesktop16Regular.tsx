import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2h7a1 1 0 011 1v6a1 1 0 01-1 1H8v1h2v1H8v1h3.5a.5.5 0 000-1H11v-1h2a2 2 0 002-2V3a2 2 0 00-2-2H6a2 2 0 00-2 2v2h1V3a1 1 0 011-1z" fill={primaryFill} /><path d="M3.5 12a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M2.5 6C1.67 6 1 6.67 1 7.5v6c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-6C7 6.67 6.33 6 5.5 6h-3zm0 1h3c.28 0 .5.22.5.5v6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-6c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PhoneDesktop16Regular = wrapIcon(rawSvg({}), 'PhoneDesktop16Regular');
export default PhoneDesktop16Regular;
      
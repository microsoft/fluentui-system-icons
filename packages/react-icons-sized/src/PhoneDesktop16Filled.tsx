import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2h1.5A2.5 2.5 0 018 7.5V11h2v1H8v1h3.5a.5.5 0 000-1H11v-1h2a2 2 0 002-2V3a2 2 0 00-2-2H6z" fill={primaryFill} /><path d="M2.5 6C1.67 6 1 6.67 1 7.5v6c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-6C7 6.67 6.33 6 5.5 6h-3zm.5 6.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const PhoneDesktop16Filled = wrapIcon(rawSvg({}), 'PhoneDesktop16Filled');
export default PhoneDesktop16Filled;
      
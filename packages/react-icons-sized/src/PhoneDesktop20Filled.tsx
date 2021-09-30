import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v3h2.5A2.5 2.5 0 019 9.5V13h3v2H9v1h5.5a.5.5 0 000-1H13v-2h3a2 2 0 002-2V4a2 2 0 00-2-2H6z" fill={primaryFill} /><path d="M3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-7C8 8.67 7.33 8 6.5 8h-3zm.5 7.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const PhoneDesktop20Filled = wrapIcon(rawSvg({}), 'PhoneDesktop20Filled');
export default PhoneDesktop20Filled;
      
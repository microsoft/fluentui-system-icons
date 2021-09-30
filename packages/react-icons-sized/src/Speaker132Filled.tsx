import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.35 4.46a1.5 1.5 0 012.65.97v21.14a1.5 1.5 0 01-2.65.97l-4.08-4.83A2 2 0 009.74 22H6a4 4 0 01-4-4v-4a4 4 0 014-4h3.74a2 2 0 001.53-.7l4.08-4.84zm7.47 4.97a1 1 0 10-1.64 1.14A9.54 9.54 0 0123.06 16c0 1.76-.6 3.56-1.88 5.43a1 1 0 001.64 1.14A11.53 11.53 0 0025.06 16c0-2.24-.77-4.44-2.24-6.57z" fill={primaryFill} /></svg>;
}

const Speaker132Filled = wrapIcon(rawSvg({}), 'Speaker132Filled');
export default Speaker132Filled;
      
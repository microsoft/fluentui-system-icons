import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.78 23l-6.21 6.2a1.75 1.75 0 002.35 2.6l.13-.12 9.19-9.19c.64-.64.68-1.66.11-2.35l-.11-.13-9.2-9.19a1.75 1.75 0 00-2.58 2.35l.11.13 6.2 6.2H26c-3.34 0-6.45.74-9.16 2.17l-.4.22c-2.76 1.54-5 3.79-6.55 6.55A19.42 19.42 0 007.5 38a1.75 1.75 0 103.5 0c0-2.92.67-5.59 1.94-7.85a13.51 13.51 0 015.21-5.21A15.78 15.78 0 0125.52 23L26 23h7.78z" fill={primaryFill} /></svg>;
}

const ArrowForward48Filled = wrapIcon(rawSvg({}), 'ArrowForward48Filled');
export default ArrowForward48Filled;
      
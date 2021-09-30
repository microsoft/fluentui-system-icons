import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.22 36l7.65 7.63a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l6.79 6.8-5.9 6.42-.1.1-.07.11A4.48 4.48 0 004 22.5v7a6.5 6.5 0 006.5 6.5h5a6.5 6.5 0 006.5-6.5V25h1.24L26 27.78v1.72a6.5 6.5 0 006.5 6.5h1.72zM16.23 18h-5.66l2.7-2.95L16.24 18z" fill={primaryFill} /><path d="M40.54 35.24L26.27 20.96A4.5 4.5 0 0130.5 18h6.95l-4.16-4.52a1.5 1.5 0 00-.9-.47l-.2-.01h-2.7a1.5 1.5 0 01-.2-2.99l.2-.01h2.7a4.5 4.5 0 013.04 1.18l.26.27 7.29 7.9c.1.1.18.22.24.35.61.77.98 1.74.98 2.8v7a6.5 6.5 0 01-3.46 5.74z" fill={primaryFill} /><path d="M15.33 10.03L18.3 13h.2l.2-.01a1.5 1.5 0 00-.2-2.99h-2.68l-.38.02h-.11z" fill={primaryFill} /></svg>;
}

const GlassesOff48Filled = wrapIcon(rawSvg({}), 'GlassesOff48Filled');
export default GlassesOff48Filled;
      
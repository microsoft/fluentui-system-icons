import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M38.2 39.96l3.67 3.67a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l2.79 2.8A6.5 6.5 0 004 14.5v19a6.5 6.5 0 006.5 6.5h27c.23 0 .47-.01.7-.04zM16.74 18.5c-.45.08-.89.25-1.26.52-.84.6-1.98 1.86-1.98 4.98 0 3.16 1.08 4.4 1.94 4.96.63.42 1.52.62 2.39.53.87-.1 1.54-.46 1.9-.97a1.25 1.25 0 012.04 1.46 5.1 5.1 0 01-3.68 2 6.23 6.23 0 01-4.03-.94C12.38 29.94 11 27.84 11 24c0-3.88 1.49-5.92 3.02-7.02.24-.17.49-.31.75-.44l1.97 1.96zm13.74.52c-.77.54-1.78 1.64-1.95 4.2l5.75 5.75c.18-.13.33-.28.45-.45a1.25 1.25 0 012.04 1.46c-.21.29-.45.55-.71.77l6.64 6.65a6.47 6.47 0 001.3-3.9v-19A6.5 6.5 0 0037.5 8H13.3l13.05 13.04a6.94 6.94 0 012.67-4.06c2.31-1.65 6.1-1.36 7.79 1.36a1.25 1.25 0 01-2.12 1.32c-.8-1.28-2.87-1.6-4.21-.64z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff48Filled = wrapIcon(rawSvg({}), 'ClosedCaptionOff48Filled');
export default ClosedCaptionOff48Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.12 14c.37-.5.66-1.2.8-2h-4.84c.14.8.43 1.5.8 2 .52.72 1.11 1 1.62 1 .5 0 1.1-.28 1.62-1z" fill={primaryFill} /><path d="M14.12 8c.44.6.78 1.48.86 2.5h-4.96c.08-1.02.42-1.9.86-2.5.52-.72 1.11-1 1.62-1 .5 0 1.1.28 1.62 1z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm8.5 12c2.2 0 4-2.46 4-5.5s-1.8-5.5-4-5.5-4 2.46-4 5.5 1.8 5.5 4 5.5z" fill={primaryFill} /></svg>;
}

const BookTheta24Filled = wrapIcon(rawSvg({}), 'BookTheta24Filled');
export default BookTheta24Filled;
      
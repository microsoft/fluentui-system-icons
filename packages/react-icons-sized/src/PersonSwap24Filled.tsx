import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 14C17 14 18 15 18 16.25v.91c0 .29-.04.57-.13.84h-2.03A1.75 1.75 0 0013 16.02l-2.5 2.5a1.75 1.75 0 000 2.48l.94.93c-.47.05-.95.07-1.45.07-3.42 0-5.95-1.07-7.49-3.24a2.75 2.75 0 01-.51-1.6v-.91C2 15 3 14 4.25 14h11.5z" fill={primaryFill} /><path d="M10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /><path d="M14.78 17.78a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 000 1.06l2.5 2.5a.75.75 0 001.06-1.06l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 001.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5a.75.75 0 10-1.06 1.06L20.44 19h-6.88l1.22-1.22z" fill={primaryFill} /></svg>;
}

const PersonSwap24Filled = wrapIcon(rawSvg({}), 'PersonSwap24Filled');
export default PersonSwap24Filled;
      
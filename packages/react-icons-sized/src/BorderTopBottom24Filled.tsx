import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7a1 1 0 01-1-1 3 3 0 013-3h12a3 3 0 013 3 1 1 0 11-2 0 1 1 0 00-1-1H6a1 1 0 00-1 1 1 1 0 01-1 1z" fill={primaryFill} /><path d="M5 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M19 11a1 1 0 112 0v2a1 1 0 11-2 0v-2z" fill={primaryFill} /><path d="M3 18a1 1 0 112 0 1 1 0 001 1h12a1 1 0 001-1 1 1 0 112 0 3 3 0 01-3 3H6a3 3 0 01-3-3z" fill={primaryFill} /></svg>;
}

const BorderTopBottom24Filled = wrapIcon(rawSvg({}), 'BorderTopBottom24Filled');
export default BorderTopBottom24Filled;
      
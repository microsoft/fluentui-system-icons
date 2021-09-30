import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 002 0 1 1 0 011-1h12a1 1 0 011 1 1 1 0 102 0 3 3 0 00-3-3H6a3 3 0 00-3 3z" fill={primaryFill} /><path d="M5 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M5.5 17.25v.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75v-.5a1.25 1.25 0 112.5 0V18a3.25 3.25 0 01-3.25 3H6.25a3.25 3.25 0 01-3.24-3H3v-.75a1.25 1.25 0 112.5 0z" fill={primaryFill} /><path d="M20 10a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const BorderTopBottomThick24Filled = wrapIcon(rawSvg({}), 'BorderTopBottomThick24Filled');
export default BorderTopBottomThick24Filled;
      
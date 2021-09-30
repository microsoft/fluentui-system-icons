import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25a.75.75 0 001.5 0v-.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v.5z" fill={primaryFill} /><path d="M4.5 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" fill={primaryFill} /><path d="M19.5 10.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z" fill={primaryFill} /><path d="M4 17a1 1 0 00-1 1 3 3 0 003 3h12a3 3 0 003-3 1 1 0 10-2 0 1 1 0 01-1 1H6a1 1 0 01-1-1 1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const BorderTopBottomThick24Regular = wrapIcon(rawSvg({}), 'BorderTopBottomThick24Regular');
export default BorderTopBottomThick24Regular;
      
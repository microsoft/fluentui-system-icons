import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 7A.75.75 0 013 6.25v-.5A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v.5a.75.75 0 01-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v.5c0 .41-.34.75-.75.75z" fill={primaryFill} /><path d="M4.5 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" fill={primaryFill} /><path d="M19.5 10.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z" fill={primaryFill} /><path d="M3 17.75a.75.75 0 011.5 0v.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 011.5 0v.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25v-.5z" fill={primaryFill} /></svg>;
}

const BorderTopBottom24Regular = wrapIcon(rawSvg({}), 'BorderTopBottom24Regular');
export default BorderTopBottom24Regular;
      
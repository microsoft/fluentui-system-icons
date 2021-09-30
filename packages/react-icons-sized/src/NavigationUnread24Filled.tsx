import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 8.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill={primaryFill} /><path d="M15.71 7a3.74 3.74 0 01-.14-2H2.88A1 1 0 003 7h12.71z" fill={primaryFill} /><path d="M21 17H2.88A1 1 0 003 19h18.12a1 1 0 00-.12-2z" fill={primaryFill} /><path d="M3 11h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H3z" fill={primaryFill} /></svg>;
}

const NavigationUnread24Filled = wrapIcon(rawSvg({}), 'NavigationUnread24Filled');
export default NavigationUnread24Filled;
      
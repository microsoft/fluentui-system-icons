import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4a.75.75 0 000 1.5h1.14c.77 0 1.45.5 1.68 1.25L6.24 9H2.75a.75.75 0 000 1.5h4c.97 0 1.75.78 1.75 1.75v2.5c0 .28-.1.54-.25.75a3.25 3.25 0 10.22 1.72A2.75 2.75 0 0010 14.75v-2.5c0-1.4-.89-2.6-2.13-3.05L7 6.32A3.25 3.25 0 003.9 4H2.75zm.75 12.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm16.16-10.4c.32-.53.9-.85 1.5-.85h.09a.75.75 0 000-1.5h-.08c-1.15 0-2.2.6-2.8 1.58l-2.14 3.58-2.8 1.24a3.25 3.25 0 00-1.93 2.97v1.38a2.75 2.75 0 002.59 2.75 3.25 3.25 0 006.32 0h.84a.75.75 0 000-1.5h-.84a3.25 3.25 0 00-6.32-.01A1.25 1.25 0 0113 14.75v-1.38c0-.69.4-1.31 1.04-1.6l2.87-1.27h4.34a.75.75 0 000-1.5h-3.18l1.6-2.65zm-4.16 10.4a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM10.25 5c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0v-2c0-.41.34-.75.75-.75zm4.1 2.7a.75.75 0 10-1.2-.9l-1.5 2a.75.75 0 101.2.9l1.5-2z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision24Regular = wrapIcon(rawSvg({}), 'VehicleCarCollision24Regular');
export default VehicleCarCollision24Regular;
      
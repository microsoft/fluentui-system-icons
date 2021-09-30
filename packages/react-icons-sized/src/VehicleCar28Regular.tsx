import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 16.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M21 15.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M11.75 16.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M5.23 9.5l-.28 1.12A2.75 2.75 0 003 13.25v9A2.75 2.75 0 005.75 25h1a2.75 2.75 0 002.75-2.75v-1h9v1A2.75 2.75 0 0021.25 25h1A2.75 2.75 0 0025 22.25v-9c0-1.24-.82-2.29-1.95-2.63l-.28-1.12h.98a.75.75 0 000-1.5H22.4l-.6-2.41a3.75 3.75 0 00-3.64-2.84H9.84A3.75 3.75 0 006.2 5.59L5.6 8H4.25a.75.75 0 000 1.5h.98zm4.61-5.25h8.32c1.03 0 1.93.7 2.18 1.7l1.14 4.55H6.52l1.14-4.55c.25-1 1.15-1.7 2.18-1.7zm10.16 18v-1h3.5v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm-12-1v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-1H8zM5.75 12h16.5c.69 0 1.25.56 1.25 1.25v6.5h-19v-6.5c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
}

const VehicleCar28Regular = wrapIcon(rawSvg({}), 'VehicleCar28Regular');
export default VehicleCar28Regular;
      
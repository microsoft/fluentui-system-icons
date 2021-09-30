import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.24 9.5l-.29 1.12A2.75 2.75 0 003 13.25v9A2.75 2.75 0 005.75 25h1a2.75 2.75 0 002.75-2.75v-1h9v1A2.75 2.75 0 0021.25 25h1A2.75 2.75 0 0025 22.25v-9c0-1.24-.82-2.3-1.95-2.63l-.3-1.12h1a.75.75 0 000-1.5h-1.38l-.56-2.19A3.75 3.75 0 0018.18 3H9.82A3.75 3.75 0 006.2 5.81L5.63 8H4.25a.75.75 0 000 1.5h1zm4.58-5h8.36c1.02 0 1.92.7 2.17 1.69l1.12 4.31H6.53l1.12-4.31c.25-1 1.15-1.69 2.17-1.69zM20 22.25v-1h3.5v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm-12-1v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-1H8zm.25-4.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM21 15.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-9.25 1.25h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const VehicleCar28Filled = wrapIcon(rawSvg({}), 'VehicleCar28Filled');
export default VehicleCar28Filled;
      
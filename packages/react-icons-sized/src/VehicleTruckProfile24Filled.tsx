import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 4.01 3 3 4.25 3h10c1.24 0 2.25 1 2.25 2.25V6h1.55c.87 0 1.66.5 2.03 1.29l1.7 3.58c.15.3.22.63.22.97v5.41c0 1.24-1 2.25-2.25 2.25h-1.8a3 3 0 01-5.9 0h-2.1a3 3 0 01-5.91-.01A2.25 2.25 0 012 17.25v-12zM20.5 15.5h-1.25a.75.75 0 100 1.5h1.25v-1.5zm-.32-4.5l-1.45-3.07a.75.75 0 00-.68-.43H16.5V11h3.68zM7 20.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5-1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /></svg>;
}

const VehicleTruckProfile24Filled = wrapIcon(rawSvg({}), 'VehicleTruckProfile24Filled');
export default VehicleTruckProfile24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75C2 2.78 2.78 2 3.75 2h5.5c.97 0 1.75.78 1.75 1.75V4h.38c.57 0 1.09.32 1.34.83l1.12 2.24c.1.2.16.43.16.67V11c0 .83-.67 1.5-1.5 1.5h-.56a2 2 0 01-3.88 0H6.94a2 2 0 01-3.91-.15A1.75 1.75 0 012 10.75v-7zM11 5v2h1.7l-.87-1.72a.5.5 0 00-.45-.28H11zm-6 6a1 1 0 100 2 1 1 0 000-2zm4 1a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const VehicleTruckProfile16Filled = wrapIcon(rawSvg({}), 'VehicleTruckProfile16Filled');
export default VehicleTruckProfile16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75C2 2.78 2.78 2 3.75 2h5.5c.97 0 1.75.78 1.75 1.75V4h.38c.57 0 1.09.32 1.34.83l1.12 2.24c.1.2.16.43.16.67V11c0 .83-.67 1.5-1.5 1.5h-.56a2 2 0 01-3.88 0H6.94a2 2 0 01-3.91-.15A1.75 1.75 0 012 10.75v-7zm6.06 7.75A2 2 0 0110 10V3.75A.75.75 0 009.25 3h-5.5a.75.75 0 00-.75.75v7c0 .18.06.34.16.46a2 2 0 013.78.29h1.12zM11 10.27c.46.26.8.7.94 1.23h.56a.5.5 0 00.5-.5V8h-2v2.27zM11 7h1.7l-.87-1.72a.5.5 0 00-.45-.28H11v2zm-6 4a1 1 0 100 2 1 1 0 000-2zm4 1a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const VehicleTruckProfile16Regular = wrapIcon(rawSvg({}), 'VehicleTruckProfile16Regular');
export default VehicleTruckProfile16Regular;
      
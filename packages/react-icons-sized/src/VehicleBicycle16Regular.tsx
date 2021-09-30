import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a.5.5 0 000 1h1.12l.53 2H6V3.5a.5.5 0 00-.5-.5h-2a.5.5 0 000 1H5v1.2c0 .05 0 .1.02.15l-.56 1.69A3 3 0 107 10.2l3.5-3.93.26 1a3 3 0 10.97-.26l-1.24-4.64A.5.5 0 0010 2H8.5zM4 8h.14l-.61 1.84a.5.5 0 00.47.66h1.94A2 2 0 114 8zm.7 1.5l.39-1.18a2 2 0 01.85 1.18H4.69zm.71-2.15L5.86 6h3.53l-2.6 2.91a3.01 3.01 0 00-1.38-1.56zm5.6.9l.5 1.88a.5.5 0 00.97-.26L11.98 8H12a2 2 0 11-.98.26z" fill={primaryFill} /></svg>;
}

const VehicleBicycle16Regular = wrapIcon(rawSvg({}), 'VehicleBicycle16Regular');
export default VehicleBicycle16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 16.5l-.43 1.77A4.25 4.25 0 006 22.25v17.5C6 41.55 7.46 43 9.25 43h3.5c1.8 0 3.25-1.46 3.25-3.25V36.5h16v3.25c0 1.8 1.46 3.25 3.25 3.25h3.5c1.8 0 3.25-1.46 3.25-3.25v-17.5c0-1.84-1.17-3.4-2.8-4l-.5-1.75h2.05a1.25 1.25 0 100-2.5h-2.77l-1-3.47a6.25 6.25 0 00-6-4.53h-14.3a6.25 6.25 0 00-6.08 4.76L9.81 14H7.25a1.25 1.25 0 100 2.5H9.2zm7.47-8h14.3a3.75 3.75 0 013.61 2.72L36.52 18H11.4l1.63-6.64a3.75 3.75 0 013.64-2.86zm17.83 28h5v3.25c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75V36.5zm-26 3.25V36.5h5v3.25c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75zM14 28a2 2 0 110-4 2 2 0 010 4zm22-2a2 2 0 11-4 0 2 2 0 014 0zm-15.75 2h7.5a1.25 1.25 0 110 2.5h-7.5a1.25 1.25 0 110-2.5z" fill={primaryFill} /></svg>;
}

const VehicleCar48Filled = wrapIcon(rawSvg({}), 'VehicleCar48Filled');
export default VehicleCar48Filled;
      
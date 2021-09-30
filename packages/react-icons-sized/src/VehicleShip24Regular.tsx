import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2a.75.75 0 00-.75.75V5H5.75a.75.75 0 00-.75.75v4.76l-1.46.54a.75.75 0 00-.42 1.02l2.33 5.02a1.75 1.75 0 011.93.58l-2.56-5.5 6.59-2.4c.38-.15.8-.15 1.19-.01l6.77 2.42-2.62 5.34a1.75 1.75 0 011.87-.4l2.47-5.04a.75.75 0 00-.42-1.03l-1.67-.6v-4.7a.75.75 0 00-.75-.75H16V2.75a.75.75 0 00-.75-.75h-6.5zm5.75 3h-5V3.5h5V5zm3 1.5v3.42l-4.4-1.57a3.25 3.25 0 00-2.2 0L6.5 9.98V6.5h11z" fill={primaryFill} /><path d="M18.73 18.56a.75.75 0 00-1.45-.03v.01a2.16 2.16 0 01-.12.3c-.09.2-.22.45-.42.71-.38.52-.94.95-1.74.95s-1.36-.44-1.74-.95a3.85 3.85 0 01-.54-1v-.02a.75.75 0 00-1.44 0v.01l-.02.06a3.36 3.36 0 01-.52.95c-.38.51-.93.95-1.74.95-.8 0-1.36-.44-1.74-.95a3.83 3.83 0 01-.54-1v-.02a.75.75 0 00-1.44.02v.01a1.62 1.62 0 01-.11.28c-.09.2-.22.45-.42.7-.38.49-1 .96-2 .96a.75.75 0 000 1.5A3.92 3.92 0 006 20.37l.06.08C6.6 21.19 7.56 22 9 22a3.63 3.63 0 003-1.63l.06.08C12.6 21.2 13.56 22 15 22a3.63 3.63 0 003-1.62l.06.08c.6.76 1.61 1.54 3.19 1.54a.75.75 0 000-1.5 2.42 2.42 0 01-2-.96 3.27 3.27 0 01-.52-.98z" fill={primaryFill} /></svg>;
}

const VehicleShip24Regular = wrapIcon(rawSvg({}), 'VehicleShip24Regular');
export default VehicleShip24Regular;
      
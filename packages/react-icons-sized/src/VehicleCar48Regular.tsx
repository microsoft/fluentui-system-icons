import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 29.25c0-.69.56-1.25 1.25-1.25h7.5a1.25 1.25 0 110 2.5h-7.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M16 26a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M34 28a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M8.77 18.27l.43-1.77H7.25a1.25 1.25 0 110-2.5h2.56l.8-3.24A6.25 6.25 0 0116.66 6h14.3A6.25 6.25 0 0137 10.53l.99 3.47h2.77a1.25 1.25 0 110 2.5h-2.06l.5 1.75c1.64.6 2.81 2.16 2.81 4v17.5c0 1.8-1.46 3.25-3.25 3.25h-3.5A3.25 3.25 0 0132 39.75V36.5H16v3.25c0 1.8-1.46 3.25-3.25 3.25h-3.5A3.25 3.25 0 016 39.75v-17.5a4.25 4.25 0 012.77-3.98zm4.26-6.91L11.4 18h25.12l-1.94-6.78a3.75 3.75 0 00-3.6-2.72h-14.3a3.75 3.75 0 00-3.65 2.86zm-2.78 9.14c-.97 0-1.75.78-1.75 1.75V34h31V22.25c0-.97-.78-1.75-1.75-1.75h-27.5zM34.5 39.75c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75V36.5h-5v3.25zm-26-3.25v3.25c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75V36.5h-5z" fill={primaryFill} /></svg>;
}

const VehicleCar48Regular = wrapIcon(rawSvg({}), 'VehicleCar48Regular');
export default VehicleCar48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 8a1.25 1.25 0 100 2.5h4.11c1 0 1.89.67 2.16 1.63l1.82 6.37H5.25a1.25 1.25 0 100 2.5h9.25a3.75 3.75 0 013.75 3.75v5.5c0 .72-.34 1.36-.86 1.77a6.75 6.75 0 10-.07 2.8 4.75 4.75 0 003.43-4.57v-5.5c0-2.94-2.03-5.4-4.76-6.07l-2.06-7.23A4.75 4.75 0 009.36 8H5.25zM6.5 33.25a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zm31.68-21.47a2.25 2.25 0 012.03-1.28h2.54a1.25 1.25 0 000-2.5h-2.54a4.75 4.75 0 00-4.29 2.71l-3.91 8.24-4.82 1.68a6.25 6.25 0 00-4.19 5.9v3.72a4.75 4.75 0 003.7 4.63 6.75 6.75 0 0013.07.12h2.98a1.25 1.25 0 100-2.5h-2.8a6.75 6.75 0 00-13.36-.32 2.25 2.25 0 01-1.09-1.93v-3.72c0-1.6 1-3.01 2.51-3.54l5.7-1.99h9.04a1.25 1.25 0 000-2.5h-7.76l3.19-6.72zM29 33.25a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM19.75 10c.69 0 1.25.56 1.25 1.25V15a1.25 1.25 0 11-2.5 0v-3.75c0-.69.56-1.25 1.25-1.25zm8.02 4.98a1.25 1.25 0 00-2.04-1.46l-2.5 3.5a1.25 1.25 0 002.04 1.46l2.5-3.5z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision48Regular = wrapIcon(rawSvg({}), 'VehicleCarCollision48Regular');
export default VehicleCarCollision48Regular;
      
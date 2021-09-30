import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 3C3.01 3 2 4 2 5.25v12c0 1.17.9 2.13 2.04 2.24a3 3 0 005.92.01h2.08a3 3 0 005.92 0h1.79c1.24 0 2.25-1 2.25-2.25v-5.41c0-.34-.07-.66-.22-.97l-1.7-3.58A2.25 2.25 0 0018.05 6H16.5v-.75c0-1.24-1-2.25-2.25-2.25h-10zm13.58 15a3.01 3.01 0 00-1.33-1.6v-3.9h4v3h-1.25a.75.75 0 100 1.5h1.25v.25c0 .41-.34.75-.75.75h-1.92zM15 16a3 3 0 00-2.83 2H9.83a3 3 0 00-5.66 0 .75.75 0 01-.67-.75v-12c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75V16zm1.5-8.5h1.55c.3 0 .55.17.68.43L20.18 11H16.5V7.5zM7 20.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const VehicleTruckProfile24Regular = wrapIcon(rawSvg({}), 'VehicleTruckProfile24Regular');
export default VehicleTruckProfile24Regular;
      
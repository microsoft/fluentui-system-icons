import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.23c.1.21.16.44.16.68v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 01-4.9 0h-1.1a2.5 2.5 0 01-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5zM10.05 15A2.5 2.5 0 0113 13.05v-8.3a.75.75 0 00-.75-.75H3.79a.75.75 0 00-.75.75v9.5c0 .41.34.75.75.75h.26a2.5 2.5 0 014.9 0h1.1zM14 13.5c.48.36.83.89.95 1.5h1.55a.5.5 0 00.5-.5V11h-3v2.5zm0-3.5h2.7l-1.37-2.72a.5.5 0 00-.45-.28H14v3zm-7.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
}

const VehicleTruckProfileRegular = wrapIcon(rawSvg({}), 'VehicleTruckProfileRegular');
export default VehicleTruckProfileRegular;
      
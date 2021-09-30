import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75c0-.41.34-.75.75-.75h1.14c1.44 0 2.7.94 3.11 2.32l.87 2.88A3.25 3.25 0 0110 12.25v2.5c0 1.08-.62 2.02-1.53 2.47A3.25 3.25 0 012 16.75v-7c0-.41.34-.75.75-.75h3.5l-.68-2.25A1.75 1.75 0 003.89 5.5H2.75A.75.75 0 012 4.75zm1.5 12a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zm12.73-7.59l2.15-3.58A3.25 3.25 0 0121.17 4h.08a.75.75 0 010 1.5h-.08c-.62 0-1.19.32-1.5.85L18.07 9h3.2a.75.75 0 01.73.78v6.97c0 .41-.34.75-.75.75h-.84a3.25 3.25 0 01-6.32 0 2.75 2.75 0 01-2.59-2.75v-1.38c0-1.28.76-2.44 1.93-2.97l2.8-1.24zM17.25 15a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm-7-10c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0v-2c0-.41.34-.75.75-.75zm4.1 2.7a.75.75 0 00-1.2-.9l-1.5 2a.75.75 0 101.2.9l1.5-2z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision24Filled = wrapIcon(rawSvg({}), 'VehicleCarCollision24Filled');
export default VehicleCarCollision24Filled;
      
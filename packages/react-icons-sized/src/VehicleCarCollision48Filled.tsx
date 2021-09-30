import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9.25C4 8.56 4.56 8 5.25 8h4.11c2.12 0 3.98 1.4 4.57 3.45l2.06 7.23a6.25 6.25 0 014.76 6.07v5.5c0 2.17-1.45 4-3.43 4.56A6.75 6.75 0 014 33.75v-14c0-.69.56-1.25 1.25-1.25h8.1l-1.83-6.37a2.25 2.25 0 00-2.16-1.63H5.25C4.56 10.5 4 9.94 4 9.25zM10.75 29a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm21.26-10.05l3.91-8.24A4.75 4.75 0 0140.22 8h2.53a1.25 1.25 0 110 2.5h-2.54c-.87 0-1.66.5-2.03 1.28l-3.2 6.72h7.77c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25h-2.98a6.75 6.75 0 01-13.07-.12 4.75 4.75 0 01-3.7-4.63v-3.72a6.25 6.25 0 014.19-5.9L32 18.95zM29 33.25a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0zM19.75 10c.69 0 1.25.56 1.25 1.25V15a1.25 1.25 0 11-2.5 0v-3.75c0-.69.56-1.25 1.25-1.25zm8.02 4.98a1.25 1.25 0 00-2.04-1.46l-2.5 3.5a1.25 1.25 0 002.04 1.46l2.5-3.5z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision48Filled = wrapIcon(rawSvg({}), 'VehicleCarCollision48Filled');
export default VehicleCarCollision48Filled;
      
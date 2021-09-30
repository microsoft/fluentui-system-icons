import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.52 6.03L4.86 8H8V5H6.94a1.5 1.5 0 00-1.42 1.03zM4.52 9l-.26.08-.12.03A1.5 1.5 0 003 10.56v1.69c0 .16.05.31.14.43a2.5 2.5 0 014.81.32h4.1a2.5 2.5 0 014.81-.32.75.75 0 00.14-.43v-1.21a1.5 1.5 0 00-1.11-1.45L13.69 9H4.52zm8.35-1l-1.24-2.23a1.5 1.5 0 00-1.3-.77H9v3h3.87zM18 12.25c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 01-4.93.15h-4.1a2.5 2.5 0 01-4.93-.16A1.75 1.75 0 012 12.25v-1.69c0-1.1.71-2.06 1.75-2.38l.82-2.47A2.5 2.5 0 016.94 4h3.38c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0118 11.04v1.21zM5.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileLtr20Regular = wrapIcon(rawSvg({}), 'VehicleCarProfileLtr20Regular');
export default VehicleCarProfileLtr20Regular;
      
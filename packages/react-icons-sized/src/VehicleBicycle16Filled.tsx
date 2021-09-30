import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 1.5a.75.75 0 000 1.5h.9l.34 1.5H6v-.75A.75.75 0 005.25 3h-1.5a.75.75 0 000 1.5h.75v.68L4.13 7a3.25 3.25 0 103.08 1.92l3.22-2.48.17.77a3.25 3.25 0 101.5-.2l-1.12-4.93a.75.75 0 00-.73-.58h-1.5zM5.61 7.3L5.86 6h2.68L6.3 7.73a3.25 3.25 0 00-.7-.43zM2.5 10.25c0-.82.56-1.5 1.32-1.7l-.3 1.55a.75.75 0 001.19.74l1.25-.96A1.76 1.76 0 014.25 12c-.97 0-1.75-.78-1.75-1.75zm8.44-1.55l.33 1.47a.75.75 0 001.46-.34l-.27-1.18a1.75 1.75 0 11-1.52.05z" fill={primaryFill} /></svg>;
}

const VehicleBicycle16Filled = wrapIcon(rawSvg({}), 'VehicleBicycle16Filled');
export default VehicleBicycle16Filled;
      
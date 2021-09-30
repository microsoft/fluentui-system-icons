import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M6 4.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v6a2.5 2.5 0 01-2.5 2.5h-.62l1.87 1.07a.5.5 0 11-.5.86L8.87 13H7.13l-3.38 1.93a.5.5 0 01-.5-.86L5.12 13H4.5A2.5 2.5 0 012 10.5v-6zM3 8v2.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V8H3zm10-1V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V7h10z" fill={primaryFill} /></svg>;
}

const VehicleSubway16Regular = wrapIcon(rawSvg({}), 'VehicleSubway16Regular');
export default VehicleSubway16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.77 2a1.5 1.5 0 00-1.43 1.06L9.4 16H17a1 1 0 110 2H8.8l-.81 2.67H18.5a1 1 0 110 2h-11l-.12-.01L5.76 28H3a1 1 0 100 2h26a1 1 0 100-2h-2.76L18.66 3.06A1.5 1.5 0 0017.23 2h-2.46z" fill={primaryFill} /></svg>;
}

const RoadCone32Filled = wrapIcon(rawSvg({}), 'RoadCone32Filled');
export default RoadCone32Filled;
      
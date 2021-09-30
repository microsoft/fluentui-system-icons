import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.46 1a1 1 0 00-.97.76L3.43 14H1.5a.5.5 0 000 1h13a.5.5 0 000-1h-1.93L9.5 1.76A1 1 0 008.54 1H7.46zm4.08 13H4.46l.63-2.5h4.16a.5.5 0 000-1H5.34l.5-2H8.5a.5.5 0 000-1H6.09L7.46 2h1.08l3 12z" fill={primaryFill} /></svg>;
}

const RoadCone16Regular = wrapIcon(rawSvg({}), 'RoadCone16Regular');
export default RoadCone16Regular;
      
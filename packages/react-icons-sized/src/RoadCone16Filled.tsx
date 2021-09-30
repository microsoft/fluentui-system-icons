import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.46 1a1 1 0 00-.97.76L5.06 7.5H8.5a.5.5 0 010 1H4.8l-.5 2h4.95a.5.5 0 010 1h-5.2L3.44 14H1.5a.5.5 0 000 1h13a.5.5 0 000-1h-1.93L9.5 1.76A1 1 0 008.54 1H7.46z" fill={primaryFill} /></svg>;
}

const RoadCone16Filled = wrapIcon(rawSvg({}), 'RoadCone16Filled');
export default RoadCone16Filled;
      
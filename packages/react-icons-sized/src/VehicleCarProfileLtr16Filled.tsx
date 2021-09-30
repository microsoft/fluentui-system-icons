import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.78 6.5l-.14-.05-1.13-2.13A2.5 2.5 0 008.3 3H5.44a2.5 2.5 0 00-2.37 1.7l-.54 1.63A2.5 2.5 0 001 8.63v1.12c0 .71.42 1.32 1.03 1.6a2 2 0 003.9.15h4.13a2 2 0 003.91-.15c.6-.28 1.03-.89 1.03-1.6v-.34c0-1.06-.67-2-1.66-2.35l-1.51-.54V6.5h-.05zM4.02 5.03A1.5 1.5 0 015.44 4H6.5v2.5H3.53l.49-1.47zm6.51 1.47H7.5V4h.8c.55 0 1.06.3 1.32.8l.91 1.7zM3 11a1 1 0 112 0 1 1 0 01-2 0zm9-1a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileLtr16Filled = wrapIcon(rawSvg({}), 'VehicleCarProfileLtr16Filled');
export default VehicleCarProfileLtr16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.78 6.5l-.14-.05-1.13-2.13A2.5 2.5 0 008.3 3H5.44a2.5 2.5 0 00-2.37 1.7l-.54 1.63A2.5 2.5 0 001 8.63v1.12c0 .71.42 1.32 1.03 1.6a2 2 0 003.9.15h4.13a2 2 0 003.91-.15c.6-.28 1.03-.89 1.03-1.6v-.34c0-1.06-.67-2-1.66-2.35l-1.51-.54V6.5h-.05zM5.44 4H6.5v2.5H3.53l.49-1.47A1.5 1.5 0 015.44 4zM7.5 4h.8c.55 0 1.06.3 1.32.8l.91 1.7H7.5V4zm4.1 3.5L13 8c.6.21 1 .78 1 1.41v.34c0 .18-.06.34-.16.46a2 2 0 00-3.78.29H5.94a2 2 0 00-3.78-.29.75.75 0 01-.16-.46V8.64c0-.45.2-.86.52-1.14h9.08zM3 11a1 1 0 112 0 1 1 0 01-2 0zm9-1a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileLtr16Regular = wrapIcon(rawSvg({}), 'VehicleCarProfileLtr16Regular');
export default VehicleCarProfileLtr16Regular;
      
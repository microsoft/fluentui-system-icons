import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 6.5l.14-.05 1.13-2.13A2.5 2.5 0 017.7 3h2.86a2.5 2.5 0 012.37 1.7l.54 1.63A2.5 2.5 0 0115 8.63v1.12c0 .71-.42 1.32-1.03 1.6a2 2 0 01-3.9.15H5.93a2 2 0 01-3.91-.15A1.75 1.75 0 011 9.75v-.34c0-1.06.67-2 1.66-2.35l1.51-.54V6.5h.05zM10.56 4H9.5v2.5h2.97l-.49-1.47A1.5 1.5 0 0010.56 4zM8.5 4h-.8c-.55 0-1.06.3-1.32.8l-.91 1.7H8.5V4zM4.4 7.5L3 8c-.6.21-1 .78-1 1.41v.34c0 .18.06.34.16.46a2 2 0 013.78.29h4.12a2 2 0 013.78-.29c.1-.12.16-.28.16-.46V8.64c0-.45-.2-.86-.52-1.14H4.4zM13 11a1 1 0 10-2 0 1 1 0 002 0zm-9-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileRtl16Regular = wrapIcon(rawSvg({}), 'VehicleCarProfileRtl16Regular');
export default VehicleCarProfileRtl16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L11 12.06V19a1 1 0 102 0v-4.94l2 2V19a1 1 0 002 0v-.94l3.72 3.72a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M19 15.82l2 2V6a1 1 0 00-2 0v9.82z" fill={primaryFill} /><path d="M15 11.82l2 2V9a1 1 0 00-2 0v2.82z" fill={primaryFill} /><path d="M8 14a1 1 0 011 1v4a1 1 0 01-1 1 1 1 0 01-1-1v-4a1 1 0 011-1z" fill={primaryFill} /><path d="M4 17a1 1 0 011 .98v1.04A1 1 0 014 20a1 1 0 01-1-.98v-1.04A1 1 0 014 17z" fill={primaryFill} /></svg>;
}

const CellularDataCellularOff24Filled = wrapIcon(rawSvg({}), 'CellularDataCellularOff24Filled');
export default CellularDataCellularOff24Filled;
      
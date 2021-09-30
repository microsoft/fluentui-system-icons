import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 1a.5.5 0 00-.5.5V2h-.68a2 2 0 00-1.98 1.74L3.17 5H2.5a.5.5 0 000 1h.54v.07C2.43 6.27 2 6.83 2 7.5v3c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-3a1.5 1.5 0 00-1.04-1.43V6h.54a.5.5 0 000-1h-.68l-.16-1.25A2 2 0 0010.68 2H10v-.5a.5.5 0 00-.5-.5h-3zm4.18 2a1 1 0 011 .87L11.93 6H4.05l.28-2.13A1 1 0 015.32 3h5.36zM4.5 9A.75.75 0 116 9a.75.75 0 01-1.5 0zM10 9a.75.75 0 111.5 0A.75.75 0 0110 9zm1 4h1.5v.25a.75.75 0 11-1.5 0V13zm-7.5 0H5v.25a.75.75 0 01-1.5 0V13z" fill={primaryFill} /></svg>;
}

const VehicleCab16Filled = wrapIcon(rawSvg({}), 'VehicleCab16Filled');
export default VehicleCab16Filled;
      
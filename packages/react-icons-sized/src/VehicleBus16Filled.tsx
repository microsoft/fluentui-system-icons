import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M4.9 1A2.9 2.9 0 002 3.9V6h-.5a.5.5 0 000 1H2v6.7c0 .72.58 1.3 1.3 1.3h1.4c.72 0 1.3-.58 1.3-1.3V13h4v.7c0 .72.58 1.3 1.3 1.3h1.4c.72 0 1.3-.58 1.3-1.3V7h.5a.5.5 0 000-1H14V3.9C14 2.3 12.7 1 11.1 1H4.9zM13 3.9V8H3V3.9C3 2.85 3.85 2 4.9 2h6.2c1.05 0 1.9.85 1.9 1.9zm0 9.1v.7a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3V13h2zm-8 0v.7a.3.3 0 01-.3.3H3.3a.3.3 0 01-.3-.3V13h2zm1.5-2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3.75.75a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const VehicleBus16Filled = wrapIcon(rawSvg({}), 'VehicleBus16Filled');
export default VehicleBus16Filled;
      
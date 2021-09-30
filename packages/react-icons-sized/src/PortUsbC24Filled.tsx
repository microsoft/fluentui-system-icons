import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 12a3 3 0 01-3 3H8a3 3 0 010-6h8a3 3 0 013 3z" fill={primaryFill} /></svg>;
}

const PortUsbC24Filled = wrapIcon(rawSvg({}), 'PortUsbC24Filled');
export default PortUsbC24Filled;
      
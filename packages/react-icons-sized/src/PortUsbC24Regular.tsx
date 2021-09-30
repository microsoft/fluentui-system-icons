import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 10.5a1.5 1.5 0 110 3H8a1.5 1.5 0 110-3h8zM16 9H8a3 3 0 100 6h8a3 3 0 000-6z" fill={primaryFill} /></svg>;
}

const PortUsbC24Regular = wrapIcon(rawSvg({}), 'PortUsbC24Regular');
export default PortUsbC24Regular;
      
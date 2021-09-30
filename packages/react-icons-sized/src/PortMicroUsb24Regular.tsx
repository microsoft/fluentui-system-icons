import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.17 10.5a.5.5 0 01.36.15l1.82 1.82a.5.5 0 01.15.36V13a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-.17a.5.5 0 01.15-.36l1.82-1.82a.5.5 0 01.36-.15h6.34zm0-1.5H8.83a2 2 0 00-1.42.59L5.6 11.4A2 2 0 005 12.83V13a2 2 0 002 2h10a2 2 0 002-2v-.17a2 2 0 00-.59-1.42L16.6 9.6A2 2 0 0015.17 9z" fill={primaryFill} /></svg>;
}

const PortMicroUsb24Regular = wrapIcon(rawSvg({}), 'PortMicroUsb24Regular');
export default PortMicroUsb24Regular;
      
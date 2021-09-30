import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 12.83V13a2 2 0 01-2 2H7a2 2 0 01-2-2v-.17a2 2 0 01.59-1.42l1.82-1.82A2 2 0 018.83 9h6.34a2 2 0 011.42.59l1.82 1.82a2 2 0 01.59 1.42z" fill={primaryFill} /></svg>;
}

const PortMicroUsb24Filled = wrapIcon(rawSvg({}), 'PortMicroUsb24Filled');
export default PortMicroUsb24Filled;
      
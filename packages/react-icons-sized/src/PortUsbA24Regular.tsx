import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 8H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2zM5.5 10a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v2h-13v-2z" fill={primaryFill} /></svg>;
}

const PortUsbA24Regular = wrapIcon(rawSvg({}), 'PortUsbA24Regular');
export default PortUsbA24Regular;
      
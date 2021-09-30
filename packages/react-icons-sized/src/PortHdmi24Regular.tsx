import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.41 11.41L18.6 8.6A2 2 0 0017.17 8H6.83a2 2 0 00-1.42.59L2.6 11.4A2 2 0 002 12.83V14a2 2 0 002 2h16a2 2 0 002-2v-1.17a2 2 0 00-.59-1.42zM20.5 14a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-1.17a.5.5 0 01.15-.36l2.82-2.82a.5.5 0 01.36-.15h10.34a.5.5 0 01.36.15l2.82 2.82a.5.5 0 01.15.36V14zm-4.25-2.75h-8.5a.75.75 0 100 1.5h8.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
}

const PortHdmi24Regular = wrapIcon(rawSvg({}), 'PortHdmi24Regular');
export default PortHdmi24Regular;
      
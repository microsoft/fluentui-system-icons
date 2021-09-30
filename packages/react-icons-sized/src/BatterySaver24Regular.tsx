import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 11.08c0-1.57-.79-3.87-2.35-6.72-.27-.49-.97-.48-1.27-.02A8.81 8.81 0 015.5 6.32l-.37.3-.36.26-.49.38c-1.72 1.37-2.4 2.6-2.26 4.4.14 1.6 1.1 2.75 2.77 3.28a6.03 6.03 0 01-2.33 1.62.75.75 0 00.58 1.39 7.1 7.1 0 003.9-3.64c.3-.62.52-1.23.7-1.83l.04-.16.1-.4.07-.34.04-.23.06-.48c.05-.38.07-.75.06-1.12v-.03a.75.75 0 011.5.03c.02 1.46-.28 2.95-.89 4.46l-.03.09a.45.45 0 00.64.5l.11-.06c.08-.04.14-.09.2-.14A4.83 4.83 0 0011 11.08zM17 6h-5.35a.75.75 0 00.1 1.5h5.39A1.5 1.5 0 0118.5 9v6.14A1.5 1.5 0 0117 16.5H7.75c-.4.03-.75.32-.75.75 0 .41.34.75.75.75h9.43A3 3 0 0020 15v-1l1 .02.13-.01a1 1 0 00.87-1V10.9a1 1 0 00-1-.88L20 10V8.82A3 3 0 0017 6z" fill={primaryFill} /></svg>;
}

const BatterySaver24Regular = wrapIcon(rawSvg({}), 'BatterySaver24Regular');
export default BatterySaver24Regular;
      
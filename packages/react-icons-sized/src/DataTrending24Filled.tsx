import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4.25a1 1 0 00-2 0v14a2.5 2.5 0 002.5 2.5h14a1 1 0 100-2h-14a.5.5 0 01-.5-.5v-14zM14 7a1 1 0 011-1h4.5a1 1 0 011 1v4.5a1 1 0 11-2 0V9.41l-4.54 4.55a1 1 0 01-1.42 0l-1.79-1.8-2.54 2.55a1 1 0 01-1.42-1.42l3.25-3.25a1 1 0 011.42 0l1.79 1.8L17.09 8H15a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const DataTrending24Filled = wrapIcon(rawSvg({}), 'DataTrending24Filled');
export default DataTrending24Filled;
      
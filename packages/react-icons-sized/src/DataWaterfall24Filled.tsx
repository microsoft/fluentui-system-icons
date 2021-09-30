import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3a.75.75 0 000 1.5H4v5.75c0 1.24 1 2.25 2.25 2.25h6.25v6.25c0 1.24 1 2.25 2.25 2.25h6.5a.75.75 0 000-1.5H20v-6.25c0-1.24-1-2.25-2.25-2.25H11.5V5.25c0-1.24-1-2.25-2.25-2.25h-6.5z" fill={primaryFill} /></svg>;
}

const DataWaterfall24Filled = wrapIcon(rawSvg({}), 'DataWaterfall24Filled');
export default DataWaterfall24Filled;
      
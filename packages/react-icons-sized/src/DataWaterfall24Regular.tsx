import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75c0-.41.34-.75.75-.75h6.5c1.24 0 2.25 1 2.25 2.25V11h6.25c1.24 0 2.25 1 2.25 2.25v6.25h1.25a.75.75 0 010 1.5h-6.5c-1.24 0-2.25-1-2.25-2.25V12.5H6.25c-1.24 0-2.25-1-2.25-2.25V4.5H2.75A.75.75 0 012 3.75zM18.5 19.5v-6.25a.75.75 0 00-.75-.75H14v6.25c0 .41.34.75.75.75h3.75zM10 5.25a.75.75 0 00-.75-.75H5.5v5.75c0 .41.34.75.75.75H10V5.25z" fill={primaryFill} /></svg>;
}

const DataWaterfall24Regular = wrapIcon(rawSvg({}), 'DataWaterfall24Regular');
export default DataWaterfall24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zM6 8.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zM13.5 6c.28 0 .5.22.5.5v7a.5.5 0 01-1 0v-7c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const DataUsage20Filled = wrapIcon(rawSvg({}), 'DataUsage20Filled');
export default DataUsage20Filled;
      
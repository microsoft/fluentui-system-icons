import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 10a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M6 8.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5z" fill={primaryFill} /><path d="M13.5 6a.5.5 0 00-.5.5v7a.5.5 0 001 0v-7a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm1 0v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const DataUsage20Regular = wrapIcon(rawSvg({}), 'DataUsage20Regular');
export default DataUsage20Regular;
      
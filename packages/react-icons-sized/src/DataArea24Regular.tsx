import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75a.75.75 0 011.5 0v6.26l3.65-1.92c.23-.12.5-.12.73.01l3.82 2.25 5.6-4.2a.75.75 0 011.2.6V19.5h.75a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75v-8.99-7.51zm1.5 7.95v7.8H18V8.25l-4.8 3.6a.75.75 0 01-.83.05L8.48 9.6 4.5 11.7z" fill={primaryFill} /></svg>;
}

const DataArea24Regular = wrapIcon(rawSvg({}), 'DataArea24Regular');
export default DataArea24Regular;
      
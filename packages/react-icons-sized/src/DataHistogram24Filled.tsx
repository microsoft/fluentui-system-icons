import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5.23c0-1.24 1-2.25 2.25-2.25h1.5c1.24 0 2.25 1 2.25 2.25V21H9V5.23z" fill={primaryFill} /><path d="M7.5 10H5.25C4.01 10 3 11 3 12.25v8c0 .41.34.75.75.75H7.5V10z" fill={primaryFill} /><path d="M16.5 21h3.75c.41 0 .75-.34.75-.75v-11C21 8.01 20 7 18.75 7H16.5v14z" fill={primaryFill} /></svg>;
}

const DataHistogram24Filled = wrapIcon(rawSvg({}), 'DataHistogram24Filled');
export default DataHistogram24Filled;
      
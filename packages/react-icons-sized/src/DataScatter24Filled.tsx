import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75a.75.75 0 011.5 0V19.5h15.75a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75V3.75z" fill={primaryFill} /><path d="M14 7a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M9 6a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /><path d="M15 12a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /></svg>;
}

const DataScatter24Filled = wrapIcon(rawSvg({}), 'DataScatter24Filled');
export default DataScatter24Filled;
      
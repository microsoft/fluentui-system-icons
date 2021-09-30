import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.26 8.3a.75.75 0 11-1.02-1.1l4.25-4a.75.75 0 011.02 0l4.25 4a.75.75 0 11-1.02 1.1L8 4.77 4.26 8.3zm0 4a.75.75 0 01-1.02-1.1l4.25-4a.75.75 0 011.02 0l4.25 4a.75.75 0 11-1.02 1.1L8 8.77 4.26 12.3z" fill={primaryFill} /></svg>;
}

const ChevronDoubleUp16Filled = wrapIcon(rawSvg({}), 'ChevronDoubleUp16Filled');
export default ChevronDoubleUp16Filled;
      
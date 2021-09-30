import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 11.74a.75.75 0 11-1.1 1.02l-4-4.25a.75.75 0 010-1.02l4-4.25a.75.75 0 111.1 1.02L4.77 8l3.53 3.74zm4 0a.75.75 0 11-1.1 1.02l-4-4.25a.75.75 0 010-1.02l4-4.25a.75.75 0 111.1 1.02L8.77 8l3.53 3.74z" fill={primaryFill} /></svg>;
}

const ChevronDoubleLeft16Filled = wrapIcon(rawSvg({}), 'ChevronDoubleLeft16Filled');
export default ChevronDoubleLeft16Filled;
      
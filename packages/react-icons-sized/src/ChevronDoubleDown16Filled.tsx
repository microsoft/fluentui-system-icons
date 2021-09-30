import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.74 7.7a.75.75 0 111.02 1.1l-4.25 4a.75.75 0 01-1.02 0l-4.25-4a.75.75 0 111.02-1.1L8 11.23l3.74-3.53zm0-4a.75.75 0 111.02 1.1l-4.25 4a.75.75 0 01-1.02 0l-4.25-4a.75.75 0 111.02-1.1L8 7.23l3.74-3.53z" fill={primaryFill} /></svg>;
}

const ChevronDoubleDown16Filled = wrapIcon(rawSvg({}), 'ChevronDoubleDown16Filled');
export default ChevronDoubleDown16Filled;
      
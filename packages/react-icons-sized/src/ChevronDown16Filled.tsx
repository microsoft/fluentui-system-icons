import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 5.74a.75.75 0 011.06-.04L8 9.23l3.74-3.53a.75.75 0 111.02 1.1l-4.25 4a.75.75 0 01-1.02 0l-4.25-4a.75.75 0 01-.04-1.06z" fill={primaryFill} /></svg>;
}

const ChevronDown16Filled = wrapIcon(rawSvg({}), 'ChevronDown16Filled');
export default ChevronDown16Filled;
      
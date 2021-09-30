import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 10.26c.28.3.76.32 1.06.04L8 6.77l3.74 3.53a.75.75 0 101.02-1.1l-4.25-4a.75.75 0 00-1.02 0l-4.25 4a.75.75 0 00-.04 1.06z" fill={primaryFill} /></svg>;
}

const ChevronUp16Filled = wrapIcon(rawSvg({}), 'ChevronUp16Filled');
export default ChevronUp16Filled;
      
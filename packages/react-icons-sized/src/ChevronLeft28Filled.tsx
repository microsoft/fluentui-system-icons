import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.46 23.2a1 1 0 01-1.42 0L8.3 14.47a1 1 0 010-1.42l8.75-8.75a1 1 0 111.42 1.42l-8.05 8.04 8.05 8.04a1 1 0 010 1.42z" fill={primaryFill} /></svg>;
}

const ChevronLeft28Filled = wrapIcon(rawSvg({}), 'ChevronLeft28Filled');
export default ChevronLeft28Filled;
      
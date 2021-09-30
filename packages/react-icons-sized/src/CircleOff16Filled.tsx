import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.87 12.58l2.28 2.27a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l2.27 2.28a6 6 0 008.46 8.46zM14 8c0 1.11-.3 2.15-.83 3.05L4.95 2.83A6 6 0 0114 8z" fill={primaryFill} /></svg>;
}

const CircleOff16Filled = wrapIcon(rawSvg({}), 'CircleOff16Filled');
export default CircleOff16Filled;
      
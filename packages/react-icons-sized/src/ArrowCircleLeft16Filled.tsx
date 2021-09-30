import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 15A7 7 0 118 1a7 7 0 010 14zM4.54 8.2a.5.5 0 00.1.15l2.5 2.5a.5.5 0 00.71-.7L6.21 8.5H11a.5.5 0 000-1H6.2l1.65-1.65a.5.5 0 10-.7-.7l-2.5 2.5a.5.5 0 00-.11.54z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft16Filled = wrapIcon(rawSvg({}), 'ArrowCircleLeft16Filled');
export default ArrowCircleLeft16Filled;
      
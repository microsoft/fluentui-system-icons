import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a14 14 0 100-28 14 14 0 000 28zm6.7-13.3a1 1 0 01-1.4 0L17 12.42V22a1 1 0 11-2 0v-9.59l-4.3 4.3a1 1 0 01-1.4-1.42l6-6a1 1 0 011.4 0l6 6a1 1 0 010 1.42z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp32Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp32Filled');
export default ArrowCircleUp32Filled;
      
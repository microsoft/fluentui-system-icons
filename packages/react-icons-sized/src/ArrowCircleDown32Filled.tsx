import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a14 14 0 100 28 14 14 0 000-28zM9.3 15.3a1 1 0 011.4 0l4.3 4.29V10a1 1 0 112 0v9.59l4.3-4.3a1 1 0 011.4 1.42l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown32Filled = wrapIcon(rawSvg({}), 'ArrowCircleDown32Filled');
export default ArrowCircleDown32Filled;
      
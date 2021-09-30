import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.7 2.3a1 1 0 10-1.4 1.4L18.59 5h-5.6a3 3 0 00-3 3v9a1 1 0 01-1 1H7.84a3 3 0 100 2H9a3 3 0 003-3V8a1 1 0 011-1h5.58L17.3 8.29A1 1 0 1018.7 9.7l3.01-3a1 1 0 000-1.41l-3-3z" fill={primaryFill} /></svg>;
}

const ArrowRouting24Filled = wrapIcon(rawSvg({}), 'ArrowRouting24Filled');
export default ArrowRouting24Filled;
      
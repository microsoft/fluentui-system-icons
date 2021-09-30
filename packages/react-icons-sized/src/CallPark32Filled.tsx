import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.66 12.08l-2.15 1.97a12.99 12.99 0 001.18 2.84 12.54 12.54 0 001.88 2.44l2.77-.87a4 4 0 014.3 1.27l1.67 2.04a3.8 3.8 0 01-.34 5.2c-2.64 2.46-6.74 3.1-9.6.5a31.8 31.8 0 01-9.55-16.48C3 7.19 5.64 4 9.07 2.96c1.94-.6 4 .42 4.71 2.32l.92 2.45a4 4 0 01-1.04 4.35zM20 3a1 1 0 00-1 1v11a1 1 0 102 0v-4h3a4 4 0 000-8h-4zm4 6h-3V5h3a2 2 0 110 4z" fill={primaryFill} /></svg>;
}

const CallPark32Filled = wrapIcon(rawSvg({}), 'CallPark32Filled');
export default CallPark32Filled;
      
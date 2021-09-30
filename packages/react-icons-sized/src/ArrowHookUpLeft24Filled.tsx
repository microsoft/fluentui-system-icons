import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 19a1 1 0 001 1h5c2.24 0 4.01-.78 5.22-2.02A6.42 6.42 0 0020 13.5c0-1.61-.59-3.24-1.78-4.48A7.06 7.06 0 0013 7H8.41l2.05-2.04a1 1 0 00-1.42-1.42L5.3 7.3a1 1 0 000 1.42l3.75 3.75a1 1 0 001.42-1.42L8.4 9H13c1.76 0 2.99.6 3.78 1.41.8.83 1.22 1.95 1.22 3.09s-.41 2.26-1.22 3.09A5.07 5.07 0 0113 18H8a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const ArrowHookUpLeft24Filled = wrapIcon(rawSvg({}), 'ArrowHookUpLeft24Filled');
export default ArrowHookUpLeft24Filled;
      
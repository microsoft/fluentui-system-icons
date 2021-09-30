import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.59l-3.64-3.64a6.66 6.66 0 10-9.42 9.42l8.34 8.34a1 1 0 001.41-1.42l-8.34-8.33a4.66 4.66 0 016.42-6.76l.18.17L16.59 9H12a1 1 0 00-1 .88V10a1 1 0 00.88 1H19a1 1 0 001-.88V3a1 1 0 00-2-.11v4.7l-3.64-3.64L18 7.6z" fill={primaryFill} /></svg>;
}

const ArrowRedo24Filled = wrapIcon(rawSvg({}), 'ArrowRedo24Filled');
export default ArrowRedo24Filled;
      
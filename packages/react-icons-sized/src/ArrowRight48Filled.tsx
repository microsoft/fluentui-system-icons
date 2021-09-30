import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 24c0-.83.67-1.5 1.5-1.5h31.84l-12.4-12.18a1.5 1.5 0 112.11-2.14l15 14.75.02.02a1.5 1.5 0 01-.04 2.14L26.8 39.82a1.5 1.5 0 11-2.1-2.14L37.09 25.5H5.25a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const ArrowRight48Filled = wrapIcon(rawSvg({}), 'ArrowRight48Filled');
export default ArrowRight48Filled;
      
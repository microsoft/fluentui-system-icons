import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 3a1 1 0 011 1v5a1 1 0 11-2 0V6.41l-5.8 5.8a1 1 0 01-1.4 0L10 10.4l-5.3 5.3a1 1 0 01-1.4-1.42l6-6a1 1 0 011.4 0l1.8 1.8L17.59 5H15a1 1 0 110-2h5zm3 14.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ArrowTrendingCheckmark24Filled = wrapIcon(rawSvg({}), 'ArrowTrendingCheckmark24Filled');
export default ArrowTrendingCheckmark24Filled;
      
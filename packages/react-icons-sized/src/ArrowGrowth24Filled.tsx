import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 4a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V5.41l-5.8 5.8a1 1 0 01-1.4 0L10 8.4l-5.3 5.3a1 1 0 01-1.4-1.42l6-6a1 1 0 011.4 0l2.8 2.8L18.59 4H17zM5 18v3a1 1 0 11-2 0v-3a1 1 0 112 0zm5-4a1 1 0 10-2 0v7a1 1 0 102 0v-7zm4 1a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm6-4a1 1 0 10-2 0v10a1 1 0 102 0V11z" fill={primaryFill} /></svg>;
}

const ArrowGrowth24Filled = wrapIcon(rawSvg({}), 'ArrowGrowth24Filled');
export default ArrowGrowth24Filled;
      
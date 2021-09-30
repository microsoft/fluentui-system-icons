import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 16.3a1 1 0 11-1.41 1.4l-5-5a1 1 0 010-1.4l5-5A1 1 0 019.7 7.7L6.41 11H13a8 8 0 018 7.75V19a1 1 0 11-2 0 6 6 0 00-5.78-6H6.41l3.3 3.3z" fill={primaryFill} /></svg>;
}

const ArrowReply24Filled = wrapIcon(rawSvg({}), 'ArrowReply24Filled');
export default ArrowReply24Filled;
      
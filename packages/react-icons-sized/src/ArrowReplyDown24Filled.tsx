import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 8.7A1 1 0 108.3 7.3l-5 5a1 1 0 000 1.4l5 5a1 1 0 101.41-1.4L6.41 14H13a8 8 0 008-7.75V6a1 1 0 10-2 0 6 6 0 01-5.78 6H6.41l3.3-3.3z" fill={primaryFill} /></svg>;
}

const ArrowReplyDown24Filled = wrapIcon(rawSvg({}), 'ArrowReplyDown24Filled');
export default ArrowReplyDown24Filled;
      
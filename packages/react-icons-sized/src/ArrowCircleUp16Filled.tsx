import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1114 0A7 7 0 011 8zm6.8-3.46a.5.5 0 00-.15.1l-2.5 2.5a.5.5 0 10.7.71L7.5 6.21V11a.5.5 0 001 0V6.2l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.54-.11z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp16Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp16Filled');
export default ArrowCircleUp16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1014 0A7 7 0 001 8zm6.8 3.46a.5.5 0 01-.15-.1l-2.5-2.5a.5.5 0 11.7-.71L7.5 9.79V5a.5.5 0 011 0v4.8l1.65-1.65a.5.5 0 01.7.7l-2.5 2.5a.5.5 0 01-.54.11z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown16Filled = wrapIcon(rawSvg({}), 'ArrowCircleDown16Filled');
export default ArrowCircleDown16Filled;
      
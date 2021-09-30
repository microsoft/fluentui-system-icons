import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.5a5.5 5.5 0 00-3.9 9.39.75.75 0 11-1.05 1.06 7 7 0 119.9 0 .75.75 0 11-1.06-1.06A5.5 5.5 0 008 3.5z" fill={primaryFill} /><path d="M8 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M5.25 9a2.75 2.75 0 114.7 1.94A.75.75 0 0011 12 4.24 4.24 0 008 4.75 4.25 4.25 0 005 12a.75.75 0 101.05-1.06c-.5-.5-.8-1.18-.8-1.94z" fill={primaryFill} /></svg>;
}

const Communication16Filled = wrapIcon(rawSvg({}), 'Communication16Filled');
export default Communication16Filled;
      
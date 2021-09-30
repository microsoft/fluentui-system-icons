import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 8a4.5 4.5 0 00-7.33-3.5h1.08a.75.75 0 010 1.5h-2.5A.75.75 0 013 5.25v-2.5a.75.75 0 011.5 0v.38A6 6 0 112 8a.75.75 0 011.5 0 4.5 4.5 0 109 0z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise16Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise16Filled');
export default ArrowCounterclockwise16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 14a.75.75 0 01-.75-.75V4.46L4.31 7.75a.75.75 0 01-1.12-1L7.44 2a.75.75 0 011.12 0l4.25 4.75a.75.75 0 11-1.12 1L8.75 4.46v8.79c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
}

const ArrowUp16Filled = wrapIcon(rawSvg({}), 'ArrowUp16Filled');
export default ArrowUp16Filled;
      
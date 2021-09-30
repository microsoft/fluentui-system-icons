import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 8.5H1.5a.5.5 0 010-1h6.8L6.14 5.35a.5.5 0 11.7-.7l3 3a.5.5 0 010 .7l-3 3a.5.5 0 01-.7-.7L8.29 8.5zM15 8a2 2 0 10-4 0 2 2 0 004 0z" fill={primaryFill} /></svg>;
}

const ArrowStepInRight16Filled = wrapIcon(rawSvg({}), 'ArrowStepInRight16Filled');
export default ArrowStepInRight16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-4.65.85a.5.5 0 00-.7-.7l-2.15 2.14V6.5a.5.5 0 00-1 0v5.8l-2.15-2.15a.5.5 0 00-.7.7l3 3c.2.2.5.2.7 0l3-3z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown20Filled = wrapIcon(rawSvg({}), 'ArrowCircleDown20Filled');
export default ArrowCircleDown20Filled;
      
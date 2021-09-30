import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.54 9.25h12.92a6.5 6.5 0 00-12.92 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" fill={primaryFill} /></svg>;
}

const CircleHalfFill20Filled = wrapIcon(rawSvg({}), 'CircleHalfFill20Filled');
export default CircleHalfFill20Filled;
      
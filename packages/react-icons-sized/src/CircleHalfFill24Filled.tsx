import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.03 11.25a10 10 0 0119.94 0H22V12a10 10 0 01-20 0v-.75h.03zm2 0h15.94a8 8 0 00-15.94 0z" fill={primaryFill} /></svg>;
}

const CircleHalfFill24Filled = wrapIcon(rawSvg({}), 'CircleHalfFill24Filled');
export default CircleHalfFill24Filled;
      
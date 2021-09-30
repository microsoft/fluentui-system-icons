import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 1110 0A5 5 0 011 6zm1.5 0h7a3.5 3.5 0 10-7 0z" fill={primaryFill} /></svg>;
}

const CircleHalfFill12Filled = wrapIcon(rawSvg({}), 'CircleHalfFill12Filled');
export default CircleHalfFill12Filled;
      
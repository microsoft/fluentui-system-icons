import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v4c0 1.1.9 2 2 2 0 1.1.9 2 2 2h3.5A2.5 2.5 0 0011 8.5V5a2 2 0 00-2-2 2 2 0 00-2-2H3zm5 2v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1z" fill={primaryFill} /></svg>;
}

const SquareShadow12Regular = wrapIcon(rawSvg({}), 'SquareShadow12Regular');
export default SquareShadow12Regular;
      
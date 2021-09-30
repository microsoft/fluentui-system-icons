import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 0110 0H1zm.1 1a5 5 0 009.8 0H1.1z" fill={primaryFill} /></svg>;
}

const CircleLine12Filled = wrapIcon(rawSvg({}), 'CircleLine12Filled');
export default CircleLine12Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.06 11h15.88a8 8 0 00-15.88 0zm15.88 2H4.06a8 8 0 0015.88 0zM2 12a10 10 0 1120 0 10 10 0 01-20 0z" fill={primaryFill} /></svg>;
}

const CircleLine24Filled = wrapIcon(rawSvg({}), 'CircleLine24Filled');
export default CircleLine24Filled;
      
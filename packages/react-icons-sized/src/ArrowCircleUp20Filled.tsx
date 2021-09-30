import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm4.65-.85a.5.5 0 10.7.7L9.5 7.71v5.79a.5.5 0 001 0V7.7l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.7 0l-3 3z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp20Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp20Filled');
export default ArrowCircleUp20Filled;
      
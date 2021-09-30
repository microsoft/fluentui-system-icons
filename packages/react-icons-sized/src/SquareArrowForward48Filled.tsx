import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 6A5.25 5.25 0 006 11.25v25.5C6 39.65 8.35 42 11.25 42h12.8A13 13 0 0142 24.04V11.25C41.99 8.35 39.64 6 36.74 6h-25.5zM24 35a11 11 0 1022 0 11 11 0 00-22 0zm14.3-3.3a1 1 0 011.4-1.4l3 3a1 1 0 010 1.4l-3 3a1 1 0 01-1.4-1.4l1.29-1.3H34a4 4 0 00-4 4 1 1 0 11-2 0 6 6 0 016-6h5.59l-1.3-1.3z" fill={primaryFill} /></svg>;
}

const SquareArrowForward48Filled = wrapIcon(rawSvg({}), 'SquareArrowForward48Filled');
export default SquareArrowForward48Filled;
      
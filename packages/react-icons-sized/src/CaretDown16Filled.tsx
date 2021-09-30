import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.96 5a1 1 0 00-.82 1.57l2.63 3.79c.6.85 1.86.85 2.46 0l2.63-3.79A1 1 0 0011.04 5H4.96z" fill={primaryFill} /></svg>;
}

const CaretDown16Filled = wrapIcon(rawSvg({}), 'CaretDown16Filled');
export default CaretDown16Filled;
      
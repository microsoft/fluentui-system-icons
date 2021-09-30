import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.1 16.98a1.25 1.25 0 01-.94-2.07l5.52-6.31c.7-.8 1.94-.8 2.64 0l5.52 6.3c.7.82.13 2.08-.94 2.08H6.1z" fill={primaryFill} /></svg>;
}

const CaretUp24Filled = wrapIcon(rawSvg({}), 'CaretUp24Filled');
export default CaretUp24Filled;
      
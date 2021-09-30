import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8c0 .41-.34.75-.75.75H4.46l3.29 2.94a.75.75 0 11-1 1.12L2 8.56a.75.75 0 010-1.12L6.75 3.2a.75.75 0 111 1.12L4.46 7.25h8.79c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const ArrowLeft16Filled = wrapIcon(rawSvg({}), 'ArrowLeft16Filled');
export default ArrowLeft16Filled;
      
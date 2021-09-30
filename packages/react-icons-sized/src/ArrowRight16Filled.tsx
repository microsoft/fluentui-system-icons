import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8c0 .41.34.75.75.75h8.79l-3.29 2.94a.75.75 0 101 1.12L14 8.56a.75.75 0 000-1.12L9.25 3.2a.75.75 0 10-1 1.12l3.29 2.94H2.75A.75.75 0 002 8z" fill={primaryFill} /></svg>;
}

const ArrowRight16Filled = wrapIcon(rawSvg({}), 'ArrowRight16Filled');
export default ArrowRight16Filled;
      
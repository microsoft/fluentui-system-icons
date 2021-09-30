import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.15 2.15a.5.5 0 000 .7L12.29 5H9.96c-1.47 0-2.9 0-4.23.4a6.5 6.5 0 00-3.65 2.82.5.5 0 00.84.56 5.5 5.5 0 013.1-2.43C7.19 6 8.48 6 10 6h2.3l-2.15 2.15a.5.5 0 10.7.7l3-3a.5.5 0 000-.7l-3-3a.5.5 0 00-.7 0zM8 15a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const ArrowStepOver16Filled = wrapIcon(rawSvg({}), 'ArrowStepOver16Filled');
export default ArrowStepOver16Filled;
      
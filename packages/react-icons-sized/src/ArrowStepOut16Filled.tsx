import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.65 4.85c.2.2.5.2.7 0L7.5 2.71V9.5a.5.5 0 001 0V2.7l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.7 0l-3 3a.5.5 0 000 .7zM8 15a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const ArrowStepOut16Filled = wrapIcon(rawSvg({}), 'ArrowStepOut16Filled');
export default ArrowStepOut16Filled;
      
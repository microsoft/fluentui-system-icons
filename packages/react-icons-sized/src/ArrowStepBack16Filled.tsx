import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 2.15c.2.2.2.5 0 .7L3.71 5h2.33c1.47 0 2.9 0 4.23.4a6.5 6.5 0 013.65 2.82.5.5 0 01-.84.56 5.5 5.5 0 00-3.1-2.43A14.05 14.05 0 006 6H3.7l2.15 2.15a.5.5 0 11-.7.7l-3-3a.5.5 0 010-.7l3-3c.2-.2.5-.2.7 0zM8 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const ArrowStepBack16Filled = wrapIcon(rawSvg({}), 'ArrowStepBack16Filled');
export default ArrowStepBack16Filled;
      
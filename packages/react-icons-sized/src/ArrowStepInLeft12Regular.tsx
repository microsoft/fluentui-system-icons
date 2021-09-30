import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6a.5.5 0 00-.5-.5H6.7l1.15-1.15a.5.5 0 10-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 10.7-.7L6.71 6.5h3.79A.5.5 0 0011 6zM2.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 1a.5.5 0 110 1 .5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const ArrowStepInLeft12Regular = wrapIcon(rawSvg({}), 'ArrowStepInLeft12Regular');
export default ArrowStepInLeft12Regular;
      
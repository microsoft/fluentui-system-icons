import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6c0-.28.22-.5.5-.5h3.8L4.14 4.35a.5.5 0 11.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 11-.7-.7L5.29 6.5H1.5A.5.5 0 011 6zm8.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 1a.5.5 0 100 1 .5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const ArrowStepInRight12Regular = wrapIcon(rawSvg({}), 'ArrowStepInRight12Regular');
export default ArrowStepInRight12Regular;
      
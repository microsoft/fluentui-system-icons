import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 6.5a.5.5 0 001 0V2.7l1.15 1.15a.5.5 0 10.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 10.7.7L5.5 2.71V6.5zm2 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const ArrowStepOut12Regular = wrapIcon(rawSvg({}), 'ArrowStepOut12Regular');
export default ArrowStepOut12Regular;
      
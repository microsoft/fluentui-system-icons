import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.94a2 2 0 111 0V6h2a1 1 0 011 1v1.06a2 2 0 11-1 0V7h-5v1.06a2 2 0 11-1 0V7a1 1 0 011-1h2V4.94zM6 4a1 1 0 100-2 1 1 0 000 2zm-3 7a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const Organization12Regular = wrapIcon(rawSvg({}), 'Organization12Regular');
export default Organization12Regular;
      
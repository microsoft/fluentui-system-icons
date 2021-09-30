import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.94a2 2 0 111 0V6h2a1 1 0 011 1v1.06a2 2 0 11-1 0V7h-5v1.06a2 2 0 11-1 0V7a1 1 0 011-1h2V4.94z" fill={primaryFill} /></svg>;
}

const Organization12Filled = wrapIcon(rawSvg({}), 'Organization12Filled');
export default Organization12Filled;
      
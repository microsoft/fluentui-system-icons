import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.91 2.6a3.25 3.25 0 00-3.82 0L3.85 10.04a3.25 3.25 0 00-1.18 3.64l3.9 12.04a3.25 3.25 0 003.1 2.24h12.66c1.4 0 2.66-.9 3.1-2.24l3.9-12.04a3.25 3.25 0 00-1.18-3.64L17.91 2.6z" fill={primaryFill} /></svg>;
}

const Pentagon32Filled = wrapIcon(rawSvg({}), 'Pentagon32Filled');
export default Pentagon32Filled;
      
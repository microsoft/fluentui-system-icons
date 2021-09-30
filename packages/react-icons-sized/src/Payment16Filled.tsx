import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a2 2 0 00-2 2v1h14V5a2 2 0 00-2-2H3z" fill={primaryFill} /><path d="M1 11V7h14v4a2 2 0 01-2 2H3a2 2 0 01-2-2zm9.5-1a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /></svg>;
}

const Payment16Filled = wrapIcon(rawSvg({}), 'Payment16Filled');
export default Payment16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 23v1a1 1 0 01-1 1h-2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.59A2 2 0 014.59 22l7.73-7.74A8 8 0 1120 20h-2v2a1 1 0 01-1 1h-2zm7-11a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const Key32Filled = wrapIcon(rawSvg({}), 'Key32Filled');
export default Key32Filled;
      
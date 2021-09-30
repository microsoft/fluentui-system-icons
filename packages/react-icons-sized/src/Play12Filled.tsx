import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2a1 1 0 00-1.5.86v6.28a1 1 0 001.5.87l5.49-3.14a1 1 0 000-1.74L4.49 2z" fill={primaryFill} /></svg>;
}

const Play12Filled = wrapIcon(rawSvg({}), 'Play12Filled');
export default Play12Filled;
      
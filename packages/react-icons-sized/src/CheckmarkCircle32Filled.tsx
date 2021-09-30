import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 16a14 14 0 1128 0 14 14 0 01-28 0zm20.7-3.3a1 1 0 00-1.4-1.4l-6.8 6.79-3.3-3.3a1 1 0 00-1.4 1.42l4 4a1 1 0 001.4 0l7.5-7.5z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle32Filled = wrapIcon(rawSvg({}), 'CheckmarkCircle32Filled');
export default CheckmarkCircle32Filled;
      
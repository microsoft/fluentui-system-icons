import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.7 12.7a1 1 0 00-1.4-1.4l-6.8 6.79-3.3-3.3a1 1 0 00-1.4 1.42l4 4a1 1 0 001.4 0l7.5-7.5zM16 2a14 14 0 100 28 14 14 0 000-28zM4 16a12 12 0 1124 0 12 12 0 01-24 0z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle32Regular = wrapIcon(rawSvg({}), 'CheckmarkCircle32Regular');
export default CheckmarkCircle32Regular;
      
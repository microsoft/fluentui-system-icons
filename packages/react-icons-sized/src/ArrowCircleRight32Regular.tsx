import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.3 22.7a1 1 0 010-1.4l4.29-4.3H10a1 1 0 110-2h9.59l-4.3-4.3a1 1 0 011.42-1.4l6 6a1 1 0 010 1.4l-6 6a1 1 0 01-1.42 0zM16 30a14 14 0 110-28 14 14 0 010 28zM4 16a12 12 0 1024 0 12 12 0 00-24 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight32Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight32Regular');
export default ArrowCircleRight32Regular;
      
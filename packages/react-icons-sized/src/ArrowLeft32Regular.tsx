import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29 16a1 1 0 01-1 1H6.41l8.3 8.3a1 1 0 01-1.42 1.4l-10-10a1 1 0 010-1.4l10-10a1 1 0 111.42 1.4L6.4 15H28a1 1 0 011 1z" fill={primaryFill} /></svg>;
}

const ArrowLeft32Regular = wrapIcon(rawSvg({}), 'ArrowLeft32Regular');
export default ArrowLeft32Regular;
      
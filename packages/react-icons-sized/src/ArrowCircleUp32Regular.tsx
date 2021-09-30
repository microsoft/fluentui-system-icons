import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.7 16.7a1 1 0 01-1.4 0L17 12.42V22a1 1 0 11-2 0v-9.59l-4.3 4.3a1 1 0 01-1.4-1.42l6-6a1 1 0 011.4 0l6 6a1 1 0 010 1.42zM30 16a14 14 0 11-28 0 14 14 0 0128 0zM16 28a12 12 0 100-24 12 12 0 000 24z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp32Regular = wrapIcon(rawSvg({}), 'ArrowCircleUp32Regular');
export default ArrowCircleUp32Regular;
      
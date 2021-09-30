import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 10.85l-2.5-2.5a.5.5 0 010-.7l2.5-2.5a.5.5 0 11.7.7L6.21 7.5H11a.5.5 0 010 1H6.2l1.65 1.65a.5.5 0 01-.7.7zM1 8a7 7 0 1014 0A7 7 0 001 8zm7 6A6 6 0 118 2a6 6 0 010 12z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft16Regular = wrapIcon(rawSvg({}), 'ArrowCircleLeft16Regular');
export default ArrowCircleLeft16Regular;
      
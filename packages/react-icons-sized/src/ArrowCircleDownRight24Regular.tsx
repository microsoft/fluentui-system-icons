import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 14.5H8.74a.75.75 0 000 1.5h6.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 00-1.5 0v4.64L9.28 8.22a.75.75 0 10-1.06 1.06l5.27 5.22z" fill={primaryFill} /><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-8.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownRight24Regular = wrapIcon(rawSvg({}), 'ArrowCircleDownRight24Regular');
export default ArrowCircleDownRight24Regular;
      
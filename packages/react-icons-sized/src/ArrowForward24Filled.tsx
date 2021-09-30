import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.3 16.3a1 1 0 101.41 1.4l5-5a1 1 0 000-1.4l-5-5a1 1 0 00-1.41 1.4l3.29 3.3H11a8 8 0 00-8 7.75V19a1 1 0 102 0 6 6 0 015.78-6h6.81l-3.3 3.3z" fill={primaryFill} /></svg>;
}

const ArrowForward24Filled = wrapIcon(rawSvg({}), 'ArrowForward24Filled');
export default ArrowForward24Filled;
      
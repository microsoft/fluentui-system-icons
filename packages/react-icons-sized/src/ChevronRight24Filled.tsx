import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 4.3a1 1 0 000 1.4l6.29 6.3-6.3 6.3a1 1 0 101.42 1.4l7-7a1 1 0 000-1.4l-7-7a1 1 0 00-1.42 0z" fill={primaryFill} /></svg>;
}

const ChevronRight24Filled = wrapIcon(rawSvg({}), 'ChevronRight24Filled');
export default ChevronRight24Filled;
      
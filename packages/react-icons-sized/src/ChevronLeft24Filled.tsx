import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.7 4.3a1 1 0 010 1.4L9.42 12l6.3 6.3a1 1 0 01-1.42 1.4l-7-7a1 1 0 010-1.4l7-7a1 1 0 011.42 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft24Filled = wrapIcon(rawSvg({}), 'ChevronLeft24Filled');
export default ChevronLeft24Filled;
      
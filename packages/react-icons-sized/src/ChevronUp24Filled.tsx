import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 15.7a1 1 0 001.4 0L12 9.42l6.3 6.3a1 1 0 001.4-1.42l-7-7a1 1 0 00-1.4 0l-7 7a1 1 0 000 1.42z" fill={primaryFill} /></svg>;
}

const ChevronUp24Filled = wrapIcon(rawSvg({}), 'ChevronUp24Filled');
export default ChevronUp24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 8.3a1 1 0 011.4 0l6.3 6.29 6.3-6.3a1 1 0 111.4 1.42l-7 7a1 1 0 01-1.4 0l-7-7a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const ChevronDown24Filled = wrapIcon(rawSvg({}), 'ChevronDown24Filled');
export default ChevronDown24Filled;
      
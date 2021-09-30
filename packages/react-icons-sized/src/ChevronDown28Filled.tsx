import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 9.3a1 1 0 011.4 0l8.3 8.29 8.3-8.3a1 1 0 111.4 1.42l-9 9a1 1 0 01-1.4 0l-9-9a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const ChevronDown28Filled = wrapIcon(rawSvg({}), 'ChevronDown28Filled');
export default ChevronDown28Filled;
      
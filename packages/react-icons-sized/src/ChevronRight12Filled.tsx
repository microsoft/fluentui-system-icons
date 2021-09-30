import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.47 2.22c-.3.3-.3.77 0 1.06L7.19 6 4.47 8.72a.75.75 0 001.06 1.06l3.25-3.25c.3-.3.3-.77 0-1.06L5.53 2.22a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
}

const ChevronRight12Filled = wrapIcon(rawSvg({}), 'ChevronRight12Filled');
export default ChevronRight12Filled;
      
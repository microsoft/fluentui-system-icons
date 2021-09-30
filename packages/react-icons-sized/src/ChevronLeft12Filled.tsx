import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.53 2.22c.3.3.3.77 0 1.06L4.81 6l2.72 2.72a.75.75 0 01-1.06 1.06L3.22 6.53a.75.75 0 010-1.06l3.25-3.25c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft12Filled = wrapIcon(rawSvg({}), 'ChevronLeft12Filled');
export default ChevronLeft12Filled;
      
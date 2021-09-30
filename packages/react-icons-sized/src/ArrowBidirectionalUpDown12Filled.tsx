import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.78 4.53a.75.75 0 01-1.06-1.06l2.5-2.5c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 01-1.06 1.06L6.5 3.31V8.7l1.22-1.22a.75.75 0 011.06 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06L5 8.69V3.3L3.78 4.53z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown12Filled = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown12Filled');
export default ArrowBidirectionalUpDown12Filled;
      
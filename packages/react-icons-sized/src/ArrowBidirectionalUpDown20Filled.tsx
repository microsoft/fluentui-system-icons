import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 7.78a.75.75 0 01-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 01-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06L9 14.44V5.56L6.78 7.78z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown20Filled = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown20Filled');
export default ArrowBidirectionalUpDown20Filled;
      
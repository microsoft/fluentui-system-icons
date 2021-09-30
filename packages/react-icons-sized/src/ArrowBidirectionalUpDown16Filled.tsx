import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.28 6.28a.75.75 0 01-1.06-1.06l3-3c.3-.3.77-.3 1.06 0l3 3a.75.75 0 01-1.06 1.06L8.5 4.56v6.88l1.72-1.72a.75.75 0 111.06 1.06l-3 3c-.3.3-.77.3-1.06 0l-3-3a.75.75 0 111.06-1.06L7 11.44V4.56L5.28 6.28z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown16Filled = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown16Filled');
export default ArrowBidirectionalUpDown16Filled;
      
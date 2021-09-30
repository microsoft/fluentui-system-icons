import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.78 2.22a.75.75 0 10-1.06 1.06L15.44 5h-4.19A2.75 2.75 0 008.5 7.75v5.5c0 .64-.48 1.17-1.1 1.24a2.75 2.75 0 100 1.5 2.75 2.75 0 002.6-2.74v-5.5c0-.69.56-1.25 1.25-1.25h4.19l-1.72 1.72a.75.75 0 001.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3zM11 12.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-4zm8 2a.5.5 0 00-1 0V17a1 1 0 01-1 1h-3.5a.5.5 0 000 1H17a2 2 0 002-2v-2.5z" fill={primaryFill} /></svg>;
}

const ArrowRoutingRectangleMultiple20Filled = wrapIcon(rawSvg({}), 'ArrowRoutingRectangleMultiple20Filled');
export default ArrowRoutingRectangleMultiple20Filled;
      
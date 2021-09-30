import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 11c.97 0 1.87-.3 2.6-.83l3.62 3.61a.75.75 0 101.06-1.06l-3.61-3.61A4.5 4.5 0 106.5 11zM7 4.5V6h1.5a.5.5 0 010 1H7v1.5a.5.5 0 01-1 0V7H4.5a.5.5 0 010-1H6V4.5a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const ZoomIn16Filled = wrapIcon(rawSvg({}), 'ZoomIn16Filled');
export default ZoomIn16Filled;
      
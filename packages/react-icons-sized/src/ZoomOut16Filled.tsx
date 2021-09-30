import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 11c.97 0 1.87-.3 2.6-.83l3.62 3.61a.75.75 0 101.06-1.06l-3.61-3.61A4.5 4.5 0 106.5 11zm-2-5h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const ZoomOut16Filled = wrapIcon(rawSvg({}), 'ZoomOut16Filled');
export default ZoomOut16Filled;
      
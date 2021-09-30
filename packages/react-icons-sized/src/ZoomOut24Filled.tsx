import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a7.5 7.5 0 10-2.95 5.96l4.74 4.75.1.08a1 1 0 001.32-1.5l-4.75-4.74A7.47 7.47 0 0017.5 10zm-4-1a1 1 0 110 2h-7a1 1 0 110-2h7z" fill={primaryFill} /></svg>;
}

const ZoomOut24Filled = wrapIcon(rawSvg({}), 'ZoomOut24Filled');
export default ZoomOut24Filled;
      
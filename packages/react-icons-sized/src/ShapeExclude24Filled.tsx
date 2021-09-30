import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v8c0 1.8 1.46 3.25 3.25 3.25H7.5v2.25c0 1.8 1.46 3.25 3.25 3.25h8c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H16.5V5.25c0-1.8-1.46-3.25-3.25-3.25h-8zM16.5 7.5v5.75c0 1.8-1.46 3.25-3.25 3.25H7.5v-5.75c0-1.8 1.46-3.25 3.25-3.25h5.75z" fill={primaryFill} /></svg>;
}

const ShapeExclude24Filled = wrapIcon(rawSvg({}), 'ShapeExclude24Filled');
export default ShapeExclude24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13H7v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13V4.5A2.5 2.5 0 0010.5 2h-6z" fill={primaryFill} /></svg>;
}

const ShapeUnion20Filled = wrapIcon(rawSvg({}), 'ShapeUnion20Filled');
export default ShapeUnion20Filled;
      
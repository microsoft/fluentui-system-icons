import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.5V2H5.5a.5.5 0 00-.5.5V9h10V2.5a.5.5 0 00-.5-.5H13v3.5a.5.5 0 01-1 0V2h-1v2.5a.5.5 0 01-1 0z" fill={primaryFill} /><path d="M15 10H5v1c0 1.1.9 2 2 2h1.5v3.5a1.5 1.5 0 103 0V13H13a2 2 0 002-2v-1z" fill={primaryFill} /></svg>;
}

const PaintBrush20Filled = wrapIcon(rawSvg({}), 'PaintBrush20Filled');
export default PaintBrush20Filled;
      
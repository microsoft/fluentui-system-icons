import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v2.5a.5.5 0 001 0V1h1v3.5a.5.5 0 001 0V1h1.5v6h-9V1H8z" fill={primaryFill} /><path d="M3.5 8v.5c0 1.1.9 2 2 2h1v3a1.5 1.5 0 003 0v-3h1a2 2 0 002-2V8h-9z" fill={primaryFill} /></svg>;
}

const PaintBrush16Filled = wrapIcon(rawSvg({}), 'PaintBrush16Filled');
export default PaintBrush16Filled;
      
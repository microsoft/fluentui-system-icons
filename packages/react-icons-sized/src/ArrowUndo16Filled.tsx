import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75a.75.75 0 011.5 0v3.1l2.67-2.68a4 4 0 115.66 5.66l-4.95 4.95a.75.75 0 11-1.06-1.06l4.95-4.95a2.5 2.5 0 00-3.54-3.54L5.96 6.5h2.29a.75.75 0 110 1.5h-4.4A.85.85 0 013 7.15v-4.4z" fill={primaryFill} /></svg>;
}

const ArrowUndo16Filled = wrapIcon(rawSvg({}), 'ArrowUndo16Filled');
export default ArrowUndo16Filled;
      
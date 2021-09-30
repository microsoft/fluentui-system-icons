import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5A4.5 4.5 0 019.97 5H8.5A3.5 3.5 0 005 8.5v1.47A4.5 4.5 0 011 5.5z" fill={primaryFill} /><path d="M8.5 6A2.5 2.5 0 006 8.5v4A2.5 2.5 0 008.5 15h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 0012.5 6h-4z" fill={primaryFill} /></svg>;
}

const Shapes16Filled = wrapIcon(rawSvg({}), 'Shapes16Filled');
export default Shapes16Filled;
      
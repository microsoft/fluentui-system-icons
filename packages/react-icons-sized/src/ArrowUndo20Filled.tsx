import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.86 6.5h2.39a.75.75 0 010 1.5h-4.4A.85.85 0 014 7.15v-4.4a.75.75 0 011.5 0V5.7l3.06-2.66a5.25 5.25 0 016.89 7.92l-8.17 7.1a.75.75 0 11-.99-1.13l8.17-7.1a3.75 3.75 0 10-4.92-5.66L6.86 6.5z" fill={primaryFill} /></svg>;
}

const ArrowUndo20Filled = wrapIcon(rawSvg({}), 'ArrowUndo20Filled');
export default ArrowUndo20Filled;
      
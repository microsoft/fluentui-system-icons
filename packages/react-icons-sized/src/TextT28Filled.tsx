import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 11-2 0V6h-6v16h1a1 1 0 110 2h-4a1 1 0 110-2h1V6H7v2a1 1 0 01-2 0V5z" fill={primaryFill} /></svg>;
}

const TextT28Filled = wrapIcon(rawSvg({}), 'TextT28Filled');
export default TextT28Filled;
      
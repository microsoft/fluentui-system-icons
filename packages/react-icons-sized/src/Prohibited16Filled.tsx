import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.5a4.5 4.5 0 00-3.67 7.1l6.28-6.27A4.48 4.48 0 008 3.5zm3.67 1.9l-6.28 6.27a4.5 4.5 0 006.28-6.28zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill={primaryFill} /></svg>;
}

const Prohibited16Filled = wrapIcon(rawSvg({}), 'Prohibited16Filled');
export default Prohibited16Filled;
      
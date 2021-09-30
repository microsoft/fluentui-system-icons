import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.46-6.8a.5.5 0 01-.1.15l-2.5 2.5a.5.5 0 01-.71-.7L9.79 8.5H5a.5.5 0 010-1h4.8L8.14 5.85a.5.5 0 11.7-.7l2.5 2.5a.5.5 0 01.11.54z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight16Filled = wrapIcon(rawSvg({}), 'ArrowCircleRight16Filled');
export default ArrowCircleRight16Filled;
      
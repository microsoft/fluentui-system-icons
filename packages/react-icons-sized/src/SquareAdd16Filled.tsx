import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h1.76A5.5 5.5 0 0114 6.26V4.5A2.5 2.5 0 0011.5 2h-7zm6 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const SquareAdd16Filled = wrapIcon(rawSvg({}), 'SquareAdd16Filled');
export default SquareAdd16Filled;
      
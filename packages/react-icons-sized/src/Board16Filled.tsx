import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2v3H2v-.5A2.5 2.5 0 014.5 2h3zm1 0v8H14V4.5A2.5 2.5 0 0011.5 2h-3zm5.5 9H8.5v3h3a2.5 2.5 0 002.5-2.5V11zm-6.5 3V6H2v5.5A2.5 2.5 0 004.5 14h3z" fill={primaryFill} /></svg>;
}

const Board16Filled = wrapIcon(rawSvg({}), 'Board16Filled');
export default Board16Filled;
      
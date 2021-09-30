import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5V7h7V2H4.5zm5.5 8h4V6h-4v4zm4 1h-4v3h1.5a2.5 2.5 0 002.5-2.5V11zm0-6.5V5h-4V2h1.5A2.5 2.5 0 0114 4.5zM9 8H2v3.5A2.5 2.5 0 004.5 14H9V8z" fill={primaryFill} /></svg>;
}

const BoardSplit16Filled = wrapIcon(rawSvg({}), 'BoardSplit16Filled');
export default BoardSplit16Filled;
      
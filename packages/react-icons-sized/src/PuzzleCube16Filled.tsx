import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2v3h4V2H6zM5 6H2v4h3V6zm1 4V6h4v4H6zm-1 1H2v.5A2.5 2.5 0 004.5 14H5v-3zm1 3h4v-3H6v3zm5 0v-3h3v.5a2.5 2.5 0 01-2.5 2.5H11zm3-8v4h-3V6h3zm0-1v-.5A2.5 2.5 0 0011.5 2H11v3h3z" fill={primaryFill} /></svg>;
}

const PuzzleCube16Filled = wrapIcon(rawSvg({}), 'PuzzleCube16Filled');
export default PuzzleCube16Filled;
      
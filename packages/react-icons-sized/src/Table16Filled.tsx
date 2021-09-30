import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5V5h3V2h-.5z" fill={primaryFill} /><path d="M6 2v3h4V2H6z" fill={primaryFill} /><path d="M5 6H2v4h3V6z" fill={primaryFill} /><path d="M6 10V6h4v4H6z" fill={primaryFill} /><path d="M5 11H2v.5A2.5 2.5 0 004.5 14H5v-3z" fill={primaryFill} /><path d="M6 14h4v-3H6v3z" fill={primaryFill} /><path d="M11 14v-3h3v.5a2.5 2.5 0 01-2.5 2.5H11z" fill={primaryFill} /><path d="M14 6v4h-3V6h3z" fill={primaryFill} /><path d="M14 5v-.5A2.5 2.5 0 0011.5 2H11v3h3z" fill={primaryFill} /></svg>;
}

const Table16Filled = wrapIcon(rawSvg({}), 'Table16Filled');
export default Table16Filled;
      
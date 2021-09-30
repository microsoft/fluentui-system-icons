import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v3h5.5V2h-3z" fill={primaryFill} /><path d="M7.5 8.5H2v3A2.5 2.5 0 004.5 14h3V8.5z" fill={primaryFill} /><path d="M8.5 8.5H14v3a2.5 2.5 0 01-2.5 2.5h-3V8.5z" fill={primaryFill} /><path d="M14 7.5v-3A2.5 2.5 0 0011.5 2h-3v5.5H14z" fill={primaryFill} /></svg>;
}

const TableSimple16Filled = wrapIcon(rawSvg({}), 'TableSimple16Filled');
export default TableSimple16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 21h5.25c1.8 0 3.25-1.46 3.25-3.25V17h-8.5v4z" fill={primaryFill} /><path d="M21 7v-.75C21 4.45 19.54 3 17.75 3H12.5v4H21z" fill={primaryFill} /><path d="M11 3H6.25A3.25 3.25 0 003 6.25V7h8V3z" fill={primaryFill} /><path d="M3 8.5v7h18v-7H3z" fill={primaryFill} /><path d="M3 17v.75C3 19.55 4.46 21 6.25 21H11v-4H3z" fill={primaryFill} /></svg>;
}

const TableCellsMerge24Filled = wrapIcon(rawSvg({}), 'TableCellsMerge24Filled');
export default TableCellsMerge24Filled;
      
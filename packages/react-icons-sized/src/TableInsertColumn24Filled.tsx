import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3.75v16.5a.75.75 0 01-1.5 0V3.75a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M16 5.25C16 4.01 15.1 3 14 3h-4C8.9 3 8 4 8 5.25V8h8V5.25z" fill={primaryFill} /><path d="M8 14.5v-5h8v5H8z" fill={primaryFill} /><path d="M8 16v2.75c0 1.24.9 2.25 2 2.25h4c1.1 0 2-1 2-2.25V16H8z" fill={primaryFill} /><path d="M21 20.25V3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const TableInsertColumn24Filled = wrapIcon(rawSvg({}), 'TableInsertColumn24Filled');
export default TableInsertColumn24Filled;
      
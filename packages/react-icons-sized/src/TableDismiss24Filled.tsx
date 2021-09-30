import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.52a6.47 6.47 0 01-.85-5H9.5v5z" fill={primaryFill} /><path d="M21 9.5v2.52a6.47 6.47 0 00-5-.85V9.5h5z" fill={primaryFill} /><path d="M14.5 9.5v2.23a6.53 6.53 0 00-2.77 2.77H9.5v-5h5z" fill={primaryFill} /><path d="M21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5z" fill={primaryFill} /><path d="M14.5 3h-5v5h5V3z" fill={primaryFill} /><path d="M8 3H6.25A3.25 3.25 0 003 6.25V8h5V3z" fill={primaryFill} /><path d="M3 9.5v5h5v-5H3z" fill={primaryFill} /><path d="M3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const TableDismiss24Filled = wrapIcon(rawSvg({}), 'TableDismiss24Filled');
export default TableDismiss24Filled;
      
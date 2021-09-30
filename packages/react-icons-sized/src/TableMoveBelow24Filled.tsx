import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 9.5v4.02c.25-.04.5-.02.75.05v-.82a1.75 1.75 0 113.5 0v.82c.24-.07.5-.09.75-.05V9.5h-5z" fill={primaryFill} /><path d="M8 9.5v5H3.75a.75.75 0 01-.75-.75V9.5h5z" fill={primaryFill} /><path d="M9.5 8h5V3h-5v5z" fill={primaryFill} /><path d="M16 9.5v5h4.25c.41 0 .75-.34.75-.75V9.5h-5z" fill={primaryFill} /><path d="M21 8h-5V3h1.75C19.55 3 21 4.46 21 6.25V8z" fill={primaryFill} /><path d="M8 8H3V6.25C3 4.45 4.46 3 6.25 3H8v5z" fill={primaryFill} /><path d="M3.75 19.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M9.19 14.75a.75.75 0 011.06-.06l1 .89v-2.83a.75.75 0 011.5 0v2.83l1-.9a.75.75 0 011 1.13l-2.25 2a.75.75 0 01-1 0l-2.25-2a.75.75 0 01-.06-1.06z" fill={primaryFill} /></svg>;
}

const TableMoveBelow24Filled = wrapIcon(rawSvg({}), 'TableMoveBelow24Filled');
export default TableMoveBelow24Filled;
      
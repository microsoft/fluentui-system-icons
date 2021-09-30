import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3H6.25A3.25 3.25 0 003 6.25V8h5V3z" fill={primaryFill} /><path d="M8 9.5H3v5h5v-5z" fill={primaryFill} /><path d="M9.5 14.5v-5h4.02c-.04.25-.02.5.05.75h-.82a1.75 1.75 0 100 3.5h.82c-.07.24-.09.5-.05.75H9.5z" fill={primaryFill} /><path d="M8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5z" fill={primaryFill} /><path d="M9.5 21v-5h5v4.25a.75.75 0 01-.75.75H9.5z" fill={primaryFill} /><path d="M9.5 8V3h4.25c.41 0 .75.34.75.75V8h-5z" fill={primaryFill} /><path d="M19.5 20.25a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0v16.5z" fill={primaryFill} /><path d="M14.75 14.81a.75.75 0 01-.06-1.06l.89-1h-2.83a.75.75 0 010-1.5h2.83l-.89-1a.75.75 0 111.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 01-1.06.06z" fill={primaryFill} /></svg>;
}

const TableMoveRight24Filled = wrapIcon(rawSvg({}), 'TableMoveRight24Filled');
export default TableMoveRight24Filled;
      
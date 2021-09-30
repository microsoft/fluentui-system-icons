import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 6.5C4.01 6.5 3 7.5 3 8.75v4.5c0 1.24 1 2.25 2.25 2.25H8v-9H5.25zm7.24 8.36c-.2.2-.37.41-.51.64H9.5v-9h5v6.35l-2.01 2.01zM20.72 8h.15a2.25 2.25 0 00-2.12-1.5H16v4.85l2.4-2.39A3.28 3.28 0 0120.7 8zm0 1c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0020.72 9z" fill={primaryFill} /></svg>;
}

const TableCellEdit24Filled = wrapIcon(rawSvg({}), 'TableCellEdit24Filled');
export default TableCellEdit24Filled;
      
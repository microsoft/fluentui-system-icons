import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8.75C3 7.51 4 6.5 5.25 6.5h13.5c.98 0 1.82.63 2.12 1.5h-.15c-.47 0-.94.1-1.37.3a.75.75 0 00-.6-.3H15.5v3.85l-1.5 1.5V8h-4v6h3.35l-.86.86c-.2.2-.37.41-.51.64H5.25c-1.24 0-2.25-1-2.25-2.25v-4.5zM5.25 8a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75H8.5V8H5.25zm15.47 1c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0020.72 9z" fill={primaryFill} /></svg>;
}

const TableCellEdit24Regular = wrapIcon(rawSvg({}), 'TableCellEdit24Regular');
export default TableCellEdit24Regular;
      
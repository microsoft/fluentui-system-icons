import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 8v4H9V8h1z" fill={primaryFill} /><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zm-13 9V14h5v2H5.36A1.5 1.5 0 014 14.5zM9 4v2H4v-.64A1.5 1.5 0 015.5 4H9zm1 2V4h4.64A1.5 1.5 0 0116 5.5V6h-6zm6 7H4V7h12v6zm0 1.5v.14A1.5 1.5 0 0114.5 16H10v-2h6v.5z" fill={primaryFill} /></svg>;
}

const TableCellsSplitRegular = wrapIcon(rawSvg({}), 'TableCellsSplitRegular');
export default TableCellsSplitRegular;
      
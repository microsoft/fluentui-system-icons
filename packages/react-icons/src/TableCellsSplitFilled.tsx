import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6h7v-.5A2.5 2.5 0 0014.5 3H10v3z" fill={primaryFill} /><path d="M17 13V7H3v6h14zm-7-5v4H9V8h1z" fill={primaryFill} /><path d="M10 17h4.5a2.5 2.5 0 002.5-2.5V14h-7v3z" fill={primaryFill} /><path d="M9 14H3v.5A2.5 2.5 0 005.5 17H9v-3z" fill={primaryFill} /><path d="M9 6V3H5.5A2.5 2.5 0 003 5.5V6h6z" fill={primaryFill} /></svg>;
}

const TableCellsSplitFilled = wrapIcon(rawSvg({}), 'TableCellsSplitFilled');
export default TableCellsSplitFilled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 17h4.5a2.5 2.5 0 002.5-2.5V14h-7v3z" fill={primaryFill} /><path d="M17 13V7H3v6h14z" fill={primaryFill} /><path d="M3 14h6v3H5.5A2.5 2.5 0 013 14.5V14z" fill={primaryFill} /><path d="M10 6h7v-.5A2.5 2.5 0 0014.5 3H10v3z" fill={primaryFill} /><path d="M9 3v3H3v-.5A2.5 2.5 0 015.5 3H9z" fill={primaryFill} /></svg>;
}

const TableCellsMergeFilled = wrapIcon(rawSvg({}), 'TableCellsMergeFilled');
export default TableCellsMergeFilled;
      
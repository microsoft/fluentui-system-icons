import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 10H11v4h1.5v-4z" fill={primaryFill} /><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75V7.5H11v-3H6.25zm13.25 12h-7v3h5.25c.97 0 1.75-.78 1.75-1.75V16.5zm0-10.25c0-.97-.78-1.75-1.75-1.75H12.5v3h7V6.25zM4.5 16.5v1.25c0 .97.78 1.75 1.75 1.75H11v-3H4.5zm0-1.5h15V9h-15v6z" fill={primaryFill} /></svg>;
}

const TableCellsSplit24Regular = wrapIcon(rawSvg({}), 'TableCellsSplit24Regular');
export default TableCellsSplit24Regular;
      
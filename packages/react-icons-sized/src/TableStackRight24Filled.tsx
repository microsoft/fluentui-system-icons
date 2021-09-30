import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3H6.25A3.25 3.25 0 003 6.25V8h5V3z" fill={primaryFill} /><path d="M8 9.5H3v5h5v-5z" fill={primaryFill} /><path d="M9.5 14.5v-5h5v5h-5z" fill={primaryFill} /><path d="M8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5z" fill={primaryFill} /><path d="M9.5 21v-5h5v4.25a.75.75 0 01-.75.75H9.5z" fill={primaryFill} /><path d="M9.5 8V3h4.25c.41 0 .75.34.75.75V8h-5z" fill={primaryFill} /><path d="M19.5 20.25a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0v16.5z" fill={primaryFill} /></svg>;
}

const TableStackRight24Filled = wrapIcon(rawSvg({}), 'TableStackRight24Filled');
export default TableStackRight24Filled;
      
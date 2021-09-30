import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 17a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5zm5 0a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5H15a2 2 0 012 2v10a2 2 0 01-2 2H8.5zm4.5-1h2a1 1 0 001-1v-2h-3v3zm3-8h-3v4h3V8zm0-1V5a1 1 0 00-1-1h-2v3h3zm-4 0V4H9v3h3zM9 8v4h3V8H9zm0 8h3v-3H9v3z" fill={primaryFill} /></svg>;
}

const TableStackLeft20Regular = wrapIcon(rawSvg({}), 'TableStackLeft20Regular');
export default TableStackLeft20Regular;
      
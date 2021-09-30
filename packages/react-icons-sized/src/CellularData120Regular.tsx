import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4a.5.5 0 01.5.41v11.1a.5.5 0 01-.99.08V4.5c0-.28.22-.5.5-.5zm-9 6a.5.5 0 01.5.41v5.09a.5.5 0 01-.99.09V10.5c0-.28.22-.5.5-.5zm-3 2a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09V12.5c0-.28.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09V8.5c0-.28.22-.5.5-.5zm3-2a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V6.5c0-.27.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CellularData120Regular = wrapIcon(rawSvg({}), 'CellularData120Regular');
export default CellularData120Regular;
      
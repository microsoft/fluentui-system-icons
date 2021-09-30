import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4.5H3.75a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M8 8H5.25C4.01 8 3 8.9 3 10v4c0 1.1 1 2 2.25 2H8V8z" fill={primaryFill} /><path d="M9.5 16h5V8h-5v8z" fill={primaryFill} /><path d="M18.75 16H16V8h2.75c1.24 0 2.25.9 2.25 2v4c0 1.1-1 2-2.25 2z" fill={primaryFill} /><path d="M3.75 21h16.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TableInsertRow24Filled = wrapIcon(rawSvg({}), 'TableInsertRow24Filled');
export default TableInsertRow24Filled;
      
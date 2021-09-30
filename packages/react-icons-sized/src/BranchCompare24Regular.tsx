import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5.5a3.5 3.5 0 01-3 3.46V15a3 3 0 003 3h2.69l-.97-.97a.75.75 0 111.06-1.06l2.25 2.25c.3.3.3.77 0 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06l.97-.97H9A4.5 4.5 0 014.5 15V8.86A3.5 3.5 0 119 5.5zm-1.5 0a2 2 0 10-4 0 2 2 0 004 0zm14.5 13a3.5 3.5 0 11-4-3.46V9a3 3 0 00-3-3h-1.94l.97.97a.75.75 0 01-1.06 1.06l-2.25-2.25a.75.75 0 010-1.06l2.25-2.25a.75.75 0 111.06 1.06l-.97.97H15A4.5 4.5 0 0119.5 9v6.14A3.5 3.5 0 0122 18.5zm-1.5 0a2 2 0 10-4 0 2 2 0 004 0z" fill={primaryFill} /></svg>;
}

const BranchCompare24Regular = wrapIcon(rawSvg({}), 'BranchCompare24Regular');
export default BranchCompare24Regular;
      
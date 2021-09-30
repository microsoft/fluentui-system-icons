import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 3.75zm0 8c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zM2.75 7a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const List16Filled = wrapIcon(rawSvg({}), 'List16Filled');
export default List16Filled;
      
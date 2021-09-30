import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 3.75a.75.75 0 00-.75-.75h-8.5A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h8.5c.41 0 .75-.34.75-.75v-4.27A1.75 1.75 0 0113.52 14H10v-4h3.52a1.75 1.75 0 011.98-1.98V3.75zM4.5 14v-4h4v4h-4zM14 8.5h-4v-4h4v4zm-5.5 0h-4V6.25c0-.97.78-1.75 1.75-1.75H8.5v4zm0 11H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4v4zm1.5-4h4v4h-4v-4z" fill={primaryFill} /><path d="M19.5 3.75a.75.75 0 011.5 0v16.5a.75.75 0 01-1.5 0V3.75z" fill={primaryFill} /><path d="M14.75 9.19a.75.75 0 00-.06 1.06l.89 1h-2.83a.75.75 0 000 1.5h2.83l-.89 1a.75.75 0 101.12 1l2-2.25a.75.75 0 000-1l-2-2.25a.75.75 0 00-1.06-.06z" fill={primaryFill} /></svg>;
}

const TableMoveRight24Regular = wrapIcon(rawSvg({}), 'TableMoveRight24Regular');
export default TableMoveRight24Regular;
      
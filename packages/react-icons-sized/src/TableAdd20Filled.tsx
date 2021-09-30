import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4z" fill={primaryFill} /><path d="M7 12V8H3v4h4z" fill={primaryFill} /><path d="M9.6 12A5.52 5.52 0 0112 9.6V8H8v4h1.6z" fill={primaryFill} /><path d="M14.5 9c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2z" fill={primaryFill} /><path d="M9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5z" fill={primaryFill} /><path d="M7 13H3v1.5A2.5 2.5 0 005.5 17H7v-4z" fill={primaryFill} /><path d="M12 7V3H8v4h4z" fill={primaryFill} /><path d="M7 3v4H3V5.5A2.5 2.5 0 015.5 3H7z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const TableAdd20Filled = wrapIcon(rawSvg({}), 'TableAdd20Filled');
export default TableAdd20Filled;
      
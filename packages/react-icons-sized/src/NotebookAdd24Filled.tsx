import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 004 11.5V4.25C4 3.01 5 2 6.25 2h10.5zm-2 3.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 00-.75-.75zM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7zm-8 10.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 18v2.5a.5.5 0 11-1 0V18H3.5a.5.5 0 010-1H6v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H7z" fill={primaryFill} /></svg>;
}

const NotebookAdd24Filled = wrapIcon(rawSvg({}), 'NotebookAdd24Filled');
export default NotebookAdd24Filled;
      
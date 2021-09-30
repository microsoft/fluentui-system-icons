import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 004 11.5V4.25C4 3.01 5 2 6.25 2h10.5zm-2 3.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 00-.75-.75zM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7zM1 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zM9.5 14c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 11-.8-.59 3.5 3.5 0 015.33-.4v-.55c0-.28.22-.5.5-.5zM4 19.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 01.77.65 3.5 3.5 0 01-5.18.19z" fill={primaryFill} /></svg>;
}

const NotebookSync24Filled = wrapIcon(rawSvg({}), 'NotebookSync24Filled');
export default NotebookSync24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.79-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75H6.25a.75.75 0 00-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5zM6.5 19.88a.62.62 0 100 1.25.62.62 0 000-1.25zm0-5.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 001-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .23-.07.4-.31.68l-.1.11-.27.3c-.48.53-.67.89-.67 1.46a.5.5 0 001 0c0-.23.08-.4.32-.7l.1-.1.27-.3c.48-.53.66-.88.66-1.45 0-1.1-.82-1.95-1.85-1.95zm14.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75zm-5.5-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 017 8.25v-2.5c0-.41.34-.75.75-.75h7.5zm-.75 1.5h-6v1h6v-1z" fill={primaryFill} /></svg>;
}

const NotebookQuestionMark24Regular = wrapIcon(rawSvg({}), 'NotebookQuestionMark24Regular');
export default NotebookQuestionMark24Regular;
      
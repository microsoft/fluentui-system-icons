import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3h.19A3.25 3.25 0 0121 6.08V12.02c-.46-.3-.97-.53-1.5-.7V8h-15v9.75c0 .92.7 1.67 1.6 1.74l.15.01h5.06c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v.25h15v-.25c0-.97-.78-1.75-1.75-1.75zm-7.5 5c.38 0 .7.28.74.65l.01.1v7c0 .38-.28.7-.65.74l-.1.01h-3.5a.75.75 0 01-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01h3.5zM9.5 11h-2v5.5h2V11zm8.5-.75a.75.75 0 00-.75-.75h-4.6a.75.75 0 00.1 1.5h4.6a.75.75 0 00.65-.75zm-3.72 3.73a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.5-.52a2 2 0 012.89 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const ContentSettings24Regular = wrapIcon(rawSvg({}), 'ContentSettings24Regular');
export default ContentSettings24Regular;
      
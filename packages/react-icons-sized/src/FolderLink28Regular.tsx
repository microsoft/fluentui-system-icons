import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.25 18.5a3.75 3.75 0 01.2 7.5h-1.2a.75.75 0 01-.1-1.49h.1l1-.01a2.25 2.25 0 00.15-4.5h-1.15a.75.75 0 01-.1-1.5h1.1zm-4.5 0a.75.75 0 01.1 1.5h-1.1a2.25 2.25 0 00-.15 4.5h1.15a.75.75 0 01.1 1.5h-1.1a3.75 3.75 0 01-.2-7.5h1.2zM10.21 4c.46 0 .9.14 1.28.4l.16.12 2.37 1.98h9.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v10.59c-.4-.53-.91-.96-1.5-1.27V8.75c0-.38-.28-.7-.65-.74l-.1-.01h-9.73l-2.37 1.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v11.25c0 .38.28.7.65.74l.1.01h7.76c.02.53.14 1.03.32 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96zm12.04 17.5a.75.75 0 01.1 1.5h-5.6a.75.75 0 01-.1-1.5h5.6zm-12.04-16H4.25c-.38 0-.7.28-.74.65l-.01.1V9h6.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01z" fill={primaryFill} /></svg>;
}

const FolderLink28Regular = wrapIcon(rawSvg({}), 'FolderLink28Regular');
export default FolderLink28Regular;
      
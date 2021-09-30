import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V16h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V17h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM8.2 4c.47 0 .92.14 1.3.4l.15.12 2.37 1.98h7.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v3.06a6.52 6.52 0 00-1.5-1.08V8.75c0-.38-.28-.7-.65-.74l-.1-.01h-7.73L9.65 9.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v7.25c0 .38.28.7.65.74l.1.01h7.06c.18.53.42 1.04.71 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 17.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96zm0 1.5H4.26c-.38 0-.7.28-.74.65l-.01.1V9h4.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01z" fill={primaryFill} /></svg>;
}

const FolderAdd24Regular = wrapIcon(rawSvg({}), 'FolderAdd24Regular');
export default FolderAdd24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M36 23a10 10 0 110 20 10 10 0 010-20zm6.11 5.65L31.65 39.11a7.5 7.5 0 0010.46-10.46zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.59 2.26c.19.17.42.27.67.3l.15.01h17.31c2 0 3.64 1.57 3.74 3.55l.01.2v7.8c-.75-.67-1.6-1.25-2.5-1.72v-6.08c0-.65-.5-1.18-1.12-1.24l-.13-.01h-17.4l-2.13 2.61A3.75 3.75 0 0118.04 19l-.23.01H6.5v16.25c0 .65.5 1.18 1.12 1.24l.13.01h16.77c.27.88.63 1.72 1.09 2.5H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-22.5c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zM36 25.5a7.5 7.5 0 00-6.11 11.85l10.46-10.46A7.47 7.47 0 0036 25.5zm-18.94-14H7.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h11.31c.33 0 .64-.13.88-.36l.09-.1 1.63-2.01-2.53-2.22a1.25 1.25 0 00-.67-.3l-.15-.01z" fill={primaryFill} /></svg>;
}

const FolderProhibited48Regular = wrapIcon(rawSvg({}), 'FolderProhibited48Regular');
export default FolderProhibited48Regular;
      
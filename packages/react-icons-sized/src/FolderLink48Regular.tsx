import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.59 2.26c.19.17.42.27.67.3l.15.01h17.31c2 0 3.64 1.57 3.74 3.55l.01.2v13.54a8.06 8.06 0 00-2.5-1.96V16.25c0-.65-.5-1.18-1.12-1.24l-.13-.01h-17.4l-2.13 2.61A3.75 3.75 0 0118.04 19l-.23.01H6.5v16.25c0 .65.5 1.18 1.12 1.24l.13.01h12.34c.13.89.4 1.73.78 2.5H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-22.5c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zm0 2.5H7.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h11.31c.33 0 .64-.13.88-.36l.09-.1 1.63-2.01-2.53-2.22a1.25 1.25 0 00-.67-.3l-.15-.01zM28.25 29a6.25 6.25 0 100 12.5h1.5a1.25 1.25 0 100-2.5h-1.5a3.75 3.75 0 110-7.5h1.5a1.25 1.25 0 100-2.5h-1.5zm9.5 0a6.25 6.25 0 110 12.5h-1.5a1.25 1.25 0 110-2.5h1.5a3.75 3.75 0 100-7.5h-1.5a1.25 1.25 0 110-2.5h1.5zM27 35.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const FolderLink48Regular = wrapIcon(rawSvg({}), 'FolderLink48Regular');
export default FolderLink48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.59 2.26c.19.17.42.27.67.3l.15.01h17.31c2 0 3.64 1.57 3.74 3.55l.01.2v7.8c-.75-.67-1.6-1.25-2.5-1.72v-6.08c0-.65-.5-1.18-1.12-1.24l-.13-.01h-17.4l-2.13 2.61A3.75 3.75 0 0118.04 19l-.23.01H6.5v16.25c0 .65.5 1.18 1.12 1.24l.13.01h16.77c.27.88.63 1.72 1.09 2.5H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-22.5c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zm0 2.5H7.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h11.31c.33 0 .64-.13.88-.36l.09-.1 1.63-2.01-2.53-2.22a1.25 1.25 0 00-.67-.3l-.15-.01zM36 23a10 10 0 110 20 10 10 0 010-20zm0 4.63l-.11.08-.1.08-.08.1a1 1 0 000 1.22l.08.1L38.6 32h-7.71a1 1 0 00-.87.88L30 33v.12a1 1 0 00.88.87L31 34h7.59l-2.8 2.8-.08.09a1 1 0 001.4 1.4l.1-.08 4.5-4.5.05-.06.07-.1.05-.07.03-.06.04-.1.02-.09.02-.11L42 33v-.08l-.02-.12-.03-.11-.02-.06-.05-.11-.05-.08-.04-.06-.04-.04-.04-.05-4.5-4.5-.1-.08a1 1 0 00-1.11-.08z" fill={primaryFill} /></svg>;
}

const FolderArrowRight48Regular = wrapIcon(rawSvg({}), 'FolderArrowRight48Regular');
export default FolderArrowRight48Regular;
      
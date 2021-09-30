import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 5.25A2.75 2.75 0 015.25 2.5h9.5a2.75 2.75 0 012.75 2.75v4.64c-.46-.3-.96-.53-1.5-.68V7H4v7.75c0 .69.56 1.25 1.25 1.25h3.96c.15.54.38 1.04.68 1.5H5.25a2.75 2.75 0 01-2.75-2.75v-9.5zM9 14.5v-6a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h3a.5.5 0 00.5-.5zM6 14V9h2v5H6zm4-5.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm2.07 2.94a2 2 0 01-1.43 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ContentSettings20Filled = wrapIcon(rawSvg({}), 'ContentSettings20Filled');
export default ContentSettings20Filled;
      
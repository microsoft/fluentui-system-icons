import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.83 12.5h15.42c2 0 3.64 1.57 3.74 3.55l.01.2v13.54A7.88 7.88 0 0038 27H28c-4.42 0-8 3.7-8 8.25 0 1.35.31 2.62.87 3.75H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zm11.19 20a6.25 6.25 0 100 12.5h1.5a1.25 1.25 0 100-2.5h-1.5a3.75 3.75 0 110-7.5h1.5a1.25 1.25 0 100-2.5h-1.5zm9.5 0a6.25 6.25 0 110 12.5h-1.5a1.25 1.25 0 110-2.5h1.5a3.75 3.75 0 100-7.5h-1.5a1.25 1.25 0 110-2.5h1.5zM27 35.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const FolderLink48Filled = wrapIcon(rawSvg({}), 'FolderLink48Filled');
export default FolderLink48Filled;
      
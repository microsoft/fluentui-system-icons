import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3H12a2 2 0 012 2v1.34c-.26-.38-.6-.7-1-.94V5a1 1 0 00-1-1H7.6L6.08 5.37a.5.5 0 01-.34.13H3V10a1 1 0 001 1h3.47c-.22.29-.38.63-.44 1H4a2 2 0 01-2-2zm2-7a1 1 0 00-1 1v.5h2.56l.88-.8-.87-.7H4zm7.5 7a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const FolderPerson16Regular = wrapIcon(rawSvg({}), 'FolderPerson16Regular');
export default FolderPerson16Regular;
      
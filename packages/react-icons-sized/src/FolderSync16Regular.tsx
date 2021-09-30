import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3H12a2 2 0 012 2v1.26a5.5 5.5 0 00-1-.66V5a1 1 0 00-1-1H7.6L6.08 5.37a.5.5 0 01-.34.13H3V10a1 1 0 001 1h1.02c.03.34.1.68.19 1H4a2 2 0 01-2-2zm2-7a1 1 0 00-1 1v.5h2.56l.88-.8-.87-.7H4zm6.5 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 8v.15a3 3 0 00-3.62.48.5.5 0 00.7.7A2 2 0 0111.48 9H11a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V8a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H10a.5.5 0 000-1H8.5a.5.5 0 00-.5.5V13a.5.5 0 001 0v-.15a3.02 3.02 0 001.45.4z" fill={primaryFill} /></svg>;
}

const FolderSync16Regular = wrapIcon(rawSvg({}), 'FolderSync16Regular');
export default FolderSync16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3H12a2 2 0 012 2v1.26a5.5 5.5 0 00-1-.66V5a1 1 0 00-1-1H7.6L6.08 5.37a.5.5 0 01-.34.13H3V10a1 1 0 001 1h1.02c.03.34.1.68.19 1H4a2 2 0 01-2-2zm2-7a1 1 0 00-1 1v.5h2.56l.88-.8-.87-.7H4zm7.36 10.98a8.3 8.3 0 00.63-2.98H9c.05 1.2.3 2.24.63 2.98.42.92.8 1.02.86 1.02.06 0 .44-.1.86-1.02zm-2.47.72A4.5 4.5 0 016.03 11H8c.06 1.48.39 2.8.88 3.7zM6.03 10H8c.06-1.48.39-2.8.88-3.7A4.5 4.5 0 006.03 10zm4.47-4c-.06 0-.44.1-.86 1.02A8.3 8.3 0 009.01 10H12a8.3 8.3 0 00-.63-2.98C10.94 6.1 10.56 6 10.5 6zm1.61.3c1.54.59 2.67 2 2.86 3.7H13a8.83 8.83 0 00-.88-3.7zm2.86 4.7a4.5 4.5 0 01-2.86 3.7c.5-.9.82-2.22.88-3.7h1.98z" fill={primaryFill} /></svg>;
}

const FolderGlobe16Regular = wrapIcon(rawSvg({}), 'FolderGlobe16Regular');
export default FolderGlobe16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.05 3A2.5 2.5 0 015.5 1H12a3 3 0 013 3v3.34c-.28-.4-.62-.77-1-1.08V4a2 2 0 00-2-2H5.5c-.65 0-1.2.42-1.41 1H11a2 2 0 012 2v.6c-.32-.16-.65-.3-1-.4V5a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v2.03l1.56-1.11c.15.3.32.58.52.85l-1.5 1.07A1 1 0 013 14.03V13a2 2 0 01-2-2V5c0-1.1.9-2 2-2h.05zM15 10.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark16Regular = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark16Regular');
export default CommentMultipleCheckmark16Regular;
      
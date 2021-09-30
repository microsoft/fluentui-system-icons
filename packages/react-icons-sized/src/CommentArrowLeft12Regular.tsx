import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1.5.5a.5.5 0 000-1H7.7l.65-.65a.5.5 0 10-.7-.7l-1.5 1.5A.5.5 0 006 3.5a.5.5 0 00.15.35l1.5 1.5a.5.5 0 10.7-.7L7.71 4h2.79z" fill={primaryFill} /><path d="M3 2h1.26c.12-.36.3-.7.5-1H3a2 2 0 00-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 00.78.42L6.65 9H9a2 2 0 001.98-1.75c-.46.31-.99.54-1.55.65A1 1 0 019 8H6.5a.5.5 0 00-.28.08L4 9.57V8.5a.5.5 0 00-.5-.5H3a1 1 0 01-1-1V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const CommentArrowLeft12Regular = wrapIcon(rawSvg({}), 'CommentArrowLeft12Regular');
export default CommentArrowLeft12Regular;
      
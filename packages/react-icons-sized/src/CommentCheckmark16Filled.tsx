import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M10.5 11A5.5 5.5 0 0015 8.66v.84a2.5 2.5 0 01-2.5 2.5H8.69l-3.06 2.68A.98.98 0 014 13.94V12h-.5A2.5 2.5 0 011 9.5v-5A2.5 2.5 0 013.5 2h2.76a5.5 5.5 0 004.24 9z" fill={primaryFill} /></svg>;
}

const CommentCheckmark16Filled = wrapIcon(rawSvg({}), 'CommentCheckmark16Filled');
export default CommentCheckmark16Filled;
      
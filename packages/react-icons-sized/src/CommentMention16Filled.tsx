import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2a2.5 2.5 0 10.83 4.85.5.5 0 11.34.94A3.5 3.5 0 1115 4.5a1.5 1.5 0 01-2.5 1.13 1.5 1.5 0 11-.35-2.47.5.5 0 01.85.35v1a.5.5 0 001 0A2.5 2.5 0 0011.5 2zM11 4.5a.5.5 0 101 0 .5.5 0 00-1 0z" fill={primaryFill} /><path d="M3.5 2h4.26A4.5 4.5 0 0015 7.33V9.5a2.5 2.5 0 01-2.5 2.5H8.69l-3.06 2.68A.98.98 0 014 13.94V12h-.5A2.5 2.5 0 011 9.5v-5A2.5 2.5 0 013.5 2z" fill={primaryFill} /></svg>;
}

const CommentMention16Filled = wrapIcon(rawSvg({}), 'CommentMention16Filled');
export default CommentMention16Filled;
      
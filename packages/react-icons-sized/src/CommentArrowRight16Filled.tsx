import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0013 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L11.29 5H8.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M10.5 11A5.5 5.5 0 0015 8.66v.84a2.5 2.5 0 01-2.5 2.5H8.69l-3.06 2.68A.98.98 0 014 13.94V12h-.5A2.5 2.5 0 011 9.5v-5A2.5 2.5 0 013.5 2h2.76a5.5 5.5 0 004.24 9z" fill={primaryFill} /></svg>;
}

const CommentArrowRight16Filled = wrapIcon(rawSvg({}), 'CommentArrowRight16Filled');
export default CommentArrowRight16Filled;
      
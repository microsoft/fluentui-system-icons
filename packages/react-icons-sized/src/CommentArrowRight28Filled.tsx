import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM16.5 7a.5.5 0 000 1h6.8l-2.15 2.15a.5.5 0 00.7.7l3-3A.5.5 0 0025 7.5a.5.5 0 00-.15-.35l-3-3a.5.5 0 00-.7.7L23.29 7H16.5z" fill={primaryFill} /><path d="M20.5 15c2.17 0 4.13-.92 5.5-2.4v4.65A3.75 3.75 0 0122.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 012 17.25V6.75A3.75 3.75 0 015.75 3h8.75a7.5 7.5 0 006 12z" fill={primaryFill} /></svg>;
}

const CommentArrowRight28Filled = wrapIcon(rawSvg({}), 'CommentArrowRight28Filled');
export default CommentArrowRight28Filled;
      
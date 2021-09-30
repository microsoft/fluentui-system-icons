import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.5.5a.5.5 0 000-1h-4.8l1.65-1.65a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L19.71 7h4.79z" fill={primaryFill} /><path d="M21.5 13c1.75 0 3.33-.69 4.5-1.81v6.06A3.75 3.75 0 0122.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 012 17.25V6.75A3.75 3.75 0 015.75 3h10.27a6.5 6.5 0 005.48 10z" fill={primaryFill} /></svg>;
}

const CommentArrowLeft28Filled = wrapIcon(rawSvg({}), 'CommentArrowLeft28Filled');
export default CommentArrowLeft28Filled;
      
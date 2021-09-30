import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 12l2.85 2.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l.73.74A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h2.6zm-1-1H8.3L5 13.9V11H3.5A1.5 1.5 0 012 9.5v-5c0-.49.23-.92.6-1.2l7.7 7.7z" fill={primaryFill} /><path d="M14 9.5c0 .64-.4 1.2-.97 1.4l.74.75A2.5 2.5 0 0015 9.5v-5A2.5 2.5 0 0012.5 2H4.12l1 1h7.38c.83 0 1.5.67 1.5 1.5v5z" fill={primaryFill} /></svg>;
}

const CommentOff16Regular = wrapIcon(rawSvg({}), 'CommentOff16Regular');
export default CommentOff16Regular;
      
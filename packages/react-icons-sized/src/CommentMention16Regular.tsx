import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2a2.5 2.5 0 10.83 4.85.5.5 0 11.34.94A3.5 3.5 0 1115 4.5a1.5 1.5 0 01-2.5 1.13 1.5 1.5 0 11-.35-2.47.5.5 0 01.85.35v1a.5.5 0 001 0A2.5 2.5 0 0011.5 2zM11 4.5a.5.5 0 101 0 .5.5 0 00-1 0z" fill={primaryFill} /><path d="M15 9.5V7.33c-.29.35-.62.66-1 .91V9.5c0 .83-.67 1.5-1.5 1.5H8.31L5 13.9V11H3.5A1.5 1.5 0 012 9.5v-5C2 3.67 2.67 3 3.5 3h3.76c.12-.36.3-.7.5-1H3.5A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0015 9.5z" fill={primaryFill} /></svg>;
}

const CommentMention16Regular = wrapIcon(rawSvg({}), 'CommentMention16Regular');
export default CommentMention16Regular;
      
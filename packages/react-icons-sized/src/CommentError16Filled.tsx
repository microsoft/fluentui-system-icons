import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 8.66A5.5 5.5 0 116.26 2H3.5A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0015 9.5v-.84zM10.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM10 3.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm1.13 4a.62.62 0 11-1.25 0 .62.62 0 011.24 0z" fill={primaryFill} /></svg>;
}

const CommentError16Filled = wrapIcon(rawSvg({}), 'CommentError16Filled');
export default CommentError16Filled;
      
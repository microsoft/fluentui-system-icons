import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2a3 3 0 101.28 5.71.5.5 0 01.44.9A4 4 0 1119 5v.51a1.5 1.5 0 01-2.65.97A2 2 0 0113 5a2 2 0 013.04-1.7.5.5 0 01.96.2v2a.5.5 0 101 0V5a3 3 0 00-3-3zm-1 3a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /><path d="M18 12.28V9a5 5 0 01-1 .58v2.7c0 .85-.7 1.56-1.6 1.56h-4.92L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57C3 4.7 3.7 4 4.6 4h5.5c.07-.35.18-.68.32-1H4.6A2.58 2.58 0 002 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 001.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56z" fill={primaryFill} /></svg>;
}

const CommentMention20Regular = wrapIcon(rawSvg({}), 'CommentMention20Regular');
export default CommentMention20Regular;
      
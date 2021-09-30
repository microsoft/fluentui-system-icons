import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-2.48a6.52 6.52 0 001.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 01-2-1V18h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5h-.09a.5.5 0 00-.4.41L17 3v3H13.9a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 7h3v3.09c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41L18 10V7h3.09a.5.5 0 00.4-.41l.01-.09v-.09a.5.5 0 00-.41-.4L21 6h-3V2.91a.5.5 0 00-.41-.4l-.09-.01z" fill={primaryFill} /></svg>;
}

const CommentAdd24Regular = wrapIcon(rawSvg({}), 'CommentAdd24Regular');
export default CommentAdd24Regular;
      
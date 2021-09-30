import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM18.53 3H17.1a.5.5 0 00-.47.32l-1.13 3a.5.5 0 00.47.68h.78l-.77 2.32a.52.52 0 00.92.44l2.63-4.03a.47.47 0 00-.4-.73h-.63l.5-1.32a.5.5 0 00-.47-.68zm1.97 11.75v-2.48a6.52 6.52 0 001.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 01-2-1V18h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75z" fill={primaryFill} /></svg>;
}

const CommentLightning24Regular = wrapIcon(rawSvg({}), 'CommentLightning24Regular');
export default CommentLightning24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.7.7A3.24 3.24 0 002 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 002 1L13 18h3.93l3.78 3.78a.75.75 0 001.06-1.06L3.28 2.22zM15.44 16.5H12.5L7.5 20.25V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.47.18-.9.48-1.2L15.44 16.5z" fill={primaryFill} /><path d="M20.5 14.75c0 .7-.4 1.3-1 1.58l1.1 1.1a3.25 3.25 0 001.4-2.68v-8.5C22 4.45 20.54 3 18.75 3H6.18l1.5 1.5h11.07c.97 0 1.75.78 1.75 1.75v8.5z" fill={primaryFill} /></svg>;
}

const CommentOff24Regular = wrapIcon(rawSvg({}), 'CommentOff24Regular');
export default CommentOff24Regular;
      
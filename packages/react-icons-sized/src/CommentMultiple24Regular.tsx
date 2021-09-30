import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5c.13-1.67 1.54-3 3.25-3h9A4.75 4.75 0 0122 6.75v6a3.25 3.25 0 01-3 3.24A3.25 3.25 0 0115.74 19h-5.08L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 01-3-3.24v-7.5a3.25 3.25 0 013-3.24zm1.52 0h9.23C17.55 5 19 6.46 19 8.25v6.23c.85-.12 1.5-.85 1.5-1.73v-6c0-1.8-1.46-3.25-3.25-3.25h-9c-.88 0-1.61.65-1.73 1.5zM5.25 17.5H6.5v2.75l3.67-2.75h5.58c.97 0 1.75-.78 1.75-1.75v-7.5c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75z" fill={primaryFill} /></svg>;
}

const CommentMultiple24Regular = wrapIcon(rawSvg({}), 'CommentMultiple24Regular');
export default CommentMultiple24Regular;
      
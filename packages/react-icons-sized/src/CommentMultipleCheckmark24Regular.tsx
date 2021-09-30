import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5c.13-1.67 1.54-3 3.25-3h9A4.75 4.75 0 0122 6.75v6.06a6.52 6.52 0 00-1.5-1.08V6.75c0-1.8-1.46-3.25-3.25-3.25h-9c-.88 0-1.61.65-1.73 1.5h9.23C17.55 5 19 6.46 19 8.25v2.92a6.52 6.52 0 00-1.5-.17V8.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75H6.5v2.75l3.67-2.75H11c0 .52.06 1.02.17 1.5h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 01-3-3.24v-7.5a3.25 3.25 0 013-3.24zm18 12.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-2.15-2.35c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark24Regular = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark24Regular');
export default CommentMultipleCheckmark24Regular;
      
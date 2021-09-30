import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6.01v-.25a3.75 3.75 0 013.75-3.75h10.5A5.75 5.75 0 0126 7.76v6.99a3.75 3.75 0 01-3.75 3.75H22v.25a3.75 3.75 0 01-3.75 3.75h-6l-4.24 3.23c-.83.63-2.01.05-2.01-.99V22.5h-.25A3.75 3.75 0 012 18.75V9.76a3.75 3.75 0 013.75-3.75H6zm1.5-.25v.25h10.75A3.75 3.75 0 0122 9.76V17h.25c1.24 0 2.25-1 2.25-2.25V7.76c0-2.35-1.9-4.25-4.25-4.25H9.75c-1.24 0-2.25 1-2.25 2.25zm-4 4v8.99c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75v2.49l4.05-3.09c.13-.1.29-.15.45-.15h6.25c1.24 0 2.25-1 2.25-2.25V9.76c0-1.24-1-2.25-2.25-2.25H5.75c-1.24 0-2.25 1-2.25 2.25z" fill={primaryFill} /></svg>;
}

const CommentMultiple28Regular = wrapIcon(rawSvg({}), 'CommentMultiple28Regular');
export default CommentMultiple28Regular;
      
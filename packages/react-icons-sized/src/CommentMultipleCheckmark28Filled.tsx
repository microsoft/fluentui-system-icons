import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 20.5c0 .7.1 1.36.27 2h-1.02l-4.24 3.23c-.83.63-2.01.04-2.01-.99V22.5h-.25A3.75 3.75 0 012 18.75V9.76a3.75 3.75 0 013.75-3.75h12.5A3.75 3.75 0 0122 9.76v3.39a7.5 7.5 0 00-9 7.35zM25.25 7.76v6.94A7.49 7.49 0 0023 13.43V9.76a4.75 4.75 0 00-4.75-4.75H6.85a3 3 0 012.9-2.25h10.5a5 5 0 015 5zM27 20.5a6.5 6.5 0 10-13 0 6.5 6.5 0 0013 0zm-2.65-2.85c.2.2.2.5 0 .7l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L19 22.29l4.65-4.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark28Filled = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark28Filled');
export default CommentMultipleCheckmark28Filled;
      
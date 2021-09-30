import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 5.76c0-1.24 1-2.25 2.25-2.25h10.5c2.35 0 4.25 1.9 4.25 4.25v6.4c.53.33 1.02.73 1.45 1.19.03-.2.05-.4.05-.6V7.76a5.75 5.75 0 00-5.75-5.75H9.75A3.75 3.75 0 006 5.76v.25h-.25A3.75 3.75 0 002 9.76v8.99a3.75 3.75 0 003.75 3.75H6v2.24a1.25 1.25 0 002 1l4.25-3.24h1.02a7.48 7.48 0 01-.25-1.5H12a.75.75 0 00-.45.15L7.5 24.24v-2.49a.75.75 0 00-.75-.75h-1c-1.24 0-2.25-1-2.25-2.25V9.76c0-1.24 1-2.25 2.25-2.25h12.5c1.24 0 2.25 1 2.25 2.25V13c.51 0 1.02.05 1.5.15V9.76a3.75 3.75 0 00-3.75-3.75H7.5v-.25zM27 20.5a6.5 6.5 0 10-13 0 6.5 6.5 0 0013 0zm-2.65-2.85c.2.2.2.5 0 .7l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L19 22.29l4.65-4.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark28Regular = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark28Regular');
export default CommentMultipleCheckmark28Regular;
      
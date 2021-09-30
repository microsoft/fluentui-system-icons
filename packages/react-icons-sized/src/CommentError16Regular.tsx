import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.6 3H3.5C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H5v2.9L8.31 11h4.19a1.5 1.5 0 001.48-1.24c.39-.32.73-.69 1.02-1.1v.84a2.5 2.5 0 01-2.5 2.5H8.69l-3.06 2.68A.98.98 0 014 13.94V12h-.5A2.5 2.5 0 011 9.5v-5A2.5 2.5 0 013.5 2h2.76c-.26.3-.48.64-.66 1zm4.9 7a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM10 3.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm1.13 4a.62.62 0 11-1.25 0 .62.62 0 011.24 0z" fill={primaryFill} /></svg>;
}

const CommentError16Regular = wrapIcon(rawSvg({}), 'CommentError16Regular');
export default CommentError16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.65-2.85a.5.5 0 00-.7 0L19 9.29l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 000-.7z" fill={primaryFill} /><path d="M24.5 17.25v-3.4A7.54 7.54 0 0026 12.6v4.65A3.75 3.75 0 0122.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 012 17.25V6.75A3.75 3.75 0 015.75 3h8.75c-.35.46-.64.96-.88 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25z" fill={primaryFill} /></svg>;
}

const CommentCheckmark28Regular = wrapIcon(rawSvg({}), 'CommentCheckmark28Regular');
export default CommentCheckmark28Regular;
      
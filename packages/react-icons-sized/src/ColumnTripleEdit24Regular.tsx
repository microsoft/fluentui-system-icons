import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65zm0 1.5H3.68a.25.25 0 00-.2.25v14.5c0 .14.12.25.26.25h2.5c.14 0 .25-.11.25-.25V4.75a.25.25 0 00-.25-.25zM20.26 3c.97 0 1.75.78 1.75 1.75v6.52c-.47-.2-.99-.3-1.5-.26V4.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25v8.1l-1.5 1.5v-9.6c0-.97.79-1.75 1.75-1.75h2.5zm.25 16.14l1.5-1.5v1.61c0 .97-.78 1.75-1.75 1.75h-1.61l1.5-1.5h.11c.14 0 .25-.11.25-.25v-.11zM15 4.75v10.62l-1.5 1.5V4.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25v14.5c0 .14.1.25.25.25h.8l-.02.08-.35 1.42h-.43c-.97 0-1.75-.78-1.75-1.75V4.75c0-.97.78-1.75 1.75-1.75h2.5c.96 0 1.75.78 1.75 1.75zm4.11 7.92l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
}

const ColumnTripleEdit24Regular = wrapIcon(rawSvg({}), 'ColumnTripleEdit24Regular');
export default ColumnTripleEdit24Regular;
      
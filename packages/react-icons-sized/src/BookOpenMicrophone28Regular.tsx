import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4c1 0 1.9.46 2.5 1.17.6-.71 1.5-1.17 2.5-1.17h7.75c.97 0 1.75.78 1.75 1.75V16.5a4 4 0 00-1.5-3.12V5.75a.25.25 0 00-.25-.25H16.5c-.97 0-1.75.78-1.75 1.75v13.5c0 .78.51 1.44 1.21 1.67.23.57.54 1.1.92 1.58h-.38c-1 0-1.9-.46-2.5-1.17-.6.71-1.5 1.17-2.5 1.17H3.75C2.78 24 2 23.22 2 22.25V5.75C2 4.78 2.78 4 3.75 4h7.75zm1.75 16.75V7.25c0-.97-.78-1.75-1.75-1.75H3.75a.25.25 0 00-.25.25v16.5c0 .14.11.25.25.25h7.75c.97 0 1.75-.78 1.75-1.75zm4.42 1.75A4.98 4.98 0 0117 20a.5.5 0 011 0 3.98 3.98 0 003.59 3.98 4.05 4.05 0 00.81 0h.01l.19-.02A4 4 0 0026 20a.5.5 0 011 0 5 5 0 01-4.5 5v1.5a.5.5 0 01-1 0V25v-.02a4.97 4.97 0 01-3.83-2.48zM22 14a2.5 2.5 0 00-2.5 2.5V20a2.5 2.5 0 005 0v-3.5A2.5 2.5 0 0022 14z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone28Regular = wrapIcon(rawSvg({}), 'BookOpenMicrophone28Regular');
export default BookOpenMicrophone28Regular;
      
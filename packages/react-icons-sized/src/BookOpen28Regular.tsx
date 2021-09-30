import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4c1 0 1.9.46 2.5 1.17.6-.71 1.5-1.17 2.5-1.17h7.75c.97 0 1.75.78 1.75 1.75v16.5c0 .97-.78 1.75-1.75 1.75H16.5c-1 0-1.9-.46-2.5-1.17-.6.71-1.5 1.17-2.5 1.17H3.75C2.78 24 2 23.22 2 22.25V5.75C2 4.78 2.78 4 3.75 4h7.75zm1.75 16.75V7.25c0-.97-.78-1.75-1.75-1.75H3.75a.25.25 0 00-.25.25v16.5c0 .14.11.25.25.25h7.75c.97 0 1.75-.78 1.75-1.75zm1.5-13.5v13.5c0 .97.78 1.75 1.75 1.75h7.75c.14 0 .25-.11.25-.25V5.75a.25.25 0 00-.25-.25H16.5c-.97 0-1.75.78-1.75 1.75z" fill={primaryFill} /></svg>;
}

const BookOpen28Regular = wrapIcon(rawSvg({}), 'BookOpen28Regular');
export default BookOpen28Regular;
      
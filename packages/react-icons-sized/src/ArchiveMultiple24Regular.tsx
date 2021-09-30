import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 10.5a.75.75 0 000 1.5h3.48a.75.75 0 000-1.5H9.75zm-5-8.5C3.78 2 3 2.78 3 3.75v2.5c0 .7.4 1.3 1 1.58v7.92a3.75 3.75 0 003.75 3.75h7.5A3.75 3.75 0 0019 15.75V7.83c.6-.28 1-.88 1-1.58v-2.5C20 2.78 19.22 2 18.25 2H4.75zm.75 13.75V8h12v7.75c0 1.24-1 2.25-2.25 2.25h-7.5c-1.24 0-2.25-1-2.25-2.25zm-1-12c0-.14.11-.25.25-.25h13.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25H4.75a.25.25 0 01-.25-.25v-2.5zm17 8c0-1.23-.59-2.32-1.5-3v7.5c0 2.35-1.9 4.25-4.25 4.25h-8.5c.68.91 1.77 1.5 3 1.5h5.5a5.75 5.75 0 005.75-5.75v-4.5z" fill={primaryFill} /></svg>;
}

const ArchiveMultiple24Regular = wrapIcon(rawSvg({}), 'ArchiveMultiple24Regular');
export default ArchiveMultiple24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2C3.78 2 3 2.78 3 3.75v1.5C3 6.22 3.78 7 4.75 7h13.5C19.22 7 20 6.22 20 5.25v-1.5C20 2.78 19.22 2 18.25 2H4.75zM19 8H4v7.75a3.75 3.75 0 003.75 3.75h7.5A3.75 3.75 0 0019 15.75V8zM9 11.25c0-.41.34-.75.75-.75h3.48a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75zm12.5.5c0-1.23-.59-2.32-1.5-3v7.5c0 2.35-1.9 4.25-4.25 4.25h-8.5c.68.91 1.77 1.5 3 1.5h5.5a5.75 5.75 0 005.75-5.75v-4.5z" fill={primaryFill} /></svg>;
}

const ArchiveMultiple24Filled = wrapIcon(rawSvg({}), 'ArchiveMultiple24Filled');
export default ArchiveMultiple24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3.5c1.8 0 3.25 1.46 3.25 3.25v10.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.25V6.75C2 4.95 3.46 3.5 5.25 3.5h13.5zm0 1.5H5.25c-.97 0-1.75.78-1.75 1.75v10.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75V6.75c0-.97-.78-1.75-1.75-1.75zM8.01 8.87c.6 0 1.02.08 1.5.32a.62.62 0 01-.53 1.12c-.3-.14-.54-.19-.97-.19-.86 0-1.5.8-1.5 1.87 0 1.08.64 1.88 1.5 1.88.43 0 .8-.18.98-.5l.01-.01v-.74h-.37A.63.63 0 018 12.1l-.01-.1c0-.3.23-.57.53-.61h1.1c.31 0 .57.22.61.52l.01.1v1.6l-.03.09-.02.05a2.3 2.3 0 01-2.19 1.38c-1.62 0-2.75-1.41-2.75-3.13 0-1.7 1.13-3.12 2.75-3.12zm4.62.12c.31 0 .57.24.62.54v4.85a.62.62 0 01-1.24.1V9.61c0-.35.27-.63.62-.63zm3 0l2 .01a.63.63 0 01.08 1.24l-.1.01h-1.36V12h1.12c.31 0 .57.23.62.53v.1c0 .31-.23.57-.53.61l-.09.01h-1.12v1.12c0 .3-.23.57-.54.61l-.09.01a.63.63 0 01-.62-.53V9.62c0-.32.23-.58.53-.62h.1z" fill={primaryFill} /></svg>;
}

const Gif24Regular = wrapIcon(rawSvg({}), 'Gif24Regular');
export default Gif24Regular;
      
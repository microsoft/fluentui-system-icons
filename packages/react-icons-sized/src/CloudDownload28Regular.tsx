import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 10a6.5 6.5 0 0112.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 00-2.37-1.4 3.24 3.24 0 00-2.29-.93h-1a.75.75 0 01-.75-.75v-.25a5 5 0 00-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 000 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 110-9.5h.27zM27 19.5a6.5 6.5 0 10-13 0 6.5 6.5 0 0013 0zm-7-4a.5.5 0 011 0v6.8l2.15-2.15a.5.5 0 01.7.7l-3 3a.5.5 0 01-.35.15.5.5 0 01-.35-.15l-3-3a.5.5 0 01.7-.7L20 22.29V15.5z" fill={primaryFill} /></svg>;
}

const CloudDownload28Regular = wrapIcon(rawSvg({}), 'CloudDownload28Regular');
export default CloudDownload28Regular;
      
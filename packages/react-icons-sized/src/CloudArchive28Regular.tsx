import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 10a6.5 6.5 0 0112.96 0h.27a4.75 4.75 0 014.7 4H23.9a3.25 3.25 0 00-3.16-2.5h-1a.75.75 0 01-.75-.75v-.25a5 5 0 00-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 000 6.5h6.02a2 2 0 00.73.73v.77H7.25a4.75 4.75 0 110-9.5h.27zM14 16a1 1 0 011-1h11a1 1 0 011 1v1a1 1 0 01-1 1H15a1 1 0 01-1-1v-1zm12 3H15v5a3 3 0 003 3h5a3 3 0 003-3v-5zm-7.5 2h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudArchive28Regular = wrapIcon(rawSvg({}), 'CloudArchive28Regular');
export default CloudArchive28Regular;
      
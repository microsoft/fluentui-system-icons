import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 11a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM6 16.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm9.75-.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM14 6a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5h13.5a4.75 4.75 0 100-9.5h-.27A6.5 6.5 0 0014 6zm-5 6.5a5 5 0 0110 0v.25c0 .41.34.75.75.75h1a3.25 3.25 0 010 6.5H7.25a3.25 3.25 0 010-6.5h1c.41 0 .75-.34.75-.75v-.25z" fill={primaryFill} /></svg>;
}

const CloudWords28Regular = wrapIcon(rawSvg({}), 'CloudWords28Regular');
export default CloudWords28Regular;
      
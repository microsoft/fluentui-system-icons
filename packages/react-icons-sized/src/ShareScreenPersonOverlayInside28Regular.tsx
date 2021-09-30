import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 7C5.67 7 5 7.67 5 8.5v4c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5zM21 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-7 5v.25C14 18.1 15.9 20 18.25 20h.5C21.1 20 23 18.1 23 15.75v-.25c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5zM5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75zM3.5 7.75c0-1.24 1.01-2.25 2.25-2.25h16.5c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H5.75c-1.24 0-2.25-1-2.25-2.25V7.75z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside28Regular = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside28Regular');
export default ShareScreenPersonOverlayInside28Regular;
      
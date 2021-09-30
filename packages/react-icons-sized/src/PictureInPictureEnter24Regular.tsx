import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25V12h-1.5V6.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 012 15.75v-9.5zM14 13a2 2 0 00-2 2v5c0 1.1.9 2 2 2h7a2 2 0 002-2v-5a2 2 0 00-2-2h-7zM5.22 6.22c.3-.3.77-.3 1.06 0L9.5 9.44V7.75a.75.75 0 011.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 010-1.5h1.69L5.22 7.28a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const PictureInPictureEnter24Regular = wrapIcon(rawSvg({}), 'PictureInPictureEnter24Regular');
export default PictureInPictureEnter24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM2 5.25C2 3.45 3.46 2 5.25 2h9c1.8 0 3.25 1.46 3.25 3.25v9c0 1.8-1.46 3.25-3.25 3.25h-9A3.25 3.25 0 012 14.25v-9zM5.25 3.5c-.97 0-1.75.78-1.75 1.75v9c0 .23.04.45.13.65l4.58-4.29c.87-.8 2.21-.8 3.08 0l4.58 4.3c.09-.2.13-.43.13-.66v-9c0-.97-.78-1.75-1.75-1.75h-9zm9.52 12.42l-4.5-4.21a.75.75 0 00-1.03 0l-4.5 4.21c.16.05.33.08.51.08h9c.18 0 .35-.03.52-.08zM6.5 18.75v-.25h8a4 4 0 004-4v-8h.25c1.8 0 3.25 1.46 3.25 3.25v7c0 2.9-2.35 5.25-5.25 5.25h-7a3.25 3.25 0 01-3.25-3.25z" fill={primaryFill} /></svg>;
}

const ImageShadow24Regular = wrapIcon(rawSvg({}), 'ImageShadow24Regular');
export default ImageShadow24Regular;
      
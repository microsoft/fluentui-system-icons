import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 13.44l.15.15 5.83 5.87.01-.08.01-.13v-5.5a.75.75 0 011.5-.1v5.6A2.75 2.75 0 0119.42 22h-5.67a.75.75 0 01-.1-1.5h5.75l-5.8-5.85a2.25 2.25 0 00-3.06-.12l-.13.12-5.86 5.83.07.01.13.01h5.6a.75.75 0 010 1.5H4.58a2.75 2.75 0 01-2.57-2.57L2 19.25v-5.6a.75.75 0 011.5 0v5.75l5.85-5.81a3.75 3.75 0 015.15-.15zm1.52-7.43a2 2 0 110 4.02 2 2 0 010-4.02zM10.25 2a.75.75 0 01.1 1.5h-5.6c-.65 0-1.18.5-1.24 1.12l-.01.13v5.5a.75.75 0 01-1.5.1v-5.6A2.75 2.75 0 014.58 2h5.67zm9 0h.17a2.75 2.75 0 012.57 2.57l.01.18v5.6a.75.75 0 01-1.5 0V4.62a1.25 1.25 0 00-1.12-1.11l-.13-.01h-5.6a.75.75 0 010-1.5h5.6zM16.02 7.5a.5.5 0 100 1.02.5.5 0 000-1.02z" fill={primaryFill} /></svg>;
}

const Wallpaper24Regular = wrapIcon(rawSvg({}), 'Wallpaper24Regular');
export default Wallpaper24Regular;
      
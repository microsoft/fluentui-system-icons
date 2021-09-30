import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 9v4c0 .9-.66 1.53-1.35 1.9a5.7 5.7 0 01-2.65.6c-1 0-1.94-.22-2.65-.6-.7-.37-1.35-1-1.35-1.9V9c0-.9.66-1.53 1.35-1.9a5.7 5.7 0 012.65-.6c1 0 1.94.22 2.65.6.7.37 1.35 1 1.35 1.9zm-5.94-.58c-.5.27-.56.5-.56.58 0 .08.07.31.56.58.46.24 1.14.42 1.94.42s1.48-.18 1.94-.42c.5-.27.56-.5.56-.58 0-.08-.07-.31-.56-.58A4.21 4.21 0 0012.5 8c-.8 0-1.48.18-1.94.42zM15 10.98c-.7.33-1.57.52-2.5.52-.93 0-1.8-.19-2.5-.52V13c0 .08.07.31.56.58.46.24 1.14.42 1.94.42s1.48-.18 1.94-.42c.5-.27.56-.5.56-.58v-2.02z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zM5.5 18H19V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1V18z" fill={primaryFill} /></svg>;
}

const BookDatabase24Regular = wrapIcon(rawSvg({}), 'BookDatabase24Regular');
export default BookDatabase24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v6.88c0 .6-.24 1.17-.66 1.59l-5.62 5.62c-.42.42-1 .66-1.6.66H6.26A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H13v-3.06c-.22.03-.45.05-.67.06l-.33.01a6.33 6.33 0 01-3.68-1.14.75.75 0 11.86-1.23 5.05 5.05 0 004.15.7 3.25 3.25 0 012.7-1.83l.22-.01h3.25V6.25c0-.97-.78-1.75-1.75-1.75zm.69 10h-2.19c-.92 0-1.67.7-1.74 1.6v.15l-.01 2.19 3.94-3.94zM9 7.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm6 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Sticker24Regular = wrapIcon(rawSvg({}), 'Sticker24Regular');
export default Sticker24Regular;
      
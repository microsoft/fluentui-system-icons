import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 11.38a.62.62 0 00.69.62h1.31a.62.62 0 100-1.25H13V9.12a.62.62 0 10-1.25 0v2.26z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zM12.38 6a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5z" fill={primaryFill} /></svg>;
}

const BookClock24Filled = wrapIcon(rawSvg({}), 'BookClock24Filled');
export default BookClock24Filled;
      
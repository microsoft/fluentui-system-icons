import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm9 1.25a.75.75 0 00-1.5 0v1.6A2.75 2.75 0 0010.35 12l-1.3 3.23a.75.75 0 001.4.56l1.23-3.09a2.76 2.76 0 001.14 0l1.23 3.09a.75.75 0 001.4-.56L14.15 12A2.74 2.74 0 0013 7.35v-1.6z" fill={primaryFill} /></svg>;
}

const BookCompass24Filled = wrapIcon(rawSvg({}), 'BookCompass24Filled');
export default BookCompass24Filled;
      
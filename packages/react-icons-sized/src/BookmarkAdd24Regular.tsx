import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H18zm-.5 12.78V13c.52 0 1.02-.06 1.5-.17v8.42c0 .6-.7.96-1.19.6l-5.8-4.18-5.82 4.18a.75.75 0 01-1.19-.6v-15C5 4.45 6.46 3 8.25 3h3.77c-.3.46-.53.97-.7 1.5H8.24c-.96 0-1.75.78-1.75 1.75v13.53l5.06-3.64a.75.75 0 01.88 0l5.06 3.64z" fill={primaryFill} /></svg>;
}

const BookmarkAdd24Regular = wrapIcon(rawSvg({}), 'BookmarkAdd24Regular');
export default BookmarkAdd24Regular;
      
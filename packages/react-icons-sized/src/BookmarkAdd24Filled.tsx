import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H18zm-.5 6c.52 0 1.02-.06 1.5-.17v8.42c0 .6-.7.96-1.19.6l-5.8-4.18-5.82 4.18a.75.75 0 01-1.19-.6v-15C5 4.45 6.46 3 8.25 3h3.77a6.5 6.5 0 005.48 10z" fill={primaryFill} /></svg>;
}

const BookmarkAdd24Filled = wrapIcon(rawSvg({}), 'BookmarkAdd24Filled');
export default BookmarkAdd24Filled;
      
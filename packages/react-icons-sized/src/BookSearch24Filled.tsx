import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.72 7.45a2.28 2.28 0 100 4.55 2.28 2.28 0 000-4.55zM4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm10.82 7.3a3.72 3.72 0 10-1.02 1.02l2.47 2.47.07.06a.72.72 0 00.95-1.09l-2.47-2.46z" fill={primaryFill} /></svg>;
}

const BookSearch24Filled = wrapIcon(rawSvg({}), 'BookSearch24Filled');
export default BookSearch24Filled;
      
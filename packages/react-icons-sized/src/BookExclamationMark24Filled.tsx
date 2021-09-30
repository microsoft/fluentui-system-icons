import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5A2.5 2.5 0 004 4.5zm7.5 7.25v-5a.75.75 0 011.5 0v5a.75.75 0 01-1.5 0zm1.75 2.75a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const BookExclamationMark24Filled = wrapIcon(rawSvg({}), 'BookExclamationMark24Filled');
export default BookExclamationMark24Filled;
      
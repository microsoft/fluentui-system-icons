import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v19.5C2 26.99 3 28 4.25 28h8c1.52 0 2.88-.72 3.75-1.83A4.74 4.74 0 0019.75 28h8c1.24 0 2.25-1 2.25-2.25V6.25C30 5.01 29 4 27.75 4h-8c-1.52 0-2.88.72-3.75 1.83A4.74 4.74 0 0012.25 4h-8zm.25 21.5v-19h7.75c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H4.5zm13-16.75c0-1.24 1-2.25 2.25-2.25h7.75v19h-7.75c-1.24 0-2.25-1-2.25-2.25V8.75z" fill={primaryFill} /></svg>;
}

const BookOpen32Filled = wrapIcon(rawSvg({}), 'BookOpen32Filled');
export default BookOpen32Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v19.5C2 26.99 3 28 4.25 28h8c1.52 0 2.88-.72 3.75-1.83a4.75 4.75 0 002.66 1.7A7.96 7.96 0 0117 23c0-.59.18-1.13.5-1.58V8.75c0-1.24 1-2.25 2.25-2.25h7.75v8.17A5 5 0 0130 19V6.25C30 5.01 29 4 27.75 4h-8c-1.52 0-2.88.72-3.75 1.83A4.74 4.74 0 0012.25 4h-8zm.25 21.5v-19h7.75c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H4.5zm24 2.37c-.72.53-1.58.9-2.5 1.05v1.33a.75.75 0 01-1.5 0v-1.27A5.97 5.97 0 0119 23a.75.75 0 011.5 0 4.48 4.48 0 004.1 4.48h.02a4.56 4.56 0 001.13-.04h.02A4.5 4.5 0 0029.5 23a.75.75 0 111.5 0 5.97 5.97 0 01-2.5 4.87zM25 26a2.99 2.99 0 01-3-3v-4a3 3 0 116 0v4a2.99 2.99 0 01-3 3z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone32Filled = wrapIcon(rawSvg({}), 'BookOpenMicrophone32Filled');
export default BookOpenMicrophone32Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 8.5v15a7.96 7.96 0 001.7 4.43 4.5 4.5 0 01-2.7-1.6A4.5 4.5 0 0112.5 28H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8.5A4.5 4.5 0 0116 5.67 4.5 4.5 0 0119.5 4H28a2 2 0 012 2v13a5 5 0 00-2-4V6h-8.5A2.5 2.5 0 0017 8.5zm-2 0A2.5 2.5 0 0012.5 6H4v20h8.5a2.5 2.5 0 002.5-2.5v-15zM21.68 28A6.03 6.03 0 0119 23a.75.75 0 011.5 0 4.48 4.48 0 004.1 4.48h.02a4.56 4.56 0 001.13-.04h.02A4.5 4.5 0 0029.5 23a.75.75 0 111.5 0 5.97 5.97 0 01-5 5.92v1.33a.75.75 0 01-1.5 0v-1.27c-1.04-.09-2-.43-2.82-.98zM25 16a3 3 0 00-3 3v4a3 3 0 106 0v-4a3 3 0 00-3-3z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone32Regular = wrapIcon(rawSvg({}), 'BookOpenMicrophone32Regular');
export default BookOpenMicrophone32Regular;
      
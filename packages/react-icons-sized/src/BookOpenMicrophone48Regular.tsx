import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8c1.6 0 3.04.72 4 1.85A5.24 5.24 0 0128 8h13.25A2.75 2.75 0 0144 10.75V29c0-2.15-.97-4.08-2.5-5.36V10.75a.25.25 0 00-.25-.25H28a2.75 2.75 0 00-2.75 2.75v21.5c0 .8.34 1.53.9 2.03.17 1.12.52 2.18 1.02 3.15A5.24 5.24 0 0124 38.15 5.24 5.24 0 0120 40H6.75A2.75 2.75 0 014 37.25v-26.5A2.75 2.75 0 016.75 8H20zm2.75 26.75v-21.5A2.75 2.75 0 0020 10.5H6.75a.25.25 0 00-.25.25v26.5c0 .14.11.25.25.25H20a2.75 2.75 0 002.75-2.75zm5.6 2.75A9 9 0 0128 35a1 1 0 112 0 6.98 6.98 0 0012.29 4.59A6.97 6.97 0 0044 35a1 1 0 112 0 9 9 0 01-8 8.95V45a1 1 0 11-2 0v-1.05a9 9 0 01-7.65-6.45zm4.32 0A5 5 0 0042 35v-6a4.98 4.98 0 00-5-5 5 5 0 00-5 5v6c0 .91.24 1.76.67 2.5z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone48Regular = wrapIcon(rawSvg({}), 'BookOpenMicrophone48Regular');
export default BookOpenMicrophone48Regular;
      
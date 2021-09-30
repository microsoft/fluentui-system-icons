import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5A2.5 2.5 0 015.5 2H17a2.5 2.5 0 012.5 2.5v6.81a6.48 6.48 0 00-1.5-.3V4.5a1 1 0 00-1-1H5.5a1 1 0 00-1 1V18h6.52c.04.52.14 1.02.3 1.5H4.5a1 1 0 001 1h6.23c.29.55.65 1.06 1.08 1.5H5.5A2.5 2.5 0 013 19.5v-15zM17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 100-1H18v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 101 0zM6 6a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6zm1.5 1.5h7v-1h-7v1z" fill={primaryFill} /></svg>;
}

const BookAdd24Regular = wrapIcon(rawSvg({}), 'BookAdd24Regular');
export default BookAdd24Regular;
      
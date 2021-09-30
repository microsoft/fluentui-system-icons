import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H18zm2.5 9.25v-3.98a6.52 6.52 0 001.5-1.08v5.06c0 1.24-1 2.25-2.24 2.25H18v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V18.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 8.45 3.46 7 5.25 7H6v-.75C6 5.01 7 4 8.25 4h3.25c-.2.47-.34.98-.42 1.5H8.25a.75.75 0 00-.75.75V7h3.52c.04.52.14 1.03.3 1.5H5.24c-.97 0-1.75.79-1.75 1.75v6c0 .41.34.75.75.75H6v-1.75C6 14.01 7 13 8.25 13h7.5c1.24 0 2.25 1 2.25 2.25V17h1.78c.4-.01.73-.34.73-.75zm-4-1a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5z" fill={primaryFill} /></svg>;
}

const PrintAdd24Regular = wrapIcon(rawSvg({}), 'PrintAdd24Regular');
export default PrintAdd24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 17a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-2.5a3 3 0 110-6 3 3 0 010 6zm0 27.6a3.63 3.63 0 01-6-2.74v-7A3.5 3.5 0 015 29v-3.25A6.75 6.75 0 0111.75 19h7.5c2.34 0 4.4 1.2 5.62 3H38.22A4.78 4.78 0 0143 26.78v3.63a3.5 3.5 0 01-4.5 3.35v5.74a3.5 3.5 0 01-5.75 2.68A3.5 3.5 0 0127 39.5v-10h-1.04a3.5 3.5 0 01-4.46 2.86v7a3.63 3.63 0 01-6 2.74zm-8-16.35V29a1 1 0 102 0v-3.75a1.25 1.25 0 112.5 0v14.1a1.13 1.13 0 002.25 0v-6.1a1.25 1.25 0 112.5 0v6.1a1.13 1.13 0 002.25 0v-14.1a1.25 1.25 0 112.5 0V29a1 1 0 102 0v-3.25c0-2.35-1.9-4.25-4.25-4.25h-7.5a4.25 4.25 0 00-4.25 4.25zm18.38-1.25c.08.4.12.82.12 1.25V27h2.2c.72 0 1.3.58 1.3 1.3v11.2a1 1 0 102 0v-5.05a1.25 1.25 0 112.5 0v5.05a1 1 0 102 0V28.06a1.25 1.25 0 012.5 0v2.35a1 1 0 102 0v-3.63a2.28 2.28 0 00-2.28-2.28H25.88zM38 15a5 5 0 11-10 0 5 5 0 0110 0zm-2.5 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const Guardian48Regular = wrapIcon(rawSvg({}), 'Guardian48Regular');
export default Guardian48Regular;
      
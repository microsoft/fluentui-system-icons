import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h6.27c-.3-.46-.53-.97-.7-1.5H5.74c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.56c.53.18 1.04.42 1.5.71V5.75A2.75 2.75 0 0018.25 3H5.75z" fill={primaryFill} /><path d="M17.96 11.02a.75.75 0 00-.7-1.02h-5.01a.75.75 0 000 1.5h2.74a6.48 6.48 0 012.97-.48z" fill={primaryFill} /><path d="M8.25 8.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-.75 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M6 16.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm2.25-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /><path d="M17.25 7.5H6.75a.75.75 0 110-1.5h10.5a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 3a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18v2.5z" fill={primaryFill} /></svg>;
}

const FormNew24Regular = wrapIcon(rawSvg({}), 'FormNew24Regular');
export default FormNew24Regular;
      
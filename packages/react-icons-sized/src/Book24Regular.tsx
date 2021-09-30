import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 6a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V6zm1.5 1.5h7v-1h-7v1z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zM5.5 18H19V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1V18z" fill={primaryFill} /></svg>;
}

const Book24Regular = wrapIcon(rawSvg({}), 'Book24Regular');
export default Book24Regular;
      
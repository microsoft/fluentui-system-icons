import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2C1.78 2 1 2.78 1 3.75v8.5c0 .97.78 1.75 1.75 1.75H6c.79 0 1.5-.33 2-.86.5.53 1.21.86 2 .86h3.25c.97 0 1.75-.78 1.75-1.75v-8.5C15 2.78 14.22 2 13.25 2H10c-.79 0-1.5.33-2 .86A2.74 2.74 0 006 2H2.75zm4.5 2.75v6.5c0 .69-.56 1.25-1.25 1.25H2.75a.25.25 0 01-.25-.25v-8.5c0-.14.11-.25.25-.25H6c.69 0 1.25.56 1.25 1.25zm1.5 6.5v-6.5c0-.69.56-1.25 1.25-1.25h3.25c.14 0 .25.11.25.25v8.5c0 .14-.11.25-.25.25H10c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const BookOpen16Filled = wrapIcon(rawSvg({}), 'BookOpen16Filled');
export default BookOpen16Filled;
      
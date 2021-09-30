import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16.14c-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H12c-.79 0-1.5-.33-2-.86zM3.5 4.75v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25zm7.25 9.5c0 .69.56 1.25 1.25 1.25h4.25c.14 0 .25-.11.25-.25V4.75a.25.25 0 00-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5z" fill={primaryFill} /></svg>;
}

const BookOpen20Filled = wrapIcon(rawSvg({}), 'BookOpen20Filled');
export default BookOpen20Filled;
      
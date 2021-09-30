import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16.14c-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v6.75a2.5 2.5 0 00-1.5-2.3V4.76a.25.25 0 00-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5c0 .3.1.58.28.8.09.7.34 1.37.72 1.94a2.74 2.74 0 01-1.75-.85zM3.5 4.75v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25zm13.93 11.34c.35-.43.57-.98.57-1.59a.5.5 0 011 0 3.5 3.5 0 01-3 3.46v.54a.5.5 0 01-1 0v-.54a3.49 3.49 0 01-3-3.46.5.5 0 011 0 2.5 2.5 0 002.5 2.5 2.5 2.5 0 001.93-.9zM15.5 16a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 013 0v3c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone20Filled = wrapIcon(rawSvg({}), 'BookOpenMicrophone20Filled');
export default BookOpenMicrophone20Filled;
      
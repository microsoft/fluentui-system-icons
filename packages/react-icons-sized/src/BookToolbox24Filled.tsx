import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4h-.5c-.83 0-1.5.67-1.5 1.5V7h2.5v-.25a.75.75 0 011.5 0V7h3v-.25a.75.75 0 011.5 0V7H23V5.5c0-.83-.67-1.5-1.5-1.5H21V3c0-.97-.78-1.75-1.75-1.75h-3.5C14.78 1.25 14 2.03 14 3v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4V3zM12 10.5v-2h2.5v.75a.75.75 0 001.5 0V8.5h3v.75a.75.75 0 001.5 0V8.5H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5zm1-7.45a2.5 2.5 0 00-2 2.45v5a2.5 2.5 0 002.5 2.5h7v5.75c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2h6.69c-.12.31-.19.65-.19 1v.05z" fill={primaryFill} /></svg>;
}

const BookToolbox24Filled = wrapIcon(rawSvg({}), 'BookToolbox24Filled');
export default BookToolbox24Filled;
      
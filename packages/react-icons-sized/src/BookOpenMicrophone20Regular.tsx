import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16c-.46.6-1.18 1-2 1H3.5A1.5 1.5 0 012 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5v7c0-.82-.4-1.54-1-2v-5a.5.5 0 00-.5-.5H12c-.83 0-1.5.67-1.5 1.5v9c0 .52.27.99.68 1.25.13.45.32.86.57 1.24A2.5 2.5 0 0110 16zM3 4.5v11c0 .28.22.5.5.5H8c.83 0 1.5-.67 1.5-1.5v-9C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 00-.5.5zm14.43 11.6c.35-.44.57-1 .57-1.6a.5.5 0 011 0 3.5 3.5 0 01-3 3.46v.54a.5.5 0 01-1 0v-.54a3.49 3.49 0 01-3-3.46.5.5 0 011 0 2.49 2.49 0 002.5 2.5 2.5 2.5 0 001.93-.9zM14 11.5a1.5 1.5 0 013 0v3a1.5 1.5 0 01-3 0v-3z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone20Regular = wrapIcon(rawSvg({}), 'BookOpenMicrophone20Regular');
export default BookOpenMicrophone20Regular;
      
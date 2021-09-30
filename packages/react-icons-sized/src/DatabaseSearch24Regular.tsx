import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6c0-.7.32-1.3.77-1.78a5.61 5.61 0 011.8-1.2A13.65 13.65 0 0112 2c2.08 0 4 .38 5.43 1.02.72.32 1.34.72 1.8 1.2.45.49.77 1.09.77 1.78v6.26a5.5 5.5 0 00-1.5-.89V8.4a6.8 6.8 0 01-1.07.6A13.65 13.65 0 0112 10c-2.08 0-4-.38-5.43-1.02A6.8 6.8 0 015.5 8.4V18c0 .2.09.46.37.75.27.3.71.6 1.31.86a12.18 12.18 0 005.53.87 5.5 5.5 0 002.15 1.27c-.9.16-1.86.25-2.86.25-2.08 0-4-.38-5.43-1.02a5.61 5.61 0 01-1.8-1.2A2.6 2.6 0 014 18V6zm1.5 0c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75 0-.2-.09-.46-.37-.75-.27-.3-.71-.6-1.31-.86-1.2-.54-2.9-.89-4.82-.89-1.92 0-3.62.35-4.82.89-.6.26-1.04.56-1.31.86-.28.3-.37.54-.37.75zm11 15c.97 0 1.87-.3 2.6-.83l2.62 2.61a.75.75 0 101.06-1.06l-2.61-2.61A4.5 4.5 0 1016.5 21zm0-1.5a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
}

const DatabaseSearch24Regular = wrapIcon(rawSvg({}), 'DatabaseSearch24Regular');
export default DatabaseSearch24Regular;
      
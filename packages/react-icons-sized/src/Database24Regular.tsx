import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6c0-.7.32-1.3.77-1.78a5.61 5.61 0 011.8-1.2A13.65 13.65 0 0112 2c2.08 0 4 .38 5.43 1.02.72.32 1.34.72 1.8 1.2.45.49.77 1.09.77 1.78v12c0 .7-.32 1.3-.77 1.78-.46.48-1.08.88-1.8 1.2A13.65 13.65 0 0112 22c-2.08 0-4-.38-5.43-1.02a5.61 5.61 0 01-1.8-1.2A2.6 2.6 0 014 18V6zm1.5 0c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75 0-.2-.09-.46-.37-.75-.27-.3-.71-.6-1.31-.86-1.2-.54-2.9-.89-4.82-.89-1.92 0-3.62.35-4.82.89-.6.26-1.04.56-1.31.86-.28.3-.37.54-.37.75zm13 2.4a6.8 6.8 0 01-1.07.58A13.65 13.65 0 0112 10c-2.08 0-4-.38-5.43-1.02A6.8 6.8 0 015.5 8.4V18c0 .2.09.46.37.75.27.3.71.6 1.31.86 1.2.54 2.9.89 4.82.89 1.92 0 3.62-.35 4.82-.89.6-.26 1.04-.56 1.31-.86.28-.3.37-.54.37-.75V8.4z" fill={primaryFill} /></svg>;
}

const Database24Regular = wrapIcon(rawSvg({}), 'Database24Regular');
export default Database24Regular;
      
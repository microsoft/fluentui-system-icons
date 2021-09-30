import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 2c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zM4.47 3.97c.3-.3.77-.3 1.06 0l1.75 1.75a.75.75 0 11-1.06 1.06L4.47 5.03a.75.75 0 010-1.06zm9.56 0c.3.3.3.77 0 1.06l-1.75 1.75a.75.75 0 11-1.06-1.06l1.75-1.75c.3-.3.77-.3 1.06 0zM2.5 8.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm8.18-.26a1.32 1.32 0 00-2.18 1v11.27c0 1.21 1.5 1.78 2.3.88l2.62-2.92c.27-.31.66-.5 1.07-.5l3.84-.16a1.32 1.32 0 00.8-2.32l-8.45-7.25zM10 20.29V9.89l7.81 6.69-3.38.13c-.82.03-1.59.4-2.13 1L10 20.3z" fill={primaryFill} /></svg>;
}

const CursorClick24Regular = wrapIcon(rawSvg({}), 'CursorClick24Regular');
export default CursorClick24Regular;
      
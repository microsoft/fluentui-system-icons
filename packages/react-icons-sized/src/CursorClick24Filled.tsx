import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 2c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zM4.47 3.97c.3-.3.77-.3 1.06 0l1.75 1.75a.75.75 0 11-1.06 1.06L4.47 5.03a.75.75 0 010-1.06zm9.56 0c.3.3.3.77 0 1.06l-1.75 1.75a.75.75 0 11-1.06-1.06l1.75-1.75c.3-.3.77-.3 1.06 0zM2.5 8.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm6 .74a1.32 1.32 0 012.18-1l8.46 7.25c.9.78.39 2.27-.8 2.32l-3.85.15c-.41.02-.8.2-1.07.5l-2.62 2.93c-.8.9-2.3.33-2.3-.88V9.5z" fill={primaryFill} /></svg>;
}

const CursorClick24Filled = wrapIcon(rawSvg({}), 'CursorClick24Filled');
export default CursorClick24Filled;
      
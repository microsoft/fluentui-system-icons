import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.05 9.74c.62.1 1.23.32 1.67.67a.75.75 0 11-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 00-1.3.1c-.42.15-.78.4-1.05.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 01.94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 01-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72a3.53 3.53 0 011.8-1.36 4.32 4.32 0 012.02-.18z" fill={primaryFill} /><path d="M21.22 10.41a3.53 3.53 0 00-1.67-.67 4.32 4.32 0 00-2.01.18c-.68.23-1.33.67-1.8 1.36-.48.7-.74 1.6-.74 2.72s.26 2.02.73 2.72c.48.7 1.13 1.13 1.8 1.36.68.24 1.4.27 2.02.18.62-.1 1.23-.32 1.67-.67a.75.75 0 10-.94-1.18c-.18.15-.52.3-.95.36-.42.07-.89.04-1.3-.1-.42-.15-.78-.4-1.05-.8s-.48-.99-.48-1.87c0-.88.2-1.48.48-1.88.27-.4.63-.64 1.04-.79.42-.14.89-.17 1.31-.1.43.06.77.2.95.36a.75.75 0 00.94-1.18z" fill={primaryFill} /><path d="M2 8.25C2 5.9 3.9 4 6.25 4h15.5C24.1 4 26 5.9 26 8.25v11.5C26 22.1 24.1 24 21.75 24H6.25A4.25 4.25 0 012 19.75V8.25zM6.25 5.5A2.75 2.75 0 003.5 8.25v11.5a2.75 2.75 0 002.75 2.75h15.5a2.75 2.75 0 002.75-2.75V8.25a2.75 2.75 0 00-2.75-2.75H6.25z" fill={primaryFill} /></svg>;
}

const ClosedCaption28Regular = wrapIcon(rawSvg({}), 'ClosedCaption28Regular');
export default ClosedCaption28Regular;
      
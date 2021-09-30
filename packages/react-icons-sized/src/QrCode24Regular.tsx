import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6H6v2h2V6z" fill={primaryFill} /><path d="M3 5.25C3 4.01 4 3 5.25 3h3.5C9.99 3 11 4 11 5.25v3.5C11 9.99 10 11 8.75 11h-3.5C4.01 11 3 10 3 8.75v-3.5zm2.25-.75a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5z" fill={primaryFill} /><path d="M6 16h2v2H6v-2z" fill={primaryFill} /><path d="M3 15.25C3 14.01 4 13 5.25 13h3.5C9.99 13 11 14 11 15.25v3.5C11 19.99 10 21 8.75 21h-3.5C4.01 21 3 20 3 18.75v-3.5zm2.25-.75a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5z" fill={primaryFill} /><path d="M18 6h-2v2h2V6z" fill={primaryFill} /><path d="M15.25 3C14.01 3 13 4 13 5.25v3.5C13 9.99 14 11 15.25 11h3.5C19.99 11 21 10 21 8.75v-3.5C21 4.01 20 3 18.75 3h-3.5zm-.75 2.25c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75v-3.5z" fill={primaryFill} /><path d="M13 13h2.75v2.75H13V13z" fill={primaryFill} /><path d="M18.25 15.75h-2.5v2.5H13V21h2.75v-2.75h2.5V21H21v-2.75h-2.75v-2.5z" fill={primaryFill} /><path d="M18.25 15.75V13H21v2.75h-2.75z" fill={primaryFill} /></svg>;
}

const QrCode24Regular = wrapIcon(rawSvg({}), 'QrCode24Regular');
export default QrCode24Regular;
      
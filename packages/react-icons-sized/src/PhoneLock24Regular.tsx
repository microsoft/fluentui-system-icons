import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2C14.99 2 16 3 16 4.25v6.59c-.62.3-1.15.77-1.5 1.36V4.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75H12v1c0 .17.02.34.05.5h-5.8C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zM15 14a2.5 2.5 0 115 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5v-1zm1.5 0v1h2v-1a1 1 0 10-2 0zm2 5a1 1 0 10-2 0 1 1 0 002 0zm-6.5-.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.33.75.75z" fill={primaryFill} /></svg>;
}

const PhoneLock24Regular = wrapIcon(rawSvg({}), 'PhoneLock24Regular');
export default PhoneLock24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2C14.99 2 16 3 16 4.25v6.59A3.5 3.5 0 0014 14v.05a2.5 2.5 0 00-2 2.45v2.25a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75v2.75c0 .17.02.34.05.5h-5.8C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zM15 14v1h-.5c-.83 0-1.5.67-1.5 1.5v5a1.5 1.5 0 001.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 00-5 0zm1.5 0a1 1 0 112 0v1h-2v-1zm2 5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const PhoneLock24Filled = wrapIcon(rawSvg({}), 'PhoneLock24Filled');
export default PhoneLock24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5V4a2.5 2.5 0 015 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-5A1.5 1.5 0 0116.5 5h.5zm1.5-1v1h2V4a1 1 0 10-2 0zm2 4.9a1 1 0 100 .2.98.98 0 000-.2zM7.74 17.5h1.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h.1zm5-11.5h1.3c-.02.16-.04.33-.04.5v1h-1.25v13h7.5c.13 0 .25-.11.25-.25V14H22v6.25c0 .96-.79 1.75-1.75 1.75H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h9zm-1.5 1.5H3.76a.25.25 0 00-.25.25v12.5c0 .13.11.25.25.25h7.5v-13zm3.5 10h1.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /></svg>;
}

const DualScreenLock24Regular = wrapIcon(rawSvg({}), 'DualScreenLock24Regular');
export default DualScreenLock24Regular;
      
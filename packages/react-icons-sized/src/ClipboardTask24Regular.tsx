import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.03 11.03a.75.75 0 10-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.5-5.5zm-1.04-6.95A2.25 2.25 0 0013.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08zm0 .02l.01.15V4.1zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1zm0-3h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardTask24Regular = wrapIcon(rawSvg({}), 'ClipboardTask24Regular');
export default ClipboardTask24Regular;
      
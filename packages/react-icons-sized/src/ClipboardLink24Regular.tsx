import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 4a2.25 2.25 0 00-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22H11c-.34-.45-.6-.95-.77-1.5H6.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.46-.4 1.87-1h2.13c.41 0 .75.34.75.75V14H20V6.25C20 5.01 19 4 17.75 4h-1.76zm-5.74-.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M19 15a4 4 0 01.2 8H19a.75.75 0 01-.1-1.5h.1a2.5 2.5 0 00.16-5H19a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M15 15a.75.75 0 01.1 1.5H15a2.5 2.5 0 00-.16 5H15a.75.75 0 01.1 1.5H15a4 4 0 01-.2-8h.2z" fill={primaryFill} /><path d="M15.25 18.25h3.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /></svg>;
}

const ClipboardLink24Regular = wrapIcon(rawSvg({}), 'ClipboardLink24Regular');
export default ClipboardLink24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 6.25v4.98c-.5-.05-1-.03-1.5.09V6.25a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h6.79l1.5 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25zM16 4.1v0zm-5.75-.6a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm6.23 19.03a.75.75 0 001.06 0l4.41-4.4a3.47 3.47 0 10-4.9-4.91l-.04.04-.03-.04a3.47 3.47 0 10-4.9 4.9l4.4 4.41z" fill={primaryFill} /></svg>;
}

const ClipboardHeart24Regular = wrapIcon(rawSvg({}), 'ClipboardHeart24Regular');
export default ClipboardHeart24Regular;
      
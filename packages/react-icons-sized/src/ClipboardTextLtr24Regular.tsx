import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.2 0 2.17.93 2.24 2.1l.01.15-.01-.25h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76v.18L8 4.25C8 3.01 9 2 10.25 2h3.5zm0 4.5h-3.5c-.8 0-1.5-.41-1.9-1.03l.03.03H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 00-.75-.75h-2.13l.02-.03c-.4.62-1.1 1.03-1.89 1.03zm0-3h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zM8 14.5h4a.75.75 0 000-1.5H8a.75.75 0 000 1.5zm0-4h8A.75.75 0 0016 9H8a.75.75 0 000 1.5zm0 8h6a.75.75 0 000-1.5H8a.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const ClipboardTextLtr24Regular = wrapIcon(rawSvg({}), 'ClipboardTextLtr24Regular');
export default ClipboardTextLtr24Regular;
      
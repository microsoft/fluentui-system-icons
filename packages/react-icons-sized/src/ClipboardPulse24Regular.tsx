import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25V13h-1.5V6.25a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75V13H4V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.24 2.1l.01.15V4.1zm-2.24-.6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm4.75 13H20v3.25c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V16.5h1.5v3.25c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V16.5zm-7.53-7.96a.75.75 0 00-1.4-.13L6.8 14H2.75a.75.75 0 000 1.5h4.5c.28 0 .54-.16.67-.41l2.15-4.3 1.96 6.67a.75.75 0 001.4.13l1.88-3.78.8 1.33c.13.22.38.36.64.36h4.5a.75.75 0 000-1.5h-4.08l-1.28-2.14a.75.75 0 00-1.31.05l-1.65 3.3-1.96-6.67z" fill={primaryFill} /></svg>;
}

const ClipboardPulse24Regular = wrapIcon(rawSvg({}), 'ClipboardPulse24Regular');
export default ClipboardPulse24Regular;
      
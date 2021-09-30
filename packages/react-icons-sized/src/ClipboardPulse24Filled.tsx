import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V13h-2.26l-.99-1.65a1.75 1.75 0 00-3.07.12l-.5 1.02-1.25-4.23a1.75 1.75 0 00-3.25-.3L6.17 13H4V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm3 13H20v3.25c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V16.5h3.25c.66 0 1.27-.37 1.57-.97l1-2.02 1.25 4.23a1.75 1.75 0 003.25.3l1.08-2.18c.33.4.82.64 1.35.64zm-5.78-7.96a.75.75 0 00-1.4-.13L6.8 14H2.75a.75.75 0 000 1.5h4.5c.28 0 .54-.16.67-.41l2.15-4.3 1.96 6.67a.75.75 0 001.4.13l1.88-3.78.8 1.33c.13.22.38.36.64.36h4.5a.75.75 0 000-1.5h-4.08l-1.28-2.14a.75.75 0 00-1.31.05l-1.65 3.3-1.96-6.67z" fill={primaryFill} /></svg>;
}

const ClipboardPulse24Filled = wrapIcon(rawSvg({}), 'ClipboardPulse24Filled');
export default ClipboardPulse24Filled;
      
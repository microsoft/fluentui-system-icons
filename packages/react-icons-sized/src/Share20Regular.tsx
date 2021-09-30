import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.33 12.84l4.5-4.42.05-.07a.59.59 0 00-.05-.77l-4.5-4.42-.06-.05c-.36-.27-.9-.01-.9.47V5.7l-.22.01C8.6 6.01 6.5 8.26 6 12.35c-.06.53.54.85.93.5a9.64 9.64 0 014.45-2.38c.24-.06.5-.1.74-.12l.26-.02v2.17c.06.46.61.67.95.34zm-1.1-6.12l1.15-.08V4.61L16.82 8l-3.44 3.39V9.23l-1.36.12c-1.7.19-3.32.87-4.83 2 .3-1.33.8-2.34 1.47-3.06a5.2 5.2 0 013.57-1.57z" fill={primaryFill} /><path d="M5.5 4A2.5 2.5 0 003 6.5v8A2.5 2.5 0 005.5 17h8a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 014 14.5v-8C4 5.67 4.67 5 5.5 5h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
}

const Share20Regular = wrapIcon(rawSvg({}), 'Share20Regular');
export default Share20Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.78 2.82C11.5 1.5 8.36 1.6 6.88 4.16 5.66 6.27 4.5 9.48 4.5 14s1.16 7.73 2.38 9.84c1.48 2.56 4.62 2.66 6.9 1.34l.14-.08c1-.58 1.53-1.72 1.33-2.85l-.38-2.21a3.75 3.75 0 00-3.2-3.07l-1.05-.14c-.1-.02-.13-.07-.14-.09a8.23 8.23 0 01-.2-5.3.22.22 0 01.1-.04l1.46-.28a3.75 3.75 0 003-3.04l.41-2.33a2.75 2.75 0 00-1.33-2.85l-.14-.08zM8.18 4.9c.91-1.57 2.99-1.86 4.85-.78l.14.08c.45.26.7.78.6 1.3l-.4 2.32a2.25 2.25 0 01-1.8 1.83l-1.47.27c-.52.1-1.04.44-1.25 1.03a9.71 9.71 0 00.24 6.34c.23.6.77.95 1.34 1.02l1.04.14c.97.13 1.75.88 1.92 1.85l.38 2.2c.1.52-.15 1.04-.6 1.3l-.14.08c-1.86 1.08-3.94.8-4.85-.79C7.1 21.2 6 18.25 6 14s1.1-7.2 2.18-9.1z" fill={primaryFill} /><path d="M19.78 8.72a.75.75 0 10-1.06 1.06L21.94 13h-8.19a.75.75 0 100 1.5h8.19l-3.22 3.22a.75.75 0 001.06 1.06l4.5-4.5c.3-.3.3-.77 0-1.06l-4.5-4.5z" fill={primaryFill} /></svg>;
}

const CallForward28Regular = wrapIcon(rawSvg({}), 'CallForward28Regular');
export default CallForward28Regular;
      
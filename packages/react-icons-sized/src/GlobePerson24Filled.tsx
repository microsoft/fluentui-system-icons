import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.1 16.5c-.08.38-.16.75-.25 1.1a2.5 2.5 0 00-.85 1.88c0 .18 0 .35.03.51-.6 1.26-1.32 2-2.03 2-1.2 0-2.4-2.08-3.04-5.2l-.06-.29h6.2zm.17 4.35a3.5 3.5 0 01-.27-1.37 1.5 1.5 0 011.5-1.5h5c.83 0 1.5.68 1.5 1.5 0 1.12-.46 2.01-1.21 2.62-.74.6-1.74.88-2.79.88a4.43 4.43 0 01-2.79-.88 3.22 3.22 0 01-.94-1.25zM22 12c0 .66-.06 1.31-.19 1.94A3 3 0 0017 12.75a28.97 28.97 0 00-.02-2.1l-.04-.65h4.87c.13.65.2 1.32.2 2zm-5 3v-.02a2 2 0 014 0V15a2 2 0 01-4 0zm-.24 1.98a2.98 2.98 0 01-.18-.22l-.03.15-.01.07h.22zm-13.7-.48h4.31c.37 2.08.98 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28zM2.2 10h4.87a28.21 28.21 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5zm13.22 0a25.84 25.84 0 01-.03 4.43l-.06.57H8.67a25.36 25.36 0 01-.13-4.51l.04-.49h6.84zm-.48-7.42l-.1-.17c3.01.89 5.44 3.16 6.53 6.09h-4.59c-.31-2.42-.96-4.5-1.84-5.92zm-5.9-.14l.12-.03a14.57 14.57 0 00-1.88 5.65l-.06.44h-4.6a10.03 10.03 0 016.42-6.06zM12 2c1.32 0 2.65 2.54 3.21 6.19l.05.31H8.74C9.28 4.7 10.64 2 12 2z" fill={primaryFill} /></svg>;
}

const GlobePerson24Filled = wrapIcon(rawSvg({}), 'GlobePerson24Filled');
export default GlobePerson24Filled;
      
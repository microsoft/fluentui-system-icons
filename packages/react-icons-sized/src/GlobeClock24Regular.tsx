import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-9.22 9.97 6.5 6.5 0 01-1.06-1.5c-1.06-.23-2.06-1.75-2.66-3.97h2.02c.08-.52.22-1.02.42-1.5H8.74a18.5 18.5 0 01-.14-5h6.8c.04.43.08.87.09 1.32.47-.16.97-.26 1.5-.3L16.9 10h3.36c.12.51.2 1.05.22 1.59l.01.32v-.18c.54.28 1.03.64 1.47 1.05.02-.25.03-.52.03-.78zM4.8 16.5H7.5c.32 1.34.8 2.5 1.37 3.41a8.53 8.53 0 01-4.1-3.4zm-1.06-6.48V10H7.1a20.85 20.85 0 00.13 5H4.04a8.48 8.48 0 01-.3-4.98zM8.86 4.1h.02A12.36 12.36 0 007.3 8.5H4.25c.9-2 2.56-3.59 4.61-4.4zm3.03-.6H12c1.3 0 2.59 2.04 3.17 5H8.83c.57-2.88 1.79-4.88 3.06-5zm3.34.76l-.1-.17a8.53 8.53 0 014.62 4.41H16.7c-.3-1.66-.8-3.12-1.47-4.24z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 010 1H17a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
}

const GlobeClock24Regular = wrapIcon(rawSvg({}), 'GlobeClock24Regular');
export default GlobeClock24Regular;
      
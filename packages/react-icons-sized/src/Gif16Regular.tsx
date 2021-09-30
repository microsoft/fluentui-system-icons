import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.05 6.7c.48-.04.85.04.99.1a.5.5 0 10.45-.89 2.98 2.98 0 00-1.54-.2c-.96.1-1.95.94-1.95 2.3 0 1.38 1.05 2.3 2.3 2.3.58 0 1.1-.27 1.4-.55.26-.25.3-.58.3-.79v-.96a.5.5 0 00-.5-.5h-.8a.5.5 0 100 1H6v.46a.43.43 0 010 .07c-.15.13-.42.27-.7.27C4.57 9.3 4 8.8 4 8c0-.82.57-1.25 1.05-1.3zM9 6.2a.5.5 0 00-1 0v3.6a.5.5 0 101 0V6.2zm1.5-.5a.5.5 0 00-.5.5v3.6a.5.5 0 001 0V8.5h1a.5.5 0 000-1h-1v-.8h1.5a.5.5 0 000-1h-2zM3.5 2A2.5 2.5 0 001 4.5v7A2.5 2.5 0 003.5 14h9a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0012.5 2h-9zM2 4.5C2 3.67 2.67 3 3.5 3h9c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z" fill={primaryFill} /></svg>;
}

const Gif16Regular = wrapIcon(rawSvg({}), 'Gif16Regular');
export default Gif16Regular;
      
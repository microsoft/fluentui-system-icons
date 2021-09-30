import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4.5A2.5 2.5 0 013.5 2h9A2.5 2.5 0 0115 4.5v7a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 11.5v-7zm4.05 2.2c.48-.04.85.04.99.1a.5.5 0 10.45-.89 2.98 2.98 0 00-1.54-.2c-.96.1-1.95.94-1.95 2.3 0 1.38 1.05 2.3 2.3 2.3.58 0 1.1-.27 1.4-.55.26-.25.3-.58.3-.79v-.96a.5.5 0 00-.5-.5h-.8a.5.5 0 000 1H6v.46a.43.43 0 010 .07c-.15.13-.42.27-.7.27C4.57 9.3 4 8.8 4 8c0-.82.57-1.25 1.05-1.3zM9 6.2a.5.5 0 00-1 0v3.6a.5.5 0 001 0V6.2zm1.5-.5a.5.5 0 00-.5.5v3.6a.5.5 0 001 0V8.5h1a.5.5 0 000-1h-1v-.8h1.5a.5.5 0 000-1h-2z" fill={primaryFill} /></svg>;
}

const Gif16Filled = wrapIcon(rawSvg({}), 'Gif16Filled');
export default Gif16Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm6.78 7.53l-5.5 5.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06L11 14.94l4.97-4.97a.75.75 0 111.06 1.06z" fill={primaryFill} /></svg>;
}

const ClipboardTask24Filled = wrapIcon(rawSvg({}), 'ClipboardTask24Filled');
export default ClipboardTask24Filled;
      
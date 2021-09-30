import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v6.5A2.75 2.75 0 004.75 14h1.3l.3-1.2.08-.3H4.75c-.69 0-1.25-.56-1.25-1.25V5h9v1.18c.48-.2 1-.23 1.5-.12V4.75A2.75 2.75 0 0011.25 2h-6.5zm9.8 5.46c-.61-.61-1.6-.61-2.21 0l-4.3 4.28c-.35.36-.6.8-.72 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.37 1.29-.73l4.28-4.29c.61-.6.61-1.6 0-2.2z" fill={primaryFill} /></svg>;
}

const WindowEdit16Filled = wrapIcon(rawSvg({}), 'WindowEdit16Filled');
export default WindowEdit16Filled;
      
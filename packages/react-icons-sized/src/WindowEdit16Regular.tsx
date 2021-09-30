import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h1.55l.25-1H4.5A1.5 1.5 0 013 11.5V5h10v1.04c.33-.06.67-.05 1 .02V4.5A2.5 2.5 0 0011.5 2h-7zM3.09 4c.2-.58.76-1 1.41-1h7c.65 0 1.2.42 1.41 1H3.1zm11.45 3.46c-.6-.61-1.6-.61-2.2 0l-4.3 4.28c-.35.36-.6.8-.72 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.37 1.29-.73l4.28-4.29c.61-.6.61-1.6 0-2.2z" fill={primaryFill} /></svg>;
}

const WindowEdit16Regular = wrapIcon(rawSvg({}), 'WindowEdit16Regular');
export default WindowEdit16Regular;
      
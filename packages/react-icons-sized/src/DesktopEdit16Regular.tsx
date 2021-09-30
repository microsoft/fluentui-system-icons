import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.62 1.46c-.6-.61-1.6-.61-2.2 0l-4.3 4.28c-.35.36-.6.8-.72 1.3l-.3 1.2a.6.6 0 00.73.74l1.21-.3c.5-.12.94-.37 1.3-.73l4.28-4.29c.61-.6.61-1.6 0-2.2zM10.46 2l-1 1H4a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V6.7l1-1V10a2 2 0 01-2 2h-2v1h1.5a.5.5 0 110 1h-7a.5.5 0 010-1H6v-1H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h6.46zM9 13v-1H7v1h2zM7.83 8.99l-.12-.48.12.48z" fill={primaryFill} /></svg>;
}

const DesktopEdit16Regular = wrapIcon(rawSvg({}), 'DesktopEdit16Regular');
export default DesktopEdit16Regular;
      
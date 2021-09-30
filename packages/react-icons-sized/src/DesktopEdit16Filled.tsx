import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.62 1.46c-.6-.61-1.6-.61-2.2 0l-4.3 4.28c-.35.36-.6.8-.72 1.3l-.3 1.2a.6.6 0 00.73.74l1.21-.3c.5-.12.94-.37 1.3-.73l4.28-4.29c.61-.6.61-1.6 0-2.2zM10.46 2L7.42 5.04c-.48.48-.83 1.09-1 1.75L6.13 8a1.6 1.6 0 001.96 1.95l1.2-.3c.67-.16 1.28-.5 1.76-1L14 5.7v4.8c0 .83-.67 1.5-1.5 1.5H10v1h1.5a.5.5 0 110 1h-7a.5.5 0 010-1H6v-1H3.5A1.5 1.5 0 012 10.5v-7C2 2.67 2.67 2 3.5 2h6.96zM9 13v-1H7v1h2zM7.83 8.98l-.12-.48.12.48z" fill={primaryFill} /></svg>;
}

const DesktopEdit16Filled = wrapIcon(rawSvg({}), 'DesktopEdit16Filled');
export default DesktopEdit16Filled;
      
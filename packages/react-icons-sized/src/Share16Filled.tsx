import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.3 2.04a.5.5 0 01.55.1l3.5 3.5c.2.2.2.52 0 .71l-3.5 3.5A.5.5 0 0110 9.5V8c-.59.01-1.18.05-1.8.23-.79.23-1.65.68-2.6 1.62a.5.5 0 01-.85-.4 6.45 6.45 0 011.56-3.92A5.29 5.29 0 0110 4V2.5c0-.2.12-.38.3-.46zM3 5.5C3 4.67 3.67 4 4.5 4h1a.5.5 0 000-1h-1A2.5 2.5 0 002 5.5v6A2.5 2.5 0 004.5 14h6a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 013 11.5v-6z" fill={primaryFill} /></svg>;
}

const Share16Filled = wrapIcon(rawSvg({}), 'Share16Filled');
export default Share16Filled;
      
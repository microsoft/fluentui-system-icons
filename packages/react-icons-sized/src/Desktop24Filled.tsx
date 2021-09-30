import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 22a.75.75 0 01-.1-1.5H8.5V18H4.25c-1.2 0-2.17-.92-2.24-2.1L2 15.76V5.25c0-1.2.93-2.17 2.1-2.24L4.25 3h15.5c1.19 0 2.16.93 2.24 2.1v10.65c0 1.2-.92 2.17-2.09 2.25h-4.4v2.5h1.75a.75.75 0 01.1 1.5H6.75zM14 18h-4v2.5h4V18z" fill={primaryFill} /></svg>;
}

const Desktop24Filled = wrapIcon(rawSvg({}), 'Desktop24Filled');
export default Desktop24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM14.5 6a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 6H14.5z" fill={primaryFill} /><path d="M17.5 13c1.75 0 3.33-.69 4.5-1.8v4.55c0 1.2-.93 2.17-2.1 2.25h-4.4v2.5h1.75a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5H8.5V18H4.25c-1.2 0-2.17-.92-2.24-2.1L2 15.76V5.25c0-1.2.93-2.17 2.1-2.25h7.92a6.5 6.5 0 005.48 10zM14 18h-4v2.5h4V18z" fill={primaryFill} /></svg>;
}

const DesktopArrowRight24Filled = wrapIcon(rawSvg({}), 'DesktopArrowRight24Filled');
export default DesktopArrowRight24Filled;
      
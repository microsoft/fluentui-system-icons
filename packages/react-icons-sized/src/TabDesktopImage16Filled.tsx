import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h3v1.5C7 4.33 7.67 5 8.5 5H14v7a2 2 0 01-2 2h-1.34c.22-.45.34-.96.34-1.5v-4A3.5 3.5 0 007.5 5h-4c-.54 0-1.05.12-1.5.34V4z" fill={primaryFill} /><path d="M8 2v1.5c0 .28.22.5.5.5H14a2 2 0 00-2-2H8z" fill={primaryFill} /><path d="M8 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M3.5 6A2.5 2.5 0 001 8.5v4A2.5 2.5 0 003.5 15h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 007.5 6h-4zM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v4c0 .23-.05.45-.15.65l-2.29-2.3a1.5 1.5 0 00-2.12 0l-2.3 2.3A1.5 1.5 0 012 12.5v-4zm.85 5.35l2.3-2.29c.2-.2.5-.2.7 0l2.3 2.3c-.2.09-.42.14-.65.14h-4a1.5 1.5 0 01-.65-.15z" fill={primaryFill} /></svg>;
}

const TabDesktopImage16Filled = wrapIcon(rawSvg({}), 'TabDesktopImage16Filled');
export default TabDesktopImage16Filled;
      
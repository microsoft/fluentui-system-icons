import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v2.84c.45-.22.96-.34 1.5-.34h4a3.5 3.5 0 013.5 3.5v4c0 .54-.12 1.05-.34 1.5h2.84a2.5 2.5 0 002.5-2.5V7H9.5A1.5 1.5 0 018 5.5V3H5.5z" fill={primaryFill} /><path d="M9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0014.5 3H9z" fill={primaryFill} /><path d="M9 11.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M4.5 9A2.5 2.5 0 002 11.5v4A2.5 2.5 0 004.5 18h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 008.5 9h-4zM3 11.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v4c0 .23-.05.45-.15.65l-2.29-2.3a1.5 1.5 0 00-2.12 0l-2.3 2.3A1.5 1.5 0 013 15.5v-4zm.85 5.35l2.3-2.29c.2-.2.5-.2.7 0l2.3 2.3c-.2.09-.42.14-.65.14h-4a1.5 1.5 0 01-.65-.15z" fill={primaryFill} /></svg>;
}

const TabDesktopImageFilled = wrapIcon(rawSvg({}), 'TabDesktopImageFilled');
export default TabDesktopImageFilled;
      
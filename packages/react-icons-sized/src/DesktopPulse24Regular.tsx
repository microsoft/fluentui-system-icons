import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 22a.75.75 0 01-.1-1.5H8.5V18H4.25c-1.2 0-2.17-.92-2.24-2.1L2 15.76V13h1.5v2.75c0 .38.28.7.65.74l.1.01h15.5c.38 0 .7-.28.74-.65V13H22v2.75c0 1.2-.92 2.17-2.09 2.25h-4.4v2.5h1.75a.75.75 0 01.1 1.5H6.75zM14 18h-4v2.5h4V18zM3.5 9.5H2V5.25c0-1.2.93-2.17 2.1-2.25h15.65c1.19 0 2.16.92 2.24 2.1v4.4h-1.5V5.25c0-.38-.27-.7-.64-.74l-.1-.01H4.25c-.38 0-.7.28-.74.65l-.01.1V9.5zm6.2-3.03a.75.75 0 00-1.38-.03L6.49 10.5H2.75a.75.75 0 000 1.5h4.23c.3 0 .56-.17.68-.44l1.3-2.89 2.34 5.86a.75.75 0 001.35.1l2.65-4.5 1.09 1.55c.14.2.37.32.61.32h4.25a.75.75 0 000-1.5h-3.86l-1.53-2.18a.75.75 0 00-1.26.05l-2.47 4.19L9.7 6.47z" fill={primaryFill} /></svg>;
}

const DesktopPulse24Regular = wrapIcon(rawSvg({}), 'DesktopPulse24Regular');
export default DesktopPulse24Regular;
      
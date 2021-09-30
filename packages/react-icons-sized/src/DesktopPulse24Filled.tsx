import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 21.25c0 .41.34.75.75.75h10.6a.75.75 0 00-.1-1.5H15.5V18h4.4a2.25 2.25 0 002.1-2.25V13h-5c-.57 0-1.1-.28-1.43-.75l-.2-.27-1.86 3.16a1.75 1.75 0 01-3.13-.24L8.9 11.23l-.33.74c-.29.63-.91 1.03-1.6 1.03H2v2.91A2.25 2.25 0 004.26 18H8.5v2.49H6.65a.75.75 0 00-.65.75zM10 18h4v2.5h-4V18zM22 5.25V9.5H17.9l-1.23-1.75a1.75 1.75 0 00-2.94.11L12.3 10.3l-1.68-4.2a1.75 1.75 0 00-3.22-.07L5.85 9.5H2V5.25c0-1.2.93-2.17 2.1-2.24L4.25 3h15.5c1.19 0 2.16.93 2.24 2.1v.15zM9.7 6.47a.75.75 0 00-1.38-.03L6.49 10.5H2.75a.75.75 0 000 1.5h4.23c.3 0 .56-.17.68-.44l1.3-2.89 2.34 5.86a.75.75 0 001.35.1l2.65-4.5 1.09 1.55c.14.2.37.32.61.32h4.25a.75.75 0 000-1.5h-3.86l-1.53-2.18a.75.75 0 00-1.26.05l-2.47 4.19L9.7 6.47z" fill={primaryFill} /></svg>;
}

const DesktopPulse24Filled = wrapIcon(rawSvg({}), 'DesktopPulse24Filled');
export default DesktopPulse24Filled;
      
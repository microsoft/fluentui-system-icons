import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 5.5a.75.75 0 00-.75.75v1a.75.75 0 001.13.64c-.3.67-.71 1.13-.91 1.33a.75.75 0 101.06 1.06A5.85 5.85 0 008.5 6.25a.75.75 0 00-.75-.75h-1.5zm4 0a.75.75 0 00-.75.75v1a.75.75 0 001.13.64c-.3.67-.71 1.13-.91 1.33a.75.75 0 101.06 1.06 5.85 5.85 0 001.72-4.03.75.75 0 00-.75-.75h-1.5zM2 4.25C2 3.01 3 2 4.25 2h9c1.24 0 2.25 1 2.25 2.25v7.5c0 1.24-1 2.25-2.25 2.25h-1.94l-1.9 3.6a.75.75 0 01-1.32 0L6.19 14H4.25C3.01 14 2 13 2 11.75v-7.5zm2.25-.75a.75.75 0 00-.75.75v7.5c0 .41.34.75.75.75h2.4c.27 0 .53.15.66.4l1.44 2.74 1.44-2.74c.13-.25.39-.4.67-.4h2.39c.41 0 .75-.34.75-.75v-7.5a.75.75 0 00-.75-.75h-9zm2.13 13H2.75a.75.75 0 000 1.5h4.42l-.8-1.5zm3.95 1.5h10.92a.75.75 0 000-1.5H11.12l-.79 1.5zm-7.58 2.5a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-12z" fill={primaryFill} /></svg>;
}

const TooltipQuote24Regular = wrapIcon(rawSvg({}), 'TooltipQuote24Regular');
export default TooltipQuote24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25c0-.41.34-.75.75-.75H12V8c0 1.1.9 2 2 2h4.5v9.75c0 .41-.34.75-.75.75h-6.52L9.73 22h8.02c1.24 0 2.25-1 2.25-2.25V9.66c0-.46-.18-.9-.51-1.23L13.57 2.5A1.75 1.75 0 0012.34 2H6.25C5.01 2 4 3 4 4.25v6.95c.5-.07 1-.05 1.5.05v-7zM17.44 8.5H14a.5.5 0 01-.5-.5V4.56l3.94 3.94zM3.12 14.28a2.1 2.1 0 012.98 0l.4.4c.3.3.77.3 1.06 0l.37-.37A2.1 2.1 0 0111.5 16h1.5a3.6 3.6 0 00-5.98-2.9A3.6 3.6 0 001.01 16h1.5a2.1 2.1 0 01.61-1.72zm2.25 5.22H3.25l3.25 3.25a.75.75 0 001.06 0l3.26-3.25H8.69l-1.66 1.66-1.66-1.66zm.25-4.17a.75.75 0 00-1.3.08L3.55 17H1.75a.75.75 0 000 1.5H4c.28 0 .54-.16.67-.41l.42-.85 1.29 1.93a.75.75 0 001.18.08l1.46-1.65.69.72c.15.15.35.23.56.23l2-.05a.75.75 0 00-.04-1.5l-1.67.04-1.02-1.06a.75.75 0 00-1.1.02l-1.35 1.53-1.47-2.2z" fill={primaryFill} /></svg>;
}

const DocumentHeartPulse24Regular = wrapIcon(rawSvg({}), 'DocumentHeartPulse24Regular');
export default DocumentHeartPulse24Regular;
      
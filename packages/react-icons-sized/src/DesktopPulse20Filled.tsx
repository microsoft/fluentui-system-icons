import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h12a2 2 0 012 2v4h-2.57l-1.09-2.17a1.5 1.5 0 00-2.68 0L10.32 8.5 8.93 4.05a1.5 1.5 0 00-2.82-.1L4.49 8H2V4zm12.5 7H18v2a2 2 0 01-2 2h-3v2h1.5a.5.5 0 010 1h-9a.5.5 0 010-1H7v-2H4a2 2 0 01-2-2v-2h3.5a1.5 1.5 0 001.4-.94l.43-1.09 1.24 3.98a1.5 1.5 0 002.77.22L13 9.85l.16.32c.25.5.77.83 1.34.83zM12 17v-2H8v2h4zM7.98 4.35a.5.5 0 00-.94-.04L5.16 9H2.5a.5.5 0 000 1h3a.5.5 0 00.47-.31l1.47-3.7 2.08 6.66a.5.5 0 00.93.07L13 7.62l1.05 2.1a.5.5 0 00.45.28h3a.5.5 0 000-1h-2.7l-1.35-2.72a.5.5 0 00-.9 0l-2.44 4.89-2.13-6.82z" fill={primaryFill} /></svg>;
}

const DesktopPulse20Filled = wrapIcon(rawSvg({}), 'DesktopPulse20Filled');
export default DesktopPulse20Filled;
      
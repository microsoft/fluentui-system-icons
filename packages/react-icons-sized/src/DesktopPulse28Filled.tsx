import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 25h11.6a.75.75 0 00.65-.75v-.1a.75.75 0 00-.75-.65H18V21h5.75c1.24 0 2.25-1 2.25-2.25V14.5h-6.25c-.66 0-1.27-.37-1.57-.97l-.13-.26-1.96 4.22a1.75 1.75 0 01-3.21-.09l-2.45-6.1-.93 2.15c-.28.64-.9 1.05-1.6 1.05H2v4.25C2 20 3 21 4.25 21H10v2.5H8.15a.75.75 0 00.1 1.5zm3.25-4h5v2.5h-5V21zm9.33-10H26V5.25C26 4.01 25 3 23.75 3H4.25C3.01 3 2 4 2 5.25V11h4.75l2.14-4.95a1.75 1.75 0 013.23.05l2.5 6.25 1.8-3.84a1.75 1.75 0 013.15-.04L20.83 11zM11.2 6.47a.75.75 0 00-1.39-.02L7.41 12H2.74a.75.75 0 000 1.5h5.14c.3 0 .57-.18.7-.45l1.88-4.35 3.33 8.33a.75.75 0 001.38.04l2.84-6.1 1.06 2.12c.13.25.39.41.67.41h5.5a.75.75 0 000-1.5h-5.04l-1.54-3.09a.75.75 0 00-1.35.02l-2.77 5.93-3.35-8.39z" fill={primaryFill} /></svg>;
}

const DesktopPulse28Filled = wrapIcon(rawSvg({}), 'DesktopPulse28Filled');
export default DesktopPulse28Filled;
      
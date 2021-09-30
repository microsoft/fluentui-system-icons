import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.01 2a2 2 0 00-2 2v1.5h1V4a1 1 0 011-1h8a1 1 0 011 1v1.5H14V4a2 2 0 00-2-2H4.01zm-2 8v-.75h1v.74a1 1 0 001 1h8a1 1 0 001-1v-.74H14v.74a2 2 0 01-2 2h-2V13h1.5a.5.5 0 010 1H4.53a.5.5 0 010-1h1.5v-1h-2a2 2 0 01-2-2zm7 2H7v1h2v-1zM6.47 4.3a.5.5 0 00-.9-.04L4.2 7H2.5a.5.5 0 000 1H4.5a.5.5 0 00.45-.28l1-2 1.58 3.96a.5.5 0 00.91.04L10 6.62l.56 1.1A.5.5 0 0011 8h2.5a.5.5 0 000-1h-2.19l-.86-1.73a.5.5 0 00-.9 0l-1.5 3-1.58-3.96z" fill={primaryFill} /></svg>;
}

const DesktopPulse16Regular = wrapIcon(rawSvg({}), 'DesktopPulse16Regular');
export default DesktopPulse16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.02 13.72l1.13 1.13a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l1.13 1.13A2 2 0 002 4v1.5a.5.5 0 001 0V4a1 1 0 01.03-.26L4.7 5.41A4.95 4.95 0 003.04 7.3v.01a.5.5 0 00.92.38v-.01L4 7.62c.02-.06.07-.14.13-.24a3.73 3.73 0 011.3-1.24l.95.95a2.5 2.5 0 103.53 3.53l2.35 2.35A1 1 0 0112 13h-1.5a.5.5 0 000 1H12a2 2 0 001.02-.28z" fill={primaryFill} /><path d="M6.73 4.61l.9.9L8 5.5a4.6 4.6 0 013.23 1.12 3.73 3.73 0 01.8 1.06s.25.45.66.28a.5.5 0 00.27-.65c-.1-.22 0 0 0 0V7.3a1.8 1.8 0 00-.06-.13c-.04-.08-.1-.2-.19-.33a4.73 4.73 0 00-.81-.96A5.6 5.6 0 008 4.5c-.46 0-.88.04-1.27.11z" fill={primaryFill} /><path d="M13 10.88l1 1V10.5a.5.5 0 00-1 0v.38z" fill={primaryFill} /><path d="M4.12 2l1 1h.38a.5.5 0 000-1H4.12z" fill={primaryFill} /><path d="M2 12c0 1.1.9 2 2 2h1.5a.5.5 0 000-1H4a1 1 0 01-1-1v-1.5a.5.5 0 00-1 0V12z" fill={primaryFill} /><path d="M12 2a2 2 0 012 2v1.5a.5.5 0 01-1 0V4a1 1 0 00-1-1h-1.5a.5.5 0 010-1H12z" fill={primaryFill} /></svg>;
}

const EyeTrackingOff16Filled = wrapIcon(rawSvg({}), 'EyeTrackingOff16Filled');
export default EyeTrackingOff16Filled;
      
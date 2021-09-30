import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v3.09a1.5 1.5 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3.09a1.5 1.5 0 00-1 0V4z" fill={primaryFill} /><path d="M5 13.91c.32.12.68.12 1 0V16a1 1 0 001 1h6a1 1 0 001-1v-2.09c.32.12.68.12 1 0V16a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.09z" fill={primaryFill} /><path d="M3.15 10.15l2-2a.5.5 0 11.7.7L4.71 10H7.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2A.5.5 0 013 10.5a.5.5 0 01.14-.35z" fill={primaryFill} /><path d="M14.85 12.85l2-2a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 10H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7z" fill={primaryFill} /></svg>;
}

const PhoneSpanOut20Regular = wrapIcon(rawSvg({}), 'PhoneSpanOut20Regular');
export default PhoneSpanOut20Regular;
      
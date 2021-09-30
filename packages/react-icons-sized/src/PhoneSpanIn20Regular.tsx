import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v3.09a1.5 1.5 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3.09a1.5 1.5 0 00-1 0V4z" fill={primaryFill} /><path d="M5 13.91V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09a1.5 1.5 0 01-1 0V16a1 1 0 01-1 1H7a1 1 0 01-1-1v-2.09a1.5 1.5 0 01-1 0z" fill={primaryFill} /><path d="M7.85 10.85l-2 2a.5.5 0 01-.7-.7L6.29 11H3.5a.5.5 0 010-1h2.8L5.14 8.85a.5.5 0 11.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35z" fill={primaryFill} /><path d="M14.15 8.15l-2 2a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 11h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7z" fill={primaryFill} /></svg>;
}

const PhoneSpanIn20Regular = wrapIcon(rawSvg({}), 'PhoneSpanIn20Regular');
export default PhoneSpanIn20Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a2 2 0 00-2 2v3.09a1.5 1.5 0 011.56.35l2 2a1.5 1.5 0 010 2.12l-2 2a1.5 1.5 0 01-1.56.35V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09a1.5 1.5 0 01-1.56-.35l-2-2a1.5 1.5 0 010-2.12l2-2A1.5 1.5 0 0115 7.09V4a2 2 0 00-2-2H7z" fill={primaryFill} /><path d="M14.85 8.15c.2.2.2.5 0 .7L13.71 10h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M5.15 8.85a.5.5 0 11.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L6.29 11H3.5a.5.5 0 010-1h2.8L5.14 8.85z" fill={primaryFill} /></svg>;
}

const PhoneSpanIn20Filled = wrapIcon(rawSvg({}), 'PhoneSpanIn20Filled');
export default PhoneSpanIn20Filled;
      
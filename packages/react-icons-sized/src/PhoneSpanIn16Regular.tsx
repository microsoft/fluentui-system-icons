import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h4a2 2 0 012 2v2.09c-.2.07-.4.19-.56.35l-.44.44V3a1 1 0 00-1-1H6a1 1 0 00-1 1v2.88l-.44-.44A1.5 1.5 0 004 5.09V3z" fill={primaryFill} /><path d="M11 11.12V13a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.88l-.44.44a1.5 1.5 0 01-.56.35V13c0 1.1.9 2 2 2h4a2 2 0 002-2v-1.09a1.5 1.5 0 01-.56-.35l-.44-.44z" fill={primaryFill} /><path d="M3.15 6.85a.5.5 0 11.7-.7l2 2a.5.5 0 010 .7l-2 2a.5.5 0 01-.7-.7L4.29 9H1.5a.5.5 0 010-1h2.8L3.14 6.85z" fill={primaryFill} /><path d="M12.85 6.15c.2.2.2.5 0 .7L11.71 8h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const PhoneSpanIn16Regular = wrapIcon(rawSvg({}), 'PhoneSpanIn16Regular');
export default PhoneSpanIn16Regular;
      
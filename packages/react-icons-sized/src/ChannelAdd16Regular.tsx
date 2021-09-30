import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.25c-.13 0-.25.01-.37.04A2 2 0 013.5 1h5a2 2 0 012 2v2c-.34 0-.68.03-1 .1V3a1 1 0 00-1-1h-5a1 1 0 00-.8.4c-.21-.1-.45-.15-.7-.15z" fill={primaryFill} /><path d="M5.2 9H3.5a1 1 0 01-1-1V5.68a1.75 1.75 0 01-1 0V8c0 1.1.9 2 2 2h1.52c.03-.34.1-.68.19-1z" fill={primaryFill} /><path d="M4 4.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 6a.5.5 0 000 1H6a.5.5 0 000-1H4.5z" fill={primaryFill} /><path d="M2.75 4a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H11V8.5z" fill={primaryFill} /></svg>;
}

const ChannelAdd16Regular = wrapIcon(rawSvg({}), 'ChannelAdd16Regular');
export default ChannelAdd16Regular;
      
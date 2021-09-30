import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.25c-.13 0-.25.01-.37.04A2 2 0 013.5 1h5a2 2 0 012 2v2a5.5 5.5 0 00-5.48 5H3.5a2 2 0 01-2-2V5.68A1.75 1.75 0 102 2.25zM4.5 4a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 6.5c0 .28.22.5.5.5H6a.5.5 0 000-1H4.5a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M2 4.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L9.71 11h2.79a.5.5 0 000-1H9.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const ChannelArrowLeft16Filled = wrapIcon(rawSvg({}), 'ChannelArrowLeft16Filled');
export default ChannelArrowLeft16Filled;
      
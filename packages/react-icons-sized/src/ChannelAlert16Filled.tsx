import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.63 2.29A1.76 1.76 0 013.75 4 1.75 1.75 0 011.5 5.68V8c0 1.1.9 2 2 2h1.52c.26-2.8 2.61-5 5.48-5V3a2 2 0 00-2-2h-5a2 2 0 00-1.87 1.29zM4 4.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4.5 7a.5.5 0 010-1H6a.5.5 0 010 1H4.5z" fill={primaryFill} /><path d="M2.75 4a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12.5 9a2 2 0 10-4 0v1.8l-.35.35a.5.5 0 00.35.85h4a.5.5 0 00.35-.85l-.35-.36V9zm-3.41 4a1.5 1.5 0 002.82 0H9.1z" fill={primaryFill} /></svg>;
}

const ChannelAlert16Filled = wrapIcon(rawSvg({}), 'ChannelAlert16Filled');
export default ChannelAlert16Filled;
      
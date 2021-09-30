import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9A3.25 3.25 0 0121 6.07V12.02a6.47 6.47 0 00-8.2.98H8.76l-.1.01a.75.75 0 000 1.49h3.08a6.47 6.47 0 00.3 6.5H6.24a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 10.22-4.3A3.25 3.25 0 016.05 3l.2-.01h11.5zm.75 17h-2v.12a1 1 0 002-.12zm-1-6h-.16c-.94.1-1.67.77-1.81 1.64l-.02.16v1.5l-.86.85a.5.5 0 00.26.84L15 19h5a.5.5 0 00.41-.79l-.06-.06-.85-.85v-1.5a1.98 1.98 0 00-2-1.8zm-2.25-4.5h-6.6a.75.75 0 000 1.49H15.35a.75.75 0 00-.1-1.5zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ChannelAlert24Filled = wrapIcon(rawSvg({}), 'ChannelAlert24Filled');
export default ChannelAlert24Filled;
      
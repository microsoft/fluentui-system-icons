import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.25c-.13 0-.25.01-.37.04A2 2 0 013.5 1h5a2 2 0 012 2v2a5.5 5.5 0 00-5.48 5H3.5a2 2 0 01-2-2V5.68A1.75 1.75 0 102 2.25zM4.5 4a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 6.5c0 .28.22.5.5.5H6a.5.5 0 000-1H4.5a.5.5 0 00-.5.5zM2 4.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4h-4a.5.5 0 010-1h4a.5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const ChannelSubtract16Filled = wrapIcon(rawSvg({}), 'ChannelSubtract16Filled');
export default ChannelSubtract16Filled;
      
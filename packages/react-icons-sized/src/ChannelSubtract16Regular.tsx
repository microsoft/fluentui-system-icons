import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.63 2.29a1.76 1.76 0 011.07.1A1 1 0 013.5 2h5a1 1 0 011 1v2.1c.32-.07.66-.1 1-.1V3a2 2 0 00-2-2h-5a2 2 0 00-1.87 1.29zM5.03 10c.02-.34.09-.68.18-1H3.5a1 1 0 01-1-1V5.68a1.75 1.75 0 01-1 0V8c0 1.1.9 2 2 2h1.52zM4.5 4a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 6.5c0-.28.22-.5.5-.5H6a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zM2 4.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4h-4a.5.5 0 010-1h4a.5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const ChannelSubtract16Regular = wrapIcon(rawSvg({}), 'ChannelSubtract16Regular');
export default ChannelSubtract16Regular;
      
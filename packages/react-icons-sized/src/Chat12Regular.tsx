import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5c0-.28.22-.5.5-.5h3a.5.5 0 110 1h-3a.5.5 0 01-.5-.5zM4.5 7a.5.5 0 000 1h2a.5.5 0 000-1h-2zM1 6a5 5 0 112.6 4.38l-1.95.6a.5.5 0 01-.63-.63l.6-1.95A4.98 4.98 0 011 6zm5-4a4 4 0 00-3.42 6.08c.08.12.1.27.05.4l-.38 1.26 1.26-.38a.5.5 0 01.4.05A4 4 0 106 2z" fill={primaryFill} /></svg>;
}

const Chat12Regular = wrapIcon(rawSvg({}), 'Chat12Regular');
export default Chat12Regular;
      
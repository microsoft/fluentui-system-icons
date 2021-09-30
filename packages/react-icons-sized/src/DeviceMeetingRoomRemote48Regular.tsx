import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 6a5.94 5.94 0 00-5.73 4.4L7.2 17.03c.18-.02.36-.03.55-.03h2.04l1.6-5.95A3.44 3.44 0 0114.7 8.5h18.58a3.44 3.44 0 013.32 2.55l4.76 17.77a3.72 3.72 0 01-3.6 4.68H21V36h16.78a6.22 6.22 0 006-7.83L39.04 10.4A5.94 5.94 0 0033.29 6H14.71zm20.05 34.5H21l.01-.25V38h13.75a1.25 1.25 0 010 2.5zM11.5 29a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM4 22.75A3.75 3.75 0 017.75 19h7.5A3.75 3.75 0 0119 22.75v17.5A3.75 3.75 0 0115.25 44h-7.5A3.75 3.75 0 014 40.25v-17.5zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v17.5c0 .69.56 1.25 1.25 1.25h7.5c.7 0 1.25-.56 1.25-1.25v-17.5c0-.69-.56-1.25-1.25-1.25h-7.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote48Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote48Regular');
export default DeviceMeetingRoomRemote48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.74 3.46A2 2 0 014.67 2h6.67a2 2 0 011.92 1.46l1.66 5.9a2.08 2.08 0 01-2 2.64H7v-1h5.92c.71 0 1.23-.68 1.04-1.37l-1.66-5.9a1 1 0 00-.96-.73H4.67a1 1 0 00-.96.73L3.35 5H2.3l.44-1.54zM6.95 14h4.55a.5.5 0 100-1H7v.5c0 .17-.02.34-.05.5zM3.5 9.5a.75.75 0 100-1.5.75.75 0 000 1.5zM1 7.5C1 6.67 1.67 6 2.5 6h2C5.33 6 6 6.67 6 7.5v6c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 011 13.5v-6zM2.5 7a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-2z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote16Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote16Regular');
export default DeviceMeetingRoomRemote16Regular;
      
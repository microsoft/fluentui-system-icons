import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.66 4.95A2.5 2.5 0 016.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0115.48 15H9V9.5A2.5 2.5 0 006.5 7h-3c-.1 0-.21 0-.31.02l.47-2.07z" fill={primaryFill} /><path d="M9 16.5c0 .17-.02.34-.05.5h5.55a.5.5 0 000-1H9v.5z" fill={primaryFill} /><path d="M5 12a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 012 16.5v-7zM3.5 9a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemoteFilled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemoteFilled');
export default DeviceMeetingRoomRemoteFilled;
      
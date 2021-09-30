import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.67 2a2 2 0 00-1.93 1.46l-1.66 5.9a2.08 2.08 0 002 2.64h9.84a2.08 2.08 0 002-2.64l-1.66-5.9A2 2 0 0011.33 2H4.67zM3.7 3.73A1 1 0 014.67 3h6.66a1 1 0 01.97.73l1.66 5.9c.2.69-.33 1.37-1.04 1.37H3.08c-.71 0-1.23-.68-1.04-1.37l1.66-5.9zM4.5 13a.5.5 0 100 1h7a.5.5 0 100-1h-7z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom16Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoom16Regular');
export default DeviceMeetingRoom16Regular;
      
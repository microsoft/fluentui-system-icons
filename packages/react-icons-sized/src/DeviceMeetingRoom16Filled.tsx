import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.74 3.46A2 2 0 014.67 2h6.66a2 2 0 011.93 1.46l1.66 5.9a2.08 2.08 0 01-2 2.64H3.08a2.08 2.08 0 01-2-2.64l1.66-5.9zM4.5 13a.5.5 0 100 1h7a.5.5 0 100-1h-7z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom16Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoom16Filled');
export default DeviceMeetingRoom16Filled;
      
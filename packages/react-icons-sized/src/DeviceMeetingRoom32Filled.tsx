import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.37 7.11A4.25 4.25 0 019.47 4h13.06c1.91 0 3.58 1.27 4.1 3.11l3.22 11.6A4.18 4.18 0 0125.82 24H6.18a4.18 4.18 0 01-4.03-5.3L5.37 7.11zM8 26a1 1 0 100 2h16a1 1 0 100-2H8z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom32Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoom32Filled');
export default DeviceMeetingRoom32Filled;
      
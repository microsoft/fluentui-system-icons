import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.47 4a4.25 4.25 0 00-4.1 3.11l-3.22 11.6A4.18 4.18 0 006.18 24h19.64a4.18 4.18 0 004.03-5.3L26.63 7.11A4.25 4.25 0 0022.53 4H9.47zM7.3 7.65A2.25 2.25 0 019.47 6h13.06c1.01 0 1.9.67 2.17 1.65l3.22 11.59a2.18 2.18 0 01-2.1 2.76H6.18a2.18 2.18 0 01-2.1-2.76L7.3 7.64zM8 26a1 1 0 100 2h16a1 1 0 100-2H8z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom32Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoom32Regular');
export default DeviceMeetingRoom32Regular;
      
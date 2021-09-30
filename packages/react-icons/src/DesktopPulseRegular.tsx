import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v4h1V4a1 1 0 011-1h12a1 1 0 011 1v4h1V4a2 2 0 00-2-2H4zM2 13v-2h1v2a1 1 0 001 1h12a1 1 0 001-1v-2h1v2a2 2 0 01-2 2h-3v2h1.5a.5.5 0 010 1h-9a.5.5 0 010-1H7v-2H4a2 2 0 01-2-2zm10 2H8v2h4v-2zM7.98 4.35a.5.5 0 00-.94-.04L5.16 9H2.5a.5.5 0 000 1h3a.5.5 0 00.46-.31l1.48-3.7 2.08 6.66a.5.5 0 00.93.07L13 7.62l1.05 2.1a.5.5 0 00.45.28h3a.5.5 0 100-1h-2.7l-1.35-2.72a.5.5 0 00-.9 0l-2.44 4.89-2.13-6.82z" fill={primaryFill} /></svg>;
}

const DesktopPulseRegular = wrapIcon(rawSvg({}), 'DesktopPulseRegular');
export default DesktopPulseRegular;
      
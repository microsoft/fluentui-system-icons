import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v3a5 5 0 011-.58V4a1 1 0 011-1h3v.75C7 4.44 7.56 5 8.25 5H13v7a1 1 0 01-1 1H9.58A5 5 0 019 14h3a2 2 0 002-2V4a2 2 0 00-2-2H4zm9 2H8.25A.25.25 0 018 3.75V3h4a1 1 0 011 1z" fill={primaryFill} /><path d="M7.75 6.75c.28 0 .5.22.5.5V9a.5.5 0 01-.5.5H6a.5.5 0 010-1h.66A3 3 0 108 11a.5.5 0 011 0 4 4 0 11-1.75-3.3v-.45c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const TabDesktopArrowClockwise16Regular = wrapIcon(rawSvg({}), 'TabDesktopArrowClockwise16Regular');
export default TabDesktopArrowClockwise16Regular;
      
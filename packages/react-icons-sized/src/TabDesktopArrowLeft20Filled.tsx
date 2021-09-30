import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v4.1a5.5 5.5 0 017.4 7.4h4.1a2.5 2.5 0 002.5-2.5V7H9.5A1.5 1.5 0 018 5.5V3H5.5z" fill={primaryFill} /><path d="M9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0014.5 3H9z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L4.71 15H7.5a.5.5 0 000-1H4.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const TabDesktopArrowLeft20Filled = wrapIcon(rawSvg({}), 'TabDesktopArrowLeft20Filled');
export default TabDesktopArrowLeft20Filled;
      
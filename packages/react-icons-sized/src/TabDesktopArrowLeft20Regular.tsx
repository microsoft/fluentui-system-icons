import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-4.1c.16-.32.3-.65.4-1h3.7c.82 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 018 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.7c-.35.1-.69.24-1 .4V5.5zM16 6v-.5c0-.83-.68-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L4.71 15H7.5a.5.5 0 000-1H4.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const TabDesktopArrowLeft20Regular = wrapIcon(rawSvg({}), 'TabDesktopArrowLeft20Regular');
export default TabDesktopArrowLeft20Regular;
      
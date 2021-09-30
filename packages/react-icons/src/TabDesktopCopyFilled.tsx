import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5A2.5 2.5 0 017.5 2H9v2.5c0 .83.67 1.5 1.5 1.5H18v6.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 015 12.5v-8z" fill={primaryFill} /><path d="M10 4.5V2h5.5A2.5 2.5 0 0118 4.5V5h-7.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M12.5 18a2.5 2.5 0 002.45-2H7.5A3.5 3.5 0 014 12.5V5.05A2.5 2.5 0 002 7.5V14a4 4 0 004 4h6.5z" fill={primaryFill} /></svg>;
}

const TabDesktopCopyFilled = wrapIcon(rawSvg({}), 'TabDesktopCopyFilled');
export default TabDesktopCopyFilled;
      
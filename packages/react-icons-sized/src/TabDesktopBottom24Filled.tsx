import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H14.5v-3.25c0-1.24-1-2.25-2.25-2.25H3V6.25zM3 17v.75C3 19.55 4.46 21 6.25 21H13v-3.25a.75.75 0 00-.75-.75H3z" fill={primaryFill} /></svg>;
}

const TabDesktopBottom24Filled = wrapIcon(rawSvg({}), 'TabDesktopBottom24Filled');
export default TabDesktopBottom24Filled;
      
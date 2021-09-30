import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 11a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13 12a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 018 5.5V4H5.5zM16 5.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16v-.5z" fill={primaryFill} /></svg>;
}

const TabDesktopNewPageRegular = wrapIcon(rawSvg({}), 'TabDesktopNewPageRegular');
export default TabDesktopNewPageRegular;
      
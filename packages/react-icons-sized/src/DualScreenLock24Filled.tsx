import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5h-.5A1.5 1.5 0 0015 6.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H22V4a2.5 2.5 0 00-5 0v1zm1.5-1a1 1 0 112 0v1h-2V4zm2 5a1 1 0 11-2 0 1 1 0 012 0zM13 6h1.05c-.03.16-.05.33-.05.5v5a2.5 2.5 0 002.5 2.5H22v6.25c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V6.02L13 6zm3.24 11.5h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1zM11 6c.08 0 .16 0 .24.02v15.96L11 22H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6H11zM9.24 17.5h-1.6a.75.75 0 000 1.5H9.34a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
}

const DualScreenLock24Filled = wrapIcon(rawSvg({}), 'DualScreenLock24Filled');
export default DualScreenLock24Filled;
      
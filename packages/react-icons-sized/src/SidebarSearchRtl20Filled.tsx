import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v7a4.5 4.5 0 10-4.5 4.5h-7A2.5 2.5 0 013 14.5v-9zm3 1v7a.5.5 0 001 0v-7a.5.5 0 00-1 0z" fill={primaryFill} /><path d="M16 12.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L14.6 15.3a3.5 3.5 0 111.4-2.8zm-1 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const SidebarSearchRtl20Filled = wrapIcon(rawSvg({}), 'SidebarSearchRtl20Filled');
export default SidebarSearchRtl20Filled;
      
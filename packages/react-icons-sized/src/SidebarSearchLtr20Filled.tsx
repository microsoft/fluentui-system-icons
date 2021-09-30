import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-2.59a1.5 1.5 0 00-.35-.56l-2-2A4.49 4.49 0 005.5 8c-.93 0-1.78.28-2.5.76V5.5zm10 1v7a.5.5 0 001 0v-7a.5.5 0 00-1 0z" fill={primaryFill} /><path d="M9 12.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L7.6 15.3A3.5 3.5 0 119 12.5zm-1 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const SidebarSearchLtr20Filled = wrapIcon(rawSvg({}), 'SidebarSearchLtr20Filled');
export default SidebarSearchLtr20Filled;
      
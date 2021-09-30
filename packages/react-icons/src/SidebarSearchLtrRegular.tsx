import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-2.59a1.5 1.5 0 00-.35-.56l-.44-.44h3.38c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v2.76c-.36.12-.7.3-1 .5V5.5z" fill={primaryFill} /><path d="M8.3 14.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.6zm-2.8.4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /><path d="M13.5 6a.5.5 0 00-.5.5v7a.5.5 0 001 0v-7a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const SidebarSearchLtrRegular = wrapIcon(rawSvg({}), 'SidebarSearchLtrRegular');
export default SidebarSearchLtrRegular;
      
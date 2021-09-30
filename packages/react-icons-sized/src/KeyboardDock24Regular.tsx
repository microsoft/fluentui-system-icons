import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 12H6.65a.75.75 0 00.1 1.5h10.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M17.5 9.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M11.5 9.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M8.5 9.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M14.5 9.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M7 6.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M10 6.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M13 6.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M16 6.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M19 6.5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M22 4.75c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 2.5 2 3.5 2 4.75v9.5c0 1.25 1.01 2.25 2.25 2.25h7v2.94l-.84-.84-.08-.07a.75.75 0 00-.98 1.13l2.12 2.12.09.07c.11.09.25.14.39.15h.1l.1-.02c.15-.03.28-.1.38-.2l2.12-2.12.08-.09c.21-.29.19-.7-.08-.97l-.08-.07a.75.75 0 00-.98.07l-.84.84V16.5h7c1.24 0 2.25-1 2.25-2.25v-9.5zM12.75 15h-8.5a.75.75 0 01-.75-.75v-9.5c0-.41.34-.75.75-.75h15.5c.41 0 .75.34.75.75v9.5c0 .42-.34.75-.75.75h-7z" fill={primaryFill} /></svg>;
}

const KeyboardDock24Regular = wrapIcon(rawSvg({}), 'KeyboardDock24Regular');
export default KeyboardDock24Regular;
      
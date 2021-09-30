import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 12h2.5a.75.75 0 01.1 1.5H3.5V19h1.75c.38 0 .7.28.74.65v.1c0 .38-.27.7-.64.74l-.1.01h-2.5a.75.75 0 01-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.75h.1zm18.5 5.5a.75.75 0 01.1 1.5H7.75a.75.75 0 01-.1-1.5h13.6zm0-4a.75.75 0 01.1 1.5H7.75a.75.75 0 01-.1-1.5h13.6zm-18.5-11l2.5.01a.75.75 0 01.1 1.5H3.5v5.48h1.75c.38 0 .7.29.74.65v.1c0 .38-.27.7-.64.75h-2.6a.75.75 0 01-.74-.64l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01zM21.25 8a.75.75 0 01.1 1.5H7.75a.75.75 0 01-.1-1.49h13.6zm0-4a.75.75 0 01.1 1.5H7.75a.75.75 0 01-.1-1.49h13.6z" fill={primaryFill} /></svg>;
}

const GroupList24Regular = wrapIcon(rawSvg({}), 'GroupList24Regular');
export default GroupList24Regular;
      
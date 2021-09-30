import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A3.75 3.75 0 003 6.75v14.5A3.75 3.75 0 006.75 25h8.5c1 0 1.96-.4 2.66-1.1l6-6c.7-.7 1.09-1.65 1.09-2.64V6.75A3.75 3.75 0 0021.25 3H6.75zM4.5 6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25V15h-4.75A3.75 3.75 0 0015 18.75v4.75H6.75c-1.24 0-2.25-1-2.25-2.25V6.75zm12 16.38v-4.38c0-1.24 1-2.25 2.25-2.25h4.38c-.09.12-.18.24-.29.35l-6 6c-.1.1-.22.2-.34.28z" fill={primaryFill} /></svg>;
}

const Note28Regular = wrapIcon(rawSvg({}), 'Note28Regular');
export default Note28Regular;
      
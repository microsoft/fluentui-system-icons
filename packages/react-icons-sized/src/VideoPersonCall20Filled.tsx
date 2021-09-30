import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v3.4c-.14-.06-.53-.2-1-.18V5.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1.07c-1.04.04-1.53.8-1.83 1.24l-.13.19H3.5A1.5 1.5 0 012 14.5v-9z" fill={primaryFill} /><path d="M12.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill={primaryFill} /><path d="M15.83 11.26l.4-.94a.96.96 0 011.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 01-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 01.98-.4l.1.02 1.05.35a4.03 4.03 0 001.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1z" fill={primaryFill} /></svg>;
}

const VideoPersonCall20Filled = wrapIcon(rawSvg({}), 'VideoPersonCall20Filled');
export default VideoPersonCall20Filled;
      
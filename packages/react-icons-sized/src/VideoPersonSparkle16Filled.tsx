import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.22 3h10.03A1.75 1.75 0 0115 4.75v6.5A1.75 1.75 0 0113.25 13H2.76a1.75 1.75 0 01-1.75-1.75V7.49a1.22 1.22 0 001 .51v3.25a.75.75 0 00.75.75h2.25v-1a1 1 0 011-1h4a1 1 0 011 1v1h2.24a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75H4.5c-.1-.07-.2-.13-.32-.17l-.04-.02H4.1l-.58-.2a.27.27 0 01-.1-.05.28.28 0 01-.06-.1L3.22 3zM1.28 5.73a1.24 1.24 0 00-.27-.2L1 5.54a1.16 1.16 0 00-.23-.1l-.6-.2a.24.24 0 01-.13-.1.24.24 0 010-.27.24.24 0 01.12-.09l.61-.2a1.29 1.29 0 00.79-.78v-.02l.2-.6a.24.24 0 01.37-.12c.04.02.07.06.09.11l.2.61a1.3 1.3 0 00.3.5c.14.13.31.24.5.3l.61.2h.01c.05.01.09.04.12.09a.24.24 0 01-.12.36l-.6.2c-.2.06-.36.17-.5.3-.14.14-.24.31-.3.5l-.2.6v.02a.26.26 0 01-.1.1.24.24 0 01-.27 0 .25.25 0 01-.1-.11l-.2-.61a1.28 1.28 0 00-.3-.5zM10 7a2 2 0 10-4 0 2 2 0 004 0zm-6.11.08c0-.02.02-.04.04-.06l.03-.01L4 7c.02 0 .05 0 .07.02l.02.02.02.04.1.3a.64.64 0 00.4.4l.3.1h.02l.02.02.03.03c.02.02.02.04.03.07 0 .03-.01.05-.03.07a.12.12 0 01-.05.04l-.31.1a.64.64 0 00-.4.4l-.1.31c0 .02-.02.04-.04.06A.12.12 0 014 9a.12.12 0 01-.12-.08l-.1-.3a.63.63 0 00-.4-.4l-.3-.1a.12.12 0 010-.23l.3-.1a.64.64 0 00.4-.4l.1-.3z" fill={primaryFill} /></svg>;
}

const VideoPersonSparkle16Filled = wrapIcon(rawSvg({}), 'VideoPersonSparkle16Filled');
export default VideoPersonSparkle16Filled;
      
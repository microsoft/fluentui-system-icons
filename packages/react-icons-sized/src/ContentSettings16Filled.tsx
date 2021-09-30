import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h6.5A2.75 2.75 0 0114 4.75v1.5a5.5 5.5 0 00-1.5-.88V5h-9v6.25c0 .7.56 1.25 1.25 1.25h.62c.22.55.52 1.05.89 1.5H4.75A2.75 2.75 0 012 11.25v-6.5zM5 6h2.34c-.4.28-.77.62-1.08 1H5.5v1.2a5.48 5.48 0 00-.41 3.3h-.1a.5.5 0 01-.5-.5V6.5c0-.28.23-.5.5-.5zm1.5 2.72l.36.35a2 2 0 010 2.86l-.36.35c.13.31.3.6.49.87l.4-.11a2 2 0 012.51 1.45l.12.48a4.26 4.26 0 00.96 0l.12-.48a2 2 0 012.52-1.45l.4.11c.18-.27.35-.56.47-.87l-.35-.35a2 2 0 010-2.86l.35-.35c-.12-.31-.29-.6-.48-.87l-.4.11a2 2 0 01-2.51-1.45l-.12-.48a4.25 4.25 0 00-.96 0l-.12.48a2 2 0 01-2.52 1.45l-.4-.11c-.18.27-.35.56-.48.87zm4 2.78a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ContentSettings16Filled = wrapIcon(rawSvg({}), 'ContentSettings16Filled');
export default ContentSettings16Filled;
      
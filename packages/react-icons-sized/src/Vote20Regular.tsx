import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.23 9h1.27a.5.5 0 010 1h-7a.5.5 0 010-1h.76a1 1 0 01-.13-1.17l2.5-4.33A1 1 0 0111 3.13l2.6 1.5A1 1 0 0113.96 6l-1.73 3zm.87-3.5L10.5 4 8 8.33 9.16 9h1.92l2.02-3.5z" fill={primaryFill} /><path d="M13.96 8l.58-1a1 1 0 01.76.4l2.5 3.33a1 1 0 01.2.6V16a1 1 0 01-1 1H3a1 1 0 01-1-1v-4.67a1 1 0 01.2-.6L4.7 7.4a1 1 0 01.8-.4h.96l-.48.83a1 1 0 00-.07.17H5.5l-2.25 3h13.5L14.5 8h-.54zM3 16h14v-4H3v4z" fill={primaryFill} /></svg>;
}

const Vote20Regular = wrapIcon(rawSvg({}), 'Vote20Regular');
export default Vote20Regular;
      